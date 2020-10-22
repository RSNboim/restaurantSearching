import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/restaurant-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opening-screen',
  templateUrl: './opening-screen.component.html',
  styleUrls: ['./opening-screen.component.css'],
})
export class OpeningScreenComponent implements OnInit {
  selectedRet: Restaurant[];
  selectedType: string;
  selectedCity: string;
  restaurantsInCity: Restaurant[];
  currentCity: string;
  data: Restaurant[] = [];
rate:number;
  keyword = 'city';
  secondKeyword = 'type';
  // restaurantsList: Restaurant[] = [
  //   { name: 'hamburger',
  //    city: 'Petah-tikva',
  //     type: 'fast food',
  //      rating: 4 ,
  //      menu:[{name: "home-burger",
  //       description: "Our very best red meet blend makes this burger to the flagship of our restaurant",
  //       image: "image",
  //       price:78,
  //       rating: 5,},
  //     {  name: "lamburger",
  //       description: "This burger has unique flavor and texture ,CAUTION-may be addictive",
  //     image: "image",
  //     price:87,
  //     rating: 4,}]},
  //   // {
  // //     name: 'oved',
  // //     city: 'Givataim',
  // //     type: 'vegan food',
  // //     rating: 4,
  // //   },
  // //   {
  // //     name: 'humus-ajamy',
  // //     city: 'Jaffa',
  // //     type: 'humus fast food',
  // //     rating: 4,
  // //   },
  // //   {
  // //     name: 'baguette-martziano',
  // //     city: 'Jerusalem',
  // //     type: 'fast food',
  // //     rating: 3,
  // //   },
  // ];

  // this function made to limit  the user search for selected city only.
  selectEvent(selection: string) {
    this.selectedCity = selection;
  }

  // this function  creates an array of restaurant types that located at the selected city.
  getTypes(chosen: Restaurant): Restaurant[] {
    this.restaurantsInCity = this.data.filter((r) => r.city == chosen.city);
    return this.restaurantsInCity;
  }

  // this function gathers the chosen type & chosen city in order to
  //  call getRestaurants function with appropriate parameters.
  typeSelected(chosenType: Restaurant) {
    this.selectedType = chosenType.type;
    this.currentCity = this.restaurantsInCity[0].city;
    this.selectedRet = this.getRestaurants(this.currentCity, this.selectedType);
  }

  // this  function is Targeting the user search to display the appropriate restaurants.
  getRestaurants(city: string, type: string): Restaurant[] {
    return this.data.filter((r) => r.city == city && r.type == type);
  }

  updateRestaurantRate(r: Restaurant, rate: number) {
    let currentRate: Rate = {
      rating: rate,
      raterName: 'moshe',
      restaurantName: r.name,
      courseName: 'sabich',
    };
    console.log("currentRate:  "+currentRate.rating);

    this.restaurantService.rateRestaurant(currentRate);
  }


  constructor(public restaurantService: RestaurantServiceService, private router:Router) {}

  ngOnInit(): void {
    this.data = this.restaurantService.getRestaurants();
  }

getAverage(r:Restaurant):number{
 let averageRate:number;
 averageRate= this.restaurantService.averagingRatings(r.ratingArray)
return averageRate
}

onselect(restaurant:Restaurant){
this.router.navigate(['/restaurantCourse',restaurant.name])
}

}
export interface Restaurant {
  name: string;
  type: string;
  city: string;
  ratingArray: Rate[];
  menu: Course[];
}
export interface Course {
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
}

export interface User {
  userName: string;
  email: String;
  password: string;
  avatar: string;
  userRestaurantsRatings: Restaurant[];
  userCoursesRatings: Course[];
  type: UserType;
}
 export enum UserType {
  customer = 'customer',
  manager = 'manager',
}

export interface Rate {
  rating: number;
  raterName: string;
  restaurantName?: string;
  courseName?: string;
}
