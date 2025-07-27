import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersDashboardComponent } from './shared/components/users-dashboard/users-dashboard.component';
import { UsersFormComponent } from './shared/components/users-form/users-form.component';
import { UsersDetailsComponent } from './shared/components/users-details/users-details.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { BackBtnComponent } from './shared/components/back-btn/back-btn.component';
import { ProductsDashboardComponent } from './shared/components/products-dashboard/products-dashboard.component';
import { HomeComponent } from './shared/components/home/home.component';
import { MaterialModule } from './material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersDashboardComponent,
    UsersFormComponent,
    UsersDetailsComponent,
    NavbarComponent,
    GetConfirmComponent,
    BackBtnComponent,
    ProductsDashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
