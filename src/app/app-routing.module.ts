import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpeningScreenComponent } from './comps/opening-screen/opening-screen.component';
import { CustomerRegistrationComponent } from './comps/customer-registration/customer-registration.component';
import { CreateRestaurantComponent } from './comps/create-restaurant/create-restaurant.component';
import { CustomerPersonalScreenComponent } from './comps/customer-personal-screen/customer-personal-screen.component';
import { RestaurantMainScreenComponent } from './comps/restaurant-main-screen/restaurant-main-screen.component';
import { RestaurantCourseComponent } from './comps/restaurant-course/restaurant-course.component';
import { CustomerLoginComponent } from './comps/customer-login/customer-login.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { CreateCourseComponent } from './comps/create-course/create-course.component';

  const routes: Routes = [
    { path: 'home', component: OpeningScreenComponent },
    { path: '', redirectTo:"/home" ,pathMatch:'full' },
    { path: 'register', component: CustomerRegistrationComponent },
 { path: 'createRestaurant', component: CreateRestaurantComponent },
 { path: 'createCourse', component: CreateCourseComponent },

 { path: 'customerPersonalScreen', component: CustomerPersonalScreenComponent },
 { path: 'restaurantMainScreen', component: RestaurantMainScreenComponent },
 { path: 'restaurantCourse/:name', component: RestaurantCourseComponent },
{path:'login',component:CustomerLoginComponent},
{path:'**',component:NotFoundComponent},

 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  OpeningScreenComponent,
  CustomerRegistrationComponent,
  CreateRestaurantComponent,CreateCourseComponent,
  RestaurantCourseComponent,
  CustomerLoginComponent,NotFoundComponent,
  RestaurantMainScreenComponent
]
