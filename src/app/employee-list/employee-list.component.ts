import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employees } from '../employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employees[] = [];


  constructor(private employeeService: EmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees=data;
      console.log(data);
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['/update-employee', id]);
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
console.log(data);
      this.getEmployees();
    })
  }

  employeeDetails(id: number){
    this.router.navigate(['/employee-details', id]);
  }

}
