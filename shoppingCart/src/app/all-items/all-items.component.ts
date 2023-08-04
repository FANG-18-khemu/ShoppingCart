import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {

  //variables for data
  items :any;

  // @Input()
  // product:any;
  // product={}

  // @Output()
  // productEvent= new EventEmitter<object>();

  constructor(private router:Router, private activatedRoute:ActivatedRoute,private itemS:ItemServiceService){
    //console.log(this.router.getCurrentNavigation().extras.state);
    // this.product =this.router.getCurrentNavigation()?.extras;
  }
 
  ngOnInit(){
    this.itemS.allProducts().subscribe(result=>this.items=result);
   // console.log(this.items)
  }

  update(prod:any)
  {
    // console.log(prod);
      this.itemS.pushElement(prod);
    
  }

  
}
