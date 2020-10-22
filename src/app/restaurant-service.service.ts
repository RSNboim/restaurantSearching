import { Injectable } from '@angular/core';
import {
  Restaurant,
  Course,
  User,
  Rate,
  UserType,
} from './comps/opening-screen/opening-screen.component';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RestaurantServiceService {
  restaurantsList: Restaurant[];
  usersList: User[];

  getRestaurants(): Restaurant[] {
    return (this.restaurantsList = [
      {
        name: 'Hamburgers',
        city: 'Petah-tikva',
        type: 'fast food',
        ratingArray: [],
        menu: [
          {
            name: 'home-burger',
            description:
              'Our very best red meet blend makes this burger to the flagship of our restaurant',
            image: 'image',
            price: 78,
            rating: 5,
          },
          {
            name: 'lamburger',
            description:
              'This burger has unique flavor and texture ,CAUTION-may be addictive',
            image: 'image',
            price: 87,
            rating: 4,
          },
        ],
      },
      {
        name: 'oved',
        city: 'Givataim',
        type: 'vegan fast food',
        ratingArray: [
          { rating: 4, raterName: 'popeye', restaurantName: 'oved' },
        ],
        menu: [
          {
            name: 'Sabich',
            description:
              'we took the good old course made of fried eggplant and boiled egg , and wrapped it with extra love and care',
            image: 'image',
            price: 22,
            rating: 5,
          },
          {
            name: 'choopar',
            description: 'Our special hot-dog with all kinds of Iraqi cuisine',
            image: 'image',
            price: 30,
            rating: 4,
          },
        ],
      },
    ]);
  }

  getUser(): User[] {
    return (this.usersList = [
      {
        userName: 'aaaa',
        email: 'Spinach@gmail.com',
        password: '1234',
        avatar: '../assets/popyeAvatar.jpeg',
        userRestaurantsRatings: [this.restaurantsList[0]],
        userCoursesRatings: [this.restaurantsList[0].menu[1]],
        type: UserType.customer,
      },
      {
        userName: 'Brutus',
        email: 'Beard@gmail.com',
        password: '0live4everMine',
        avatar: '../../assets/bru.jpeg',
        userRestaurantsRatings: [this.restaurantsList[1]],
        userCoursesRatings: [this.restaurantsList[1].menu[1]],
        type: UserType.manager,
      },
    ]);
  }

  // this function allows to add new restaurant to list
  addRestaurant(newRestaurant: Restaurant): void {
    this.getRestaurants().push(newRestaurant);
  }

  // this function adds rate to restaurant list
  rateRestaurant(rate: Rate): void {
    for (let r of this.getRestaurants()) {
      if (r.name == rate.restaurantName) {
        r.ratingArray.push(rate);
      }
    }
  }

  // this function allows to add new course to restaurant
  // theres a problem: how to validate the restaurant???????
  addCourse(currentRestaurant: Restaurant, newCourse: Course): void {
    this.getRestaurants().forEach((restaurant) => {
      if (currentRestaurant.name == restaurant.name) {
        currentRestaurant.menu.push(newCourse);
      }
    });
  }

// this function calculates restaurant rate by averaging its ratings array
averagingRatings(ratingsList: Rate[]): number {
  let ratingsArr = ratingsList.map((Rate) => Rate.rating);
  console.log(ratingsArr);
  let average =
    ratingsArr.reduce((total, next) => total + next, 0) /
    ratingsArr.length;
  console.log("average  :"+average);
  return average;
}

  getRestaurantByName(name:string){
  let currentRestaurant:Restaurant;
   for (let r of this.getRestaurants()){
    currentRestaurant= (r.name==name)?r:undefined;
   }
return currentRestaurant
}

  constructor(private _router: Router) {}
}
