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
  @Input()
  footerSocialData: Array<FooterInfo> | undefined;
  @Input()
  footerOpenDays: Array<FooterInfo> | undefined;
  @Input()
  footerContactDetails: Array<FooterInfo> | undefined;
}
