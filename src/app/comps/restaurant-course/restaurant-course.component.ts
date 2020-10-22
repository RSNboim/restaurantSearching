import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/restaurant-service.service';
import { Restaurant } from '../opening-screen/opening-screen.component';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-restaurant-course',
  templateUrl: './restaurant-course.component.html',
  styleUrls: ['./restaurant-course.component.css']
})
export class RestaurantCourseComponent implements OnInit {
name:string;
  currentRestaurant:Restaurant;
  averageRate:number;

  // getAverage(r:Restaurant):number{
    // let averageRate:number;
    // averageRate= this.restaurantService.averagingRatings(r.ratingArray)
  //  return averageRate
  //  }

  constructor(private restaurantService : RestaurantServiceService,    private route: ActivatedRoute,
    ) { }
  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.name = params.name;
      console.log(this.name);
      this.currentRestaurant=this.restaurantService.getRestaurantByName(this.name);
    this.averageRate= this.restaurantService.averagingRatings(this.currentRestaurant.ratingArray)
    console.log(this.currentRestaurant.name);
    });
  }


}



