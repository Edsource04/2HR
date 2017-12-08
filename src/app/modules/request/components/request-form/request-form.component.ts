
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Component({
  selector: 'hr-vacation-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class VacationFormComponent implements OnInit {
  
  fullname: string;
  manager: string;
  leaveDate: Date;
  empNumber: string;
  description: string;

  constructor(private toast: ToastsManager, private vcr: ViewContainerRef) {
    this.toast.setRootViewContainerRef(this.vcr);
   }

  ngOnInit() {
     
  }

  sendForm(){
    this.toast.success('Sus Vacaciones estan Registrada, Le daremos Seguimiento', 'Vacaciones');
  }

}
