import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'hr-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css']
})
export class SendFormComponent implements OnInit {
   
  sender: string;
  recipient: string;
  header: string;

  constructor(private toast: ToastsManager, private vcr: ViewContainerRef, private location: Location) {
    this.toast.setRootViewContainerRef(this.vcr);
   }

  ngOnInit() {
    var actualUser = JSON.parse(localStorage.getItem('actualUser'));
    this.sender = actualUser.user.username;
  }

  send(){
       
      this.toast.onClickToast().subscribe(toast => {
              if(toast.data){
                console.log(toast.data);
              }
      });
      this.toast.success('Su Mensaje Ha Sido Enviado Correctamente!!', 'Enviado!!', {data: {url: 'admin/admin-dashboard/(messages)'}});
 
     
  }

}
