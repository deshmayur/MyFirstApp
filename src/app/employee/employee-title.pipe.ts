import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }

  transform(value: string,gender:string): string {
    if (gender.toLowerCase() == "male")
     return "Mr." + value;
    else
    return "Miss." + value;
  }

}
