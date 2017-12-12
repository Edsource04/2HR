import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Component({
  selector: 'hr-work-letter',
  templateUrl: './work-letter.component.html',
  styleUrls: ['./work-letter.component.css']
})
export class WorkLetterComponent implements OnInit {
  
  employeeNumber: string;
  submittedBy: string;
  description: string;

  constructor(private toast: ToastsManager, private vcr: ViewContainerRef) {
    this.toast.setRootViewContainerRef(this.vcr);
   }

  ngOnInit() {
    var actualUser = JSON.parse(localStorage.getItem('actualUser'));
    this.submittedBy = actualUser.user.username;
  }

  sendRequest(){
    this.toast.success('Solicitud Recivida Exitosamente, la Carta sera procesada dentro de las 24 horas', 'Carta de Trabajo');
  }

}
