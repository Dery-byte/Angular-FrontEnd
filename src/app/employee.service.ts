import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employees"; 

  constructor( private  http: HttpClient) { }

   getEmployeesList(): Observable<Employees[]>{
     return this.http.get<Employees[]>(`${this.baseUrl}`);
   }


   addEmployee(employee: Employees): Observable<Object>{
     return this.http.post(`${this.baseUrl}`, employee);
   }

   getEmployeeById(id: number): Observable<Employees>{
     return this.http.get<Employees>(`${this.baseUrl}/${id}`);
   }

   updateEmployee(id: number, employee :Employees): Observable<Object>{
     return this.http.put(`${this.baseUrl}/${id}`, employee);
   }

   deleteEmployee(id: number): Observable<Object>{
     return this.http.delete(`${this.baseUrl}/${id}`);
   }
}