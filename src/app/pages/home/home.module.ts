import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components';
import { MaterialModule } from 'src/app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
//import { HeaderFormComponent } from '../header-form';



@NgModule({
  declarations: [
    HomeComponent,
    //HeaderFormComponent,
    


  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    FormsModule,

  ]
})
export class HomeModule { }
