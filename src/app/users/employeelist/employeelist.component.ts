import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
first_name;
last_name;
avatar;
  constructor(private employeeService:EmployeeService , private _activatedRoute:ActivatedRoute , private _route:Router) { }
  
  ngOnInit(): void {
 this._activatedRoute.queryParams.subscribe(
      params => {
        console.log('Got the value: ', params);
        this.first_name=params.firstname;
        this.last_name=params.last_name;
        this.avatar=params.avatar;
      }
    )
  }

}
