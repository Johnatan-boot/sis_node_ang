import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PaymentFormComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: PaymentFormComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
