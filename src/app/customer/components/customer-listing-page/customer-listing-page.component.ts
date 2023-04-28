import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ButtonRendererComponent } from 'src/app/core/components/button-renderer/button-renderer.component';

@Component({
  selector: 'app-customer-listing-page',
  templateUrl: './customer-listing-page.component.html',
  styleUrls: ['./customer-listing-page.component.scss']
})
export class CustomerListingPageComponent implements OnInit {
  settings: any;
  customerList:any;
  source: LocalDataSource = new LocalDataSource();
  error: string;
  isLoading: boolean = true;

  constructor(private router: Router,
    private service:CustomerService
    ) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
  this.service.getAllCustomer().subscribe((res)=>{
    console.log(res);
    this.customerList = res.data;
    this.customerList = this.customerList.map(res => ({
      ...res,
      table: 'customer',
    }));
    console.log( this.customerList);
         // Setting,columns and data for smart tables
         this.settings = {
          pager: { display: false },
           actions: false,
          columns: {
            Full_Name: {
              title: 'Full Name',
              type: 'string',
              filterFunction: (value: any, query: string[]) => {
                return (
                  value.toLowerCase().includes(query) ||
                  value.toUpperCase().includes(query)
                );
              },
              width: '20%'
            },
            Email: {
              title: 'Email',
              type: 'string',
              filterFunction: (value: any, query: string[]) => {
                return (
                  value.toLowerCase().includes(query) ||
                  value.toUpperCase().includes(query)
                );
              },
              width: '20%'
            },
            Phone: {
              title: 'Phone',
              type: 'string',
              filterFunction: (value: any, query: string[]) => {
                return (
                  value.toLowerCase().includes(query) ||
                  value.toUpperCase().includes(query)
                );
              },
              width: '20%'
            },
            Address: {
              title: 'Address',
              type: 'string',
              filterFunction: (value: any, query: string[]) => {
                return (
                  value.toLowerCase().includes(query) ||
                  value.toUpperCase().includes(query)
                );
              },
              width: '20%'
            },
            Status: {
              title: 'Status',
              type: 'string',
              filterFunction: (value: any, query: string[]) => {
                return (
                  value.toLowerCase().includes(query) ||
                  value.toUpperCase().includes(query)
                );
              },
              width: '15%' 
            },
            action: {
              title: 'Action',
              type: 'custom',
              filter: false,
              renderComponent: ButtonRendererComponent,
              width: '5%',
              // onComponentInitFunction: (instance: any) => { instance.save.subscribe(row => {
              //   // this.getDetails();
              //  }); }
            }
          }
        };
        this.source.load(this.customerList);
    this.isLoading = false;
  },(error) => {
    console.log('error', error);
    this.error = error.error.message;
    this.isLoading = false;
  })
}
  

  newCustomer(){
    this.router.navigate(['customer/add'])
  }

}
