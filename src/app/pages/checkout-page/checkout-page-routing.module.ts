import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'checkout/:id', component: CheckoutPageComponent},

];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class CheckoutPageRoutingModule { }
