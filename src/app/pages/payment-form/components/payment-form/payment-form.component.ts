import { environment } from 'src/environments/environment';
import { RestService } from './../../../../shared/services/restservice/rest.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { APIService } from 'src/app/shared';
import { SnackbarMessagesService } from 'src/app/shared/services/snackbar-messages';
import { MatIconRegistry } from '@angular/material/icon';
import { Toaster } from 'ngx-toast-notifications';
import { ActivatedRoute } from '@angular/router';

declare global {
  interface Window {
    Stripe?: any;
  }
}

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  paymentHandler: any = null;
  success: boolean = false;
  failure:boolean = false;
  checkout: any;

//Permanecer codigo Preservar
  constructor(private _api: APIService, private _snackbar: SnackbarMessagesService,
    private _registry: MatIconRegistry, private _sanitizer: DomSanitizer,
    private fb: FormBuilder,private toaster: Toaster,
    private cd: ChangeDetectorRef,private restService: RestService,
    private route: ActivatedRoute) {
    this._registry.addSvgIcon('credit-card-regular', this._sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/credit-card-regular.svg'));
    this.STRIPE = window.Stripe(environment.stripe_pk);
  }

  ngOnInit(): void {
    this.invokeStripe();
  }

  async initPay(): Promise<any> {
    try {
      this.form.disable();
      //TODO: SDK de Stripe genera un TOKEN para la intencion de pago!
      const {token} = await this.STRIPE.createToken(this.cardNumber)

      //TODO: Enviamos el token a nuesta api donde generamos (stripe) un metodo de pago basado en el token
      //TODO: tok_23213
      //const {data} = await this.restService.sendPayment(token.id, this.id)

      //TODO: Nuestra api devolver un "client_secret" que es un token unico por intencion de pago
      //TODO: SDK de stripe se encarga de verificar si el banco necesita autorizar o no
      //this.STRIPE.handleCardPayment(data.client_secret)
        .then(async () => {

          //TODO: 👌 Money Money!!!
          this.toaster.open({text: 'Dinerito dineron', caption: 'Yeah!', type: 'success'})

          //TODO: Enviamos el id "localizador" de nuestra orden para decirle al backend que confirme con stripe si es verdad!
          await this.restService.confirmOrder(this.id)
        })
        .catch(() => {
          this.toaster.open('Error con el pago')
        })
    } catch (e) {
      this.toaster.open({text: 'Algo ocurrio mientras procesaba el pago', caption: 'ERROR', type: 'danger'})
    }

  }


  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Jj2B8E9r1Q1FPXxxhhxIIZp39vtVb5HJUFWJD8hlhf60j4j65UsajK2MvVE13iOAziUSUgknN4UvazwJHdsxyxf00ExYIiWu1',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
        }
        else {
          this.failure = true
        }
      });
    };

    paymentHandler.open({
      name: 'Coding Shiksha',
      description: 'This is a sample pdf file',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: '',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }



  public contentFG: FormGroup = new FormGroup({
    logo: new FormControl("assets/braun-weiss-logo.webp"),
    subtitle: new FormControl("Enter the amount and invoice # to pay."),
    price: new FormControl(0.00, [Validators.required]),
    invoice: new FormControl(null, [Validators.required])
  });

  //Permanecer codigo Preservar


  public price: number = 0.00;
  public total: number = 0.00;
  public fee: number = 0.00;
  public decimalLength: number = 0;

  private readonly STRIPE!: any; //TODO: window.Stripe
  private elementStripe!: any;
  cardNumber: any;
  cardCvv: any;
  cardExp: any;
  form: FormGroup = new FormGroup({})
  id!: string;
  orderData!: any;




}
