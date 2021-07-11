import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';
  import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './users/employee/employee.component';
import { EmployeeService } from './users/employee.service';
import { HomeComponent } from './home/home.component';
import { SortNameComponent } from './sort-name/sort-name.component';
import { EmployeelistComponent } from './users/employeelist/employeelist.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    SortNameComponent,
    EmployeelistComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
