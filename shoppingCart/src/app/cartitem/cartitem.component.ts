import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  constructor(private itemS:ItemServiceService){}
  
  //variable
  product:any;
  total =0;
  ngOnInit(){
    this.product=this.itemS.getElement();
    for(let val of this.product){
      this.total += val.price;
    }
  }

  calulate(even:any){
    this.total +=even;
  }
}
