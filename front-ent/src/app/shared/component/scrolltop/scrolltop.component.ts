import {Component, Input} from '@angular/core';
import {ScrollInfo} from "./ScrollInfo";

@Component({
    selector: 'app-scrolltop',
    templateUrl: './scrolltop.component.html',
    styleUrls: ['./scrolltop.component.scss'],
    standalone: true
})
export class ScrolltopComponent {

  @Input()
  ScrollIconData: Array<ScrollInfo> | undefined;

  topFunction($event: MouseEvent, myBtn: HTMLButtonElement) {
    $event.preventDefault();
    // document.documentElement.scrollTop = 0;
    /* document.body.scrollTop = 0;*/
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
    }, 500)
  }
}
