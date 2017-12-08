import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'hr-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  
  empNumber: string;
  submittedBy: string;
  fullname: string;
  manager: string;
  department: string;
  attachment: File;
  description: string;
  atDate: Date = new Date();
  
  constructor(private toast: ToastsManager, private vcr: ViewContainerRef) {
    this.toast.setRootViewContainerRef(this.vcr);
   }

  ngOnInit() {
    var actualUser = JSON.parse(localStorage.getItem('actualUser'));
    this.submittedBy = actualUser.user.username;
  }
 
  sendLicense(){
      this.toast.success('Hemos Recibido la peticion de Licencia!', 'Formulario Enviado');
  }
}
