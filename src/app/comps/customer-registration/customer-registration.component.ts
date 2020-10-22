import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  Roles: any = [ 'manager', 'customer'];


  constructor() { }

  ngOnInit(): void {
  }

}
