import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllItemsComponent } from './all-items/all-items.component';
import { CartitemComponent } from './cartitem/cartitem.component';

const routes: Routes = [
  {path:'item',component:AllItemsComponent},
  {path:'cart',component:CartitemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
