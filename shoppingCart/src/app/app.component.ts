import { Component } from '@angular/core';
import { ItemServiceService } from './item-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingCart';

  val=0;
  constructor(private sr:ItemServiceService){
    let count=0;
    for(let val of this.sr.getElement()){
      count++;
    }
    this.val= count;
  }
  shoppingCart:any;

  updatecart(event:any){
    this.shoppingCart.push(event);
    console.log(this.shoppingCart);
  }


}
