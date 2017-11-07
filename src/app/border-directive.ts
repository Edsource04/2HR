import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({selector: '[borderLeft]'})
export class BorderLeftDirective{
    isMatch: boolean = false;
    @Input() password: String;

    constructor(private el: ElementRef){
        this.el.nativeElement.style.borderLeft = this.isMatch ? '5px solid #42A948' : '5px solid #a94442';
    }
    
    @HostListener('keyup', ['$event'])
    onkeyup(e){
        if (this.el.nativeElement.value == this.password)
             {
                 this.isMatch = true;
                 this.el.nativeElement.style.borderLeft = '5px solid #42A948';
             }else{
                 this.isMatch = false;
                 this.el.nativeElement.style.borderLeft = '5px solid #a94442';
             }
    }
}

