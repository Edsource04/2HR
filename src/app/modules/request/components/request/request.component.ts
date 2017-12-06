import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hr-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  
  formType: string[] = ['Seleccione el Tipo..','Vacaciones', 'Licencia', 'Permiso', 'Queja'];
  form: string;
  submittedBy: string;

  constructor() { }

  ngOnInit() {
    var actualUser = JSON.parse(localStorage.getItem('actualUser'));
   this.submittedBy = actualUser.user.username;
  }

  selectForm(selectedForm){
      console.log(selectedForm);
      this.form = selectedForm;
      console.log(this.form);
  }

}
