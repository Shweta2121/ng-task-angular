import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
totalUser:number;
deletedUser:number;

  constructor(private router: Router,
    private service:CustomerService
    ) { }

  ngOnInit(): void {
    this.getCount();
  }

  getCount(){
    this.service.getAllCustomer().subscribe((res)=>{
      console.log(res);
      this.totalUser=res.data.filter((res=>res.Status === 'Active')).length;
      console.log(this.totalUser);
      this.deletedUser=res.data.filter((res=>res.Status === 'Inactive')).length;
    })
  }

  redirectToCustomer(){
    this.router.navigate(['/customer/all-customer']);
  }

}
