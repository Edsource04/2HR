import { Education } from './../../models/education';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hr-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  
@Input() educations: Education;
@Output() selectedEducation: EventEmitter<Education> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectEdu(index){
    this.selectedEducation.emit(this.educations[index]);
  }

}
