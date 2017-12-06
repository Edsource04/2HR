import { Component, OnInit} from '@angular/core';
import { JobPost} from './../../models/job-post';
import { JobDescription } from './../../models/job-description';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationService } from './../../information.service';
import { Location } from '@angular/common';

@Component({
    selector: 'hr-job-applicant-view',
    templateUrl: './job-applicant-view.component.html',
    styleUrls: ['./job-applicant-view.component.css'],
})

export class JobApplicantViewComponent implements OnInit{
    
    jobPosts: Array<JobPost> = [];
    activatedPost: JobPost;

    constructor(private extRouter: ActivatedRoute, private jobInfo: InformationService, private location: Location, private router: Router){}

    ngOnInit(){
           console.log(this.extRouter.snapshot.params.index);
    }

    goBack(){
        this.location.back();
    }

    goToApplicantCenter(){
        this.router.navigateByUrl('news-jobs/applicant-center');
    }
}