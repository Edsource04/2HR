import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Component({
  selector: 'hr-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css']
})
export class ComplainsComponent implements OnInit {
  
  header: string;
  atDate: Date = new Date();
  description: string;
  submittedBy: string;
  
  constructor(private toast: ToastsManager, private vcr: ViewContainerRef) {
    this.toast.setRootViewContainerRef(this.vcr);
   }

  ngOnInit() {
     var actualUser = JSON.parse(localStorage.getItem('actualUser'));
     this.submittedBy = actualUser.user.username;
  }
  
  sendComplain(){
      this.toast.success('Queja Sometida Correctamente!, Le daremos seguimiento.', 'Gracias por su Envio');
  }

}
