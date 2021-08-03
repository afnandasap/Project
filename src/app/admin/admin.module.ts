import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ImageComponent } from './image/image.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProfilComponent } from './profil/profil.component';
import { LogoComponent } from './logo/logo.component';


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
        path:'logo',
        component:LogoComponent
      },
      {
        path:'profil',
        component:ProfilComponent
      },
 
 
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent, 
    EmployeeComponent,
    EmployeeDetailComponent,
    ImageComponent,
    ProfilComponent,
    LogoComponent,






    
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