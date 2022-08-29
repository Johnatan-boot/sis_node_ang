import { Component, OnInit } from '@angular/core';
import { general } from 'src/app/shared';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //Daqui até aqui ... footer
  public privacyPolicylink: string = general.externalLinks.privacyPolicy;
  public supportLink: string = general.externalLinks.support;
  public termsOfUseLink: string = general.externalLinks.termsOfUse;
  //Daqui até aqui ... footer


  constructor() { }

  ngOnInit(): void {
  }

}
