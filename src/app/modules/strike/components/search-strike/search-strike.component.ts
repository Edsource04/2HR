
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../employee/services/employee.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of }      from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Employee } from '../../../employee/models/employee';
import { Department } from '../../../employee/models/department';

@Component({
  selector: 'hr-search-strike',
  templateUrl: './search-strike.component.html',
  styleUrls: ['./search-strike.component.css']
})
export class SearchStrikeComponent implements OnInit {
  
  empNumber: string;
  employees$: Observable<Employee[]>;
  employeeSelected: boolean = false;
  selectedEmployee: Employee;
 
  private searchEmployee = new Subject<string>();

  constructor(private empService: EmployeeService) { }
  
  search(emp: string): void{
     this.searchEmployee.next(emp);
  }

  ngOnInit() {
    this.employees$ = this.searchEmployee.pipe(
      //wait 300 ms after keystroke
      debounceTime(300),

      //ignore new emp if same as previous emp
      distinctUntilChanged(),

      //switch to new search
      switchMap((empp: string) => 
        this.empService.getEmployee(empp)),
    );
    console.log(this.employees$);
  }

  getEmployee(emp: Employee){
    
    this.selectedEmployee = emp;
    this.employeeSelected = true;
  }

}
