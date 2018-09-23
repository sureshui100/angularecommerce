import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { RestaurantlistComponent } from './modules/restaurant/components/restaurantlist/restaurantlist.component';
import { RestaurantdetailsComponent } from './modules/restaurant/components/restaurantdetails/restaurantdetails.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'restaurantlist',component:RestaurantlistComponent},
  {path:'restaurantdetails/:restid',component:RestaurantdetailsComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  HomeComponent,
  RestaurantlistComponent,
  RestaurantdetailsComponent,
  PagenotfoundComponent
];
