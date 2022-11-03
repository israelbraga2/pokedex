import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//MODULE ROUTING
import { RoutingModule } from './routing.module';
//MODULE
import { SharedModule } from '../shared/shared.module';
//PAGES
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
