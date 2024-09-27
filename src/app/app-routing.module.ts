import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { DestinationComponent } from './destination/destination.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ToursComponent } from './tours/tours.component';
import { TraveltipsComponent } from './traveltips/traveltips.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginpageComponent},
  {path:'reg',component:RegisterComponent},
  {path:'desti',component:DestinationComponent},
  {path:'tours',component:ToursComponent},
  {path:'tips',component:TraveltipsComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
