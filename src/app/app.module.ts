import { BrowserModule } from '@angular/platform-browser';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpeningScreenComponent } from './comps/opening-screen/opening-screen.component';
import { CustomerLoginComponent } from './comps/customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './comps/customer-registration/customer-registration.component';
import { CustomerPersonalScreenComponent } from './comps/customer-personal-screen/customer-personal-screen.component';
import { RestaurantMainScreenComponent } from './comps/restaurant-main-screen/restaurant-main-screen.component';
import { RestaurantCourseComponent } from './comps/restaurant-course/restaurant-course.component';
import { CreateRestaurantComponent } from './comps/create-restaurant/create-restaurant.component';
import { CreateCourseComponent } from './comps/create-course/create-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ManagerPersonalScreenComponent } from './comps/manager-personal-screen/manager-personal-screen.component';
import { RatingModule } from 'ng-starrating';
import { NotFoundComponent } from './comps/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    OpeningScreenComponent,
    CustomerLoginComponent,
    CustomerRegistrationComponent,
    CustomerPersonalScreenComponent,
    RestaurantMainScreenComponent,
    RestaurantCourseComponent,
    CreateRestaurantComponent,
    CreateCourseComponent,
    NavbarComponent,
    ManagerPersonalScreenComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RatingModule,
    AppRoutingModule,
    AutocompleteLibModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
