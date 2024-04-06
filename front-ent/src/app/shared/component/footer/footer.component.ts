import {Component, Input} from '@angular/core';
import {FooterInfo} from "./FooterInfo";
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf]
})
export class FooterComponent {

  socialMediaInformation: Array<FooterInfo> = [
    {
      socialMediaIcon: ' pi pi-facebook',
      contactDetailsHerf: 'https://www.facebook.com/ntgclaritynetworks',
      title: 'facebook'
    },
    {
      socialMediaIcon: 'pi pi-google',
      contactDetailsHerf: 'https://ntgclarity.com/',
      title: 'google'
    },
    {
      socialMediaIcon: 'pi pi-linkedin',
      contactDetailsHerf: 'https://www.linkedin.com/company/ntg-clarity/mycompany/verification/',
      title: 'linkedin'
    },
    {
      socialMediaIcon: 'pi pi-twitter',
      contactDetailsHerf: 'https://twitter.com/NTGClarityStage',
      title: 'twitter'
    },
    {
      socialMediaIcon: 'pi pi-instagram',
      contactDetailsHerf: 'https://www.instagram.com/explore/locations/1017721966/ntg-clarity-networks-inc/',
      title: 'instagram'
    }
  ];

  openDaysInformation: Array<FooterInfo> = [
    {openDays: 'Everyday'},
    {openDays: '10.00 Am -10.00 Pm'},
  ];
  contactDetailsInformation: Array<FooterInfo> = [
    {contactDetailsIcon: 'pi pi-map-marker', contactDetailsCommand: 'location ', contactDetailsHerf: '#'},
    {contactDetailsIcon: 'pi pi-phone', contactDetailsCommand: '01092190082', contactDetailsHerf: '#'},
    {
      contactDetailsIcon: 'pi pi-globe',
      contactDetailsCommand: 'https://ntgclarity.com/ ',
      contactDetailsHerf: 'https://ntgclarity.com/'
    },
    {
      contactDetailsIcon: 'pi pi-inbox',
      contactDetailsCommand: 'ntgapps@ntgclarity.com',
      contactDetailsHerf: 'https://accounts.google.com/v3/signin/identifier?dsh=S-569605920%3A1679139941662845&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=ar&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession'
    },
  ];

}
