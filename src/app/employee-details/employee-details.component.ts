import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employees } from '../employees';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id! : number
  employee! : Employees
  constructor(private route :ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee =new Employees();
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    });
  }

}
