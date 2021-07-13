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
 showSpinner = true;
// avatar;
  constructor(private employeeService:EmployeeService , private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getUsers().subscribe((data)=>[
    //  console.log(data.data)
       setTimeout(() => {
      this.showSpinner = false
      this.users = data.data
       },1500)
        
    ])
  }
  getUsers(empValue){
  this.router.navigate(['/user',empValue.id],{queryParams:{id:empValue.id,avatar:empValue.avatar,firstname:empValue.first_name,last_name:empValue.last_name}})
  }

}
