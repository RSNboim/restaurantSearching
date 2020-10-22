import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/restaurant-service.service';
import { NgForm } from '@angular/forms';
import { Restaurant } from '../opening-screen/opening-screen.component';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  restaurantNameAutofilled: boolean;
  cityAutofilled: boolean;
  typeAutofilled: boolean;
newRestaurant:Restaurant={ } as Restaurant;


// this function gets the new Restaurant name and inserting it to the a new Restaurant obj.
insertRestaurantName(event) {
  return (this.newRestaurant.name = event.target.value);
}

// this function gets the new Restaurant city and inserting it to the a new Restaurant obj.
insertRestaurantCity(event) {
  return (this.newRestaurant.city = event.target.value);
}

// this function gets the new Restaurant type and inserting it to the a new Restaurant obj.
insertRestaurantType(event) {
  return (this.newRestaurant.type = event.target.value);
}

// this function pushes the created Restaurant to the  restaurant's  list(using service function)
insertNewRestaurant(event) {
  console.log(this.srv.getRestaurants(),this.newRestaurant);
  this.srv.addRestaurant(this.newRestaurant );
}

// this function clears all properties from course form
clearForm(restaurantForm:NgForm):void{
  restaurantForm.reset()
}

  constructor(private srv:RestaurantServiceService) { }

  ngOnInit(): void {
  }

}
