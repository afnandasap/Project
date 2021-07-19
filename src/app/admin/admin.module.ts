import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/employee' 
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent, 
    EmployeeComponent,
    EmployeeDetailComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
}
)
export class AdminModule { }