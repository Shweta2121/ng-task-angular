import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm:FormGroup;
  isLoading: boolean = true;
  id:string;
  customerDetails:any;
  isEditForm:boolean =false;
  readonly:boolean=false;
  private unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private serv:CustomerService,
    private router: Router,private route: ActivatedRoute,
    private service:CustomerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      this.id = params.get('id');
      console.log(this.id);
      if(this.id){
        this.getCustomer();
      }
    });
    this.createForm();
  }

  getCustomer(){
    this.service.getCustomer(this.id).subscribe((res)=>{
      this.isEditForm =true;
      this.readonly=true;
      this.customerDetails = res.data[0];
      this.updateFormValues();
    })
  }

  edit(){
    this.readonly = false;
  }

  updateFormValues(){
    this.customerForm.patchValue({
      Full_Name:this.customerDetails.Full_Name,
      Email:this.customerDetails.Email,
      Phone:this.customerDetails.Phone,
      Address:this.customerDetails.Address
    })
  }

  createForm() {
    this.customerForm = this.fb.group({
      Full_Name: ['', Validators.required],
      Email: ['', Validators.required],
      Phone: ['', Validators.required],
      Address: ['', Validators.required],
      Status: ['Active']
    });
  }

  delete(){
    this.serv.deleteCustomerBranch(this.customerDetails.Id).pipe(takeUntil(this.unsubscribe)).subscribe((res) =>{
      this.toastr.success(res.message);
      this.router.navigate(['customer/all-customer'])
    })
  }

  submitHandler(){
    if (this.customerForm.valid) {
      this.isLoading = true;
      if(this.isEditForm){
        const payload={
          Full_Name: this.customerForm.value.Full_Name,
          Email:this.customerForm.value.Email,
          Phone: this.customerForm.value.Phone,
          Address: this.customerForm.value.Address,
          Status:this.customerForm.value.Status,
          Id:this.customerDetails.Id,
        }
        this.serv.updateCustomer(payload).subscribe((res:any)=>{
          this.isLoading = false;
          this.toastr.success(res.message);
          this.customerForm.reset();
          this.router.navigate(['customer/all-customer'])
        },
        (err) => {
          console.log(err);
        }
        )
      }else{
        this.serv.createCustomer(this.customerForm.value).subscribe((res:any)=>{
          this.isLoading = false;
          this.toastr.success(res.message);
          this.customerForm.reset();
          this.router.navigate(['customer/all-customer'])
        },
        (err) => {
          console.log(err);
        }
        )
      }
    }
  }
}
