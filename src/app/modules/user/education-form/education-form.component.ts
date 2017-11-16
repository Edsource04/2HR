import { Education } from './../../models/education';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'hr-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {
  
  schoolName = '';
  from: '';
  to: '';
  grade = '';
  selectedEducation: Education;
  educations: Array<Education> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    var user = this.userService.getActualUser();
    this.userService.getProfile(user._id).subscribe(profile => {
       this.educations = profile.educations;
    });
  }
  saveEducation(){
  }
  hasEducation():boolean{
    return this.educations.length > 0;
  }

  selectedEdu(event){
    this.from = event.dateFrom;
    this.to = event.dateTo;
    this.schoolName = event.schoolName;
    this.grade = event.gradeObtained;
    console.log(this.from);
    console.log(this.to);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    } else {
        return null;
    }
}

}
