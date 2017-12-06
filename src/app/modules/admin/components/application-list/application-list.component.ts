import { Component, OnInit } from '@angular/core';
import { Application } from './../../../information/models/application';
import { AdminService } from './../../admin.service';
import { Router } from '@angular/router';

@Component({
   selector: 'hr-application-list',
   templateUrl: './application-list.component.html',
   styleUrls: ['./application-list.component.css']
})

export class ApplicationListComponent implements OnInit{
   applications: Array<Application>;
   show: boolean;

   constructor(private adminService: AdminService, private router: Router){}
   
   ngOnInit(){
       this.show = true;
      this.adminService.getApplications().subscribe(app => this.applications = app);
   }
   
   viewApplication(id: string){
       console.log(id);
       this.show = false;
       this.router.navigate([{outlets: {admin: null}}]).then((go) =>{
        this.router.navigate(['admin', 'admin-dashboard', {outlets: {admin: ['apply', id]}}]);
       });
       
      
   }
}
