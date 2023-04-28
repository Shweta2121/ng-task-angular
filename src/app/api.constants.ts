import { environment } from '../environments/environment';

export default class APIConstants {
  /* Login, signup, forgot and reset password */
  public static LOGIN: string = `${environment.API_BASE}adminuser/Login`;
  public static GET_CUSTOMERS: string = `${environment.API_BASE}customer/customers`;
  public static CREATE_CUSTOMER: string = `${environment.API_BASE}customer/addcustomer`;
  public static UPDATE_CUSTOMER: string = `${environment.API_BASE}customer/updatecustomer`;
  public static DELETE_CUSTOMER: string = `${environment.API_BASE}customer/deletecustomer/`;
  public static GET_CUSTOMER: string = `${environment.API_BASE}customer/customersdetails/`;
  // public static SIGNUP: string = `${environment.API_BASE}user_registeration`;
}