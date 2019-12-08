import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { LandComponent } from './land/land.component'
import { LoginComponent } from './login/login.component'
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LandComponent },
  { path: 'home', component: HomeComponent },
  { path: 'department', component: DepartmentListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  DepartmentListComponent,
  AboutComponent,
  LandComponent,
  LoginComponent,
  SignUpComponent
]
