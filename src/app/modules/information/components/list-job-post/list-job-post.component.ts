import { JobPost } from './../../models/job-post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hr-list-job-post',
  templateUrl: './list-job-post.component.html',
  styleUrls: ['./list-job-post.component.css']
})
export class ListJobPostComponent implements OnInit {
  
  @Input() jobPosts: Array<JobPost>;
  
  constructor() { }

  ngOnInit() {
  }

}
