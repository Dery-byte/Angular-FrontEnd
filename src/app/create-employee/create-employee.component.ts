import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employees } from '../employees';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employees = new Employees();

  constructor( private employerservice: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employerservice.addEmployee(this.employee).subscribe(data=>{
      console.log(data)
      this.goToEmployeeList();
    },
    error=>console.log(error));
  }
  goToEmployeeList(){
this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.saveEmployee();
     console.log(this.employee)
  }
}
