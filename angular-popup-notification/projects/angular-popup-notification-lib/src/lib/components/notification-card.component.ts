import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'notifications-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card__title">
        {{ item?.title }}
      </div>
      <div class="card__content">
        {{ item?.content }}
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        background-color: #3f3f3f;
        color: azure;
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 14px;
        padding: 16px;
      }
    `,
  ],
})
export class NotificationCardComponent {
  @Input() item: any;
}
