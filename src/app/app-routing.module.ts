import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersDashboardComponent } from './shared/components/users-dashboard/users-dashboard.component';
import { UsersDetailsComponent } from './shared/components/users-details/users-details.component';
import { UsersFormComponent } from './shared/components/users-form/users-form.component';
import { ProductsDashboardComponent } from './shared/components/products-dashboard/products-dashboard.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : 'users',
    component : UsersDashboardComponent
  },
  {
    path : 'users/addUser',
    component : UsersFormComponent
  },
  {
    path : 'users/:userId',
    component : UsersDetailsComponent
  },
  {
    path : 'users/:userId/edit',
    component : UsersFormComponent
  },
  {
    path : 'products',
    component : ProductsDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
