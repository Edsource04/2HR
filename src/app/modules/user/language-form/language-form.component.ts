import { UserService } from './../user.service';
import { Language } from './../../models/language';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hr-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {
  
  selectedLanguage: Language;
  languages: Array<Language> = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    var user = this.userService.getActualUser();
    this.userService.getProfile(user._id).subscribe((profile)=>{
      this.languages = profile.languages;
      this.selectedLanguage = new Language();
      this.selectedLanguage.languageName ='';
      this.selectedLanguage.percentage = '';
    });
  }

  hasLanguages(){
      return this.languages.length > 0;
  }

  selectLang(event){
      this.selectedLanguage = event;
  }

}
