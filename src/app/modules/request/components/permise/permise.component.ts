import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'hr-permise',
  templateUrl: './permise.component.html',
  styleUrls: ['./permise.component.css']
})
export class PermiseComponent implements OnInit {
   
  empNumber: string;
  submittedBy: string;
  fullname: string;
  manager: string;
  department: string;
  description: string;
  leaveDate: Date;
  
  
  constructor(private toast: ToastsManager, private vcr: ViewContainerRef) {
    this.toast.setRootViewContainerRef(this.vcr);
   }

  ngOnInit() {
    var actualUser = JSON.parse(localStorage.getItem('actualUser'));
    this.submittedBy = actualUser.user.username;
  }
  
  sendRequest(){
      this.toast.success('Hemos Recivido su Peticion, Gracias', 'Peticion!!');
  }

}
