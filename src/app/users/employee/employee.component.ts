import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
users:any;
// avatar;
  constructor(private employeeService:EmployeeService , private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getUsers().subscribe((data)=>[
    //  console.log(data.data)
     this.users = data.data
    ])
  }
  getUsers(empValue){
  this.router.navigate(['/user',empValue.id],{queryParams:{avatar:empValue.avatar,firstname:empValue.first_name,last_name:empValue.last_name}})
  }

}
