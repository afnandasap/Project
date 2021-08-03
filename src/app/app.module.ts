import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//ini Material
import { MaterialDesign } from './material/material.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';



//firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ShoppingComponent } from './shop/shopping/shopping.component';
import { ListComponent } from './shop/list/list.component';
import { ProfileComponent } from './shop/profile/profile.component';
import { LogoComponent } from './shop/logo/logo.component';
import { LogoArtComponent } from './shop/logo-art/logo-art.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingComponent,
    ListComponent,
    ProfileComponent,
    LogoComponent,
    LogoArtComponent,

  
  
  
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatDatepickerModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
 
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
