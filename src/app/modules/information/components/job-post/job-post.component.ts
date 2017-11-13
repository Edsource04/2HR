import { InformationService } from './../../information.service';
import { JobPost } from './../../models/job-post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hr-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
  
  jobPosts: Array<JobPost> = [];

  constructor(private infoService: InformationService) { }

  ngOnInit() {
    this.infoService.getPosts().subscribe(res => this.jobPosts = res);
  }

}
