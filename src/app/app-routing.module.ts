import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './users/employee/employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './users/employeelist/employeelist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'user',component:EmployeeComponent},
  {path:'user/:id',component:EmployeelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
