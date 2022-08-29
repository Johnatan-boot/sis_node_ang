import { HeaderFormComponent } from './pages/header-form/header-form.component';
import { CheckoutPageRoutingModule } from './pages/checkout-page/checkout-page-routing.module';
import { CheckoutPageModule } from './pages/checkout-page/checkout-page.module';
import { HeaderModule } from './pages/header/header.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WindowRef} from "./WindowRef";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TOAST_NOTIFICATIONS_CONFIG, ToastNotificationsModule} from "ngx-toast-notifications";
import {LoadingBarModule} from "@ngx-loading-bar/core";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home';
import { PaymentFormModule, PaymentFormRoutingModule } from './pages';
import { MaterialModule, SharedModule } from './shared';
import { FooterComponent } from './pages/footer/components/footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HeaderFormComponent,
    FooterComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    ToastNotificationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CheckoutPageRoutingModule,
    CheckoutPageModule,
    SharedModule,
    MaterialModule,
    HeaderModule,
    HomeModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    PaymentFormModule,
    PaymentFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,

    AppRoutingModule,
  ],
  exports:[
  HeaderFormComponent,
  ],
  providers: [
    {provide: TOAST_NOTIFICATIONS_CONFIG, useValue: {duration: 6000, type: 'dark', position: 'top-center'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
