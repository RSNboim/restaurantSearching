import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/restaurant-service.service';

@Component({
  selector: 'app-customer-personal-screen',
  templateUrl: './customer-personal-screen.component.html',
  styleUrls: ['./customer-personal-screen.component.css']
})
export class CustomerPersonalScreenComponent implements OnInit {

  constructor(private srv : RestaurantServiceService) { }

  ngOnInit(): void {

  }

}
