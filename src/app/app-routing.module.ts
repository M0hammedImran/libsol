import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'department', component: DepartmentListComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  DepartmentListComponent,
  AboutComponent]
