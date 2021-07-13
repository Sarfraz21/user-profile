import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
user:any={};
finduserDetails:any;

  constructor(private employeeService:EmployeeService , private _activatedRoute:ActivatedRoute , private _route:Router) { }
  
  ngOnInit(): void {
 this._activatedRoute.queryParams.subscribe(
      params => {
        console.log('Got the value: ', params);
        this.user.first_name=params.firstname;
        this.user.last_name=params.last_name;
        this.user.avatar=params.avatar;
        this.user.id = + (params.id);
      }
    );
        this.employeeService.getUsers().subscribe(data=>{
      console.log(data.data);
      console.log(this.user.id);
      
      this.finduserDetails=data.data.find(x => {
        // console.log("x data",x);
        return x.id === this.user.id
        
      });
      console.log("finddetails",this.finduserDetails);
      
    });
   
  }

}
