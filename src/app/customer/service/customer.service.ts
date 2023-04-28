import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import APIConstants from 'src/app/api.constants';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(    private http: HttpClient,
    ) { }

   // create Customer
   createCustomer(data: any): Observable<any> {
    return this.http.post(`${APIConstants.CREATE_CUSTOMER}`, data);
  }

     // create Customers
     getAllCustomer(): Observable<any> {
      return this.http.get<any>(`${APIConstants.GET_CUSTOMERS}`);
    }

      // Get customer
  getCustomer(id: string): Observable<any> {
    return this.http.get(`${APIConstants.GET_CUSTOMER}${id}`);
  }

   // Update customer
   updateCustomer(data: any): Observable<any> {
    return this.http.post(`${APIConstants.UPDATE_CUSTOMER}`, data);
  }

    //  Delete a Branch
    deleteCustomerBranch(id: string): Observable<any> {
      return this.http.delete(`${APIConstants.DELETE_CUSTOMER}${id}`);
    }
}
