import { JobPost } from './../../models/job-post';
import { InformationService } from './../../information.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'hr-job-applicant-form',
    templateUrl: './job-applicant-form.component.html',
    styleUrls: ['./job-applicant-form.component.css']
})

export class JobApplicantFormComponent implements OnInit{
    
    firstName: string;
    carOwner: boolean;
    driverLicense: string;
    currentPost: JobPost;

    constructor(private route: ActivatedRoute, private infoService: InformationService){}

    ngOnInit(){
      this.firstName = '';
      this.carOwner = false;
      this.infoService.getPost(this.route.snapshot.params.index).subscribe(res => this.currentPost = res);
    }
}