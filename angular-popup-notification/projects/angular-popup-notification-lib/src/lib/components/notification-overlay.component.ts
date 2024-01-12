import { CommonModule } from '@angular/common';
import { Component, ElementRef, Host, HostBinding, ViewEncapsulation } from '@angular/core';
import { NotificationCardComponent } from './notification-card.component';

@Component({
  selector: 'lib-notification-overlay',
  standalone: true,
  imports: [CommonModule, NotificationCardComponent],
  template: `
      <ng-container *ngFor="let item of items">
        <notifications-card [item]="item"></notifications-card>
      </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      lib-notification-overlay.overlay {
        background-color: azure;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    `,
  ],
})
export class NotificationOverlayComponent {
  items: any[] = [];

  @HostBinding('class.overlay') someField = true;

  constructor(
  ) {
   
  }

  public create(item: any) {
    this.items.push(item);
  }
}
