import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  
  private url ="https://fakestoreapi.com/products";
  private product:any=[];

  constructor(private ht:HttpClient) { }

  allProducts(){
    return this.ht.get(this.url);
  }

  getProductById(id:any){
    return this.ht.get(`${this.url}/${id}`);
  }

  pushElement(val:any)
  {
    
    for (let value of this.product) {
      if(value.id == val.id )
      {
        return;
      }
  }this.product.push(val);
  }

  getElement()
  {
    return this.product;
  }
}
