import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-renderer',
  templateUrl: './button-renderer.component.html',
  styleUrls: ['./button-renderer.component.scss']
})
export class ButtonRendererComponent implements OnInit {
  @Input() rowData: any;
  constructor(    private router: Router,
    ) { }

  ngOnInit(): void {
    console.log(this.rowData);
  }

  redirectToCustomerDetails(rowdata){
    console.log(rowdata);
    this.router.navigate([]).then(result => { window.open(`customer/${rowdata.Id}`, '_blank'); });
  }

}
