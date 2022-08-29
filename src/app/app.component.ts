
import { Component } from '@angular/core';
import { general } from './shared';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 
 //Daqui até aqui ... footer
 public privacyPolicylink: string = general.externalLinks.privacyPolicy;
 public supportLink: string = general.externalLinks.support;
 public termsOfUseLink: string = general.externalLinks.termsOfUse;
 //Daqui até aqui ... footer
}
