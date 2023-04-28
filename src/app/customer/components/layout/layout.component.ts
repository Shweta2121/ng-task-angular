import {Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  constructor(private auth:AuthService) {
  }

  ngOnInit() {
  }




  logOut(){
    this.auth.logout();
  }

}
