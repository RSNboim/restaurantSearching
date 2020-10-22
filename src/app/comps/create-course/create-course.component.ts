import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/restaurant-service.service';
import { Course, Restaurant } from '../opening-screen/opening-screen.component';
import { Target } from '@angular/compiler';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  courseNameAutofilled: boolean;
  descriptionAutofilled: boolean;
  imageAutofilled: boolean;
  priceAutofilled: boolean;
  newCourse:Course = { } as Course;
  mockCurrentRestaurant:Restaurant=
  {name:'oved',city:"Givataim",type:"iraqi cuisine",ratingArray:[],menu: [{
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
  }]};

// this function gets the new course name and inserting it to the a new course obj.
  insertCourseName(event) {
    return (this.newCourse.name = event.target.value);
  }

  // this function gets the new course description and inserting it to the a new course obj.
  insertCourseDescription(event) {
    return (this.newCourse.description = event.target.value);
  }

  // this function gets the new course price and inserting it to the a new course obj.
  insertCoursePrice(event) {
    return (this.newCourse.price = event.target.value);
  }

// this function pushes the created course to the current restaurant's menu list(using service function)
  insertNewCourse(event) {
    this.srv.addCourse(this.mockCurrentRestaurant ,this.newCourse);
    console.log(this.srv.getRestaurants(),this.mockCurrentRestaurant);
  }

  // this function clears all properties from course form
  clearForm(courseForm:NgForm):void{
    courseForm.reset()
  }

  constructor(private srv: RestaurantServiceService) {
  }

  ngOnInit(): void {}
}
