import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({selector: '[editable]'})
export class EditableDirective{
   
    @Input() theValue: String;

    constructor(private el: ElementRef){
        
        
    }

    ngOnInit(){
        
        if(this.theValue !== ''){
            this.el.nativeElement.disabled = true;
        }else{
            this.el.nativeElement.disabled = false;
        }
    }
}