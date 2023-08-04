import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.css']
})
export class DisplaytableComponent {

  @Input('product')
  prod:any;

  inputnumber=1;

  @Output()
  total= new EventEmitter();

  plus(){
    this.inputnumber+=1;
    this.total.emit(this.prod.price);
  }
  
  minus(){
    if(this.inputnumber >1){
    this.inputnumber-=1;
    this.total.emit(-this.prod.price);
    }
  }

}
