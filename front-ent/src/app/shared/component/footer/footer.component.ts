import {Component, Input} from '@angular/core';
import {FooterInfo} from "./FooterInfo";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input()
  footerSocialData: Array<FooterInfo> | undefined;
  @Input()
  footerOpenDays: Array<FooterInfo> | undefined;
  @Input()
  footerContactDetails: Array<FooterInfo> | undefined;
}
