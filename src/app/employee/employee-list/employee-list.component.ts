import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeInterface } from './employee-interface';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {

    employees: EmployeeInterface[];
    selectedEmployeeCountRadioButton: string = 'All';

  constructor(private _employeeService: EmployeeService) {
   
   }

   

    ngOnInit() {
        this.employees = this._employeeService.getEmployees();
    }


    onClick(){
        //this.getEmployees()
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
}

getTotalEmployees():number{
    return this.employees.length
}

getTotalMaleEmployees():number{
    return this.employees.filter(x=>x.gender==="Male").length;
}

getTotalFemaleEmployees():number{
    return this.employees.filter(x=>x.gender==="Female").length;
}

onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;   
}

}
