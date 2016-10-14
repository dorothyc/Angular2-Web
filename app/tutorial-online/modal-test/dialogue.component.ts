/**
 * Created by lcai on 10/12/2016.
 */

import { Component, ViewContainerRef, ViewEncapsulation   } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'dialogue',
  template: `<button (click)="onClick()">Alert</button>`
})
export class DialogueComponent {
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  onClick() {
    this.modal.alert()
        .size('lg')
        .isBlocking(true)
        .showClose(true)
        .keyboard(27)
        .title('Hello World')
        .body('A Customized Modal')
        .open();
  }
}

