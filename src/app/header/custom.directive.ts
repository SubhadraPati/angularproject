import {Directive,ElementRef} from '@angular/core';  

@Directive({
    selector:'[app-header]'
})
export class customDirective{
    constructor(el:ElementRef){
        el.nativeElement.style.background="white";
        el.nativeElement.style.padding="50p";
        el.nativeElement.style.border="2px solid red";
        
    }
}