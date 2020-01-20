import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  fName:string="Tom";
  lName:string="Hop";
  gender:string="Male";
  age:number=20;

  constructor() { }

  ngOnInit() {
  }

}
