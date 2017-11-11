import { Language } from './../../models/language';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hr-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
  
  @Input() languages: Array<Language> = [];
  @Output() selectLang: EventEmitter<Language> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  selectLanguage(index){
    this.selectLang.emit(this.languages[index]);
  }
}
