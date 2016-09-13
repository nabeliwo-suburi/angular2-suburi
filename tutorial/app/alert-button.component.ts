import { Component } from '@angular/core';

@Component({
  selector: 'my-alert-button',
  template: `
    <button (click)="onClick()">Click me!</button>
  `
})
export class AlertButtonComponent {
  onClick() {
    alert('Hello!');
  }
}
