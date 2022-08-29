import { SnackbarMessagesService } from 'src/app/shared/services/snackbar-messages';
import { MatIconRegistry } from '@angular/material/icon';
import { APIService } from 'src/app/shared';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss']
})
export class HeaderFormComponent implements OnInit {

  constructor(private _api: APIService, private _snackbar: SnackbarMessagesService,
    private _registry: MatIconRegistry, private _sanitizer: DomSanitizer) {
    this._registry.addSvgIcon('credit-card-regular', this._sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/credit-card-regular.svg'));
  }

  ngOnInit(): void {
  }

  public contentFG: FormGroup = new FormGroup({
    logo: new FormControl("assets/braun-weiss-logo.webp"),
    subtitle: new FormControl("Enter the amount and invoice # to pay."),
    price: new FormControl(0.00, [Validators.required]),
    invoice: new FormControl(null, [Validators.required])
  });

  public price: number = 0.00;
  public total: number = 0.00;
  public fee: number = 0.00;
  public decimalLength: number = 0;


}
