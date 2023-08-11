import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "profile", component: ProfileComponent},
  {path: "login", component: LoginComponent},
  {path: "matchdetails", component: MatchdetailsComponent},
  {path: "tintuc", component: TintucComponent},
  {path: "shop", component: ShopComponent},
  {path: "profile1", component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
