import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RestaurantServiceService } from 'src/app/restaurant-service.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
})
export class CustomerLoginComponent implements OnInit {
  nameAndPassWordAreValid: boolean;

  constructor(private router: Router, private srv: RestaurantServiceService) {}

  ngOnInit(): void {
    console.log(1111111111111);

    console.log('ar:::: ',this.srv.getUser());

  }


    // this function validates both user name and password
    onSubmit(f: NgForm): void {
      for (let u of this.srv.getUser()) {
        console.log('UUU: ', u.userName, u.password)
        console.log('fff: ', f.value.passwordBox)




      if (u.userName == f.value.nameBox && u.password == f.value.passwordBox) {
        this.router.navigate(['/home']);
      // } else {
      //   this.router.navigate(['/**']);
      // }
    }}
}}
