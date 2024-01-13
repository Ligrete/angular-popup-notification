import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotificationData } from '../../models/notification.model';

@Component({
  selector: 'notification-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.scss',
})
export class NotificationCardComponent {
  @Input() data: NotificationData | undefined;

  @Output() clickedSubmit = new EventEmitter<any>();
  @Output() clickedCancel = new EventEmitter<any>();
}
