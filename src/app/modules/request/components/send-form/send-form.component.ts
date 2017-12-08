import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';


@Component({
  selector: 'hr-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css']
})
export class SendFormComponent implements OnInit {
   
  sendBy: string;

  constructor(private toast: ToastsManager, private vcr: ViewContainerRef) {
    this.toast.setRootViewContainerRef(this.vcr);
   }

  ngOnInit() {
    var actualUser = JSON.parse(localStorage.getItem('actualUser'));
    this.sendBy = actualUser.user.username;
  }

  send(){
    this.toast.success('Archivo Enviado correctamente!, Gracias', 'Archivo Adjunto');
  }

}
