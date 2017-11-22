import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'hr-job-center',
    templateUrl: './job-center.component.html',
    styleUrls: ['./job-center.component.css']
})

export class JobCenterComponent implements OnInit{
    
    constructor(private router: Router){}

    ngOnInit(){

    }

    seePost(index: number){
            this.router.navigateByUrl('news-jobs/posts/' + index);
    }

    createForm(index: number){
        this.router.navigateByUrl('news-jobs/applicant-form/'+ index);
    }

    editForm(index: number){
        this.router.navigateByUrl('news-jobs/posts/' + index);
    }
}