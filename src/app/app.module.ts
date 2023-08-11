import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule,Routes  } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "profile", component: ProfileComponent},
  {path: "login", component: LoginComponent},
  {path: "matchdetails", component: MatchdetailsComponent},
  {path: "tintuc", component: TintucComponent},
  {path: "shop", component: ShopComponent},
];  

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    MatchdetailsComponent,
    TintucComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
