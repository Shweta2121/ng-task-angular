import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup;

  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      User_Name: ['', [Validators.required]],
      Password: ['', Validators.required],
    });
  }

  /** * Handle login form submission*/
  async submitHandler() {
    this.isLoading = true;
      if (this.loginForm.valid) {
         this.authService.login(this.loginForm.value).subscribe(async (state:any) => {
          this.isLoading = false;
          if (state.status) {
            this.router.navigate(['/customer/dashboard']);
          }
          else{
            this.toastr.error('User not found');
          }
         });
      }
      else {
        this.OnSubmitValidation();
      }
}

private OnSubmitValidation() {
    Object.keys(this.loginForm.controls).forEach(field => {
      const control = this.loginForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
}

}