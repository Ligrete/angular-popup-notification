import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { NotificationCardComponent } from '../notification-card/notification-card.component';
import { Notification } from '../../models/notification.model';
import {
  DURATION,
  MAX_STACK_SIZE,
} from '../../constants/notifications-preset.const';

@Component({
  selector: 'lib-notification-overlay',
  standalone: true,
  imports: [CommonModule, NotificationCardComponent],
  templateUrl: './notification-overlay.component.html',
  styleUrl: './notification-overlay.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NotificationOverlayComponent {
  items: Notification[] = [];

  maxArraySize = MAX_STACK_SIZE || 5;
  duration = DURATION;

  @HostBinding('class.overlay') someField = true;

  constructor(private cdr: ChangeDetectorRef) {}

  public create(item: Notification): number {
    console.log(item);
    return this.items.push(item);
  }

  isExpired(notification: Notification): boolean {
    const duration = notification?.duration ?? this.duration;

    return notification?.createdAt
      ? notification?.createdAt + duration < new Date().getTime()
      : false;
  }

  trackByFn(_index: number, item: Notification): number {
    return item?.id;
  }

  updateLifeTimer() {
    console.log('update');

    this.cdr.markForCheck();
  }
}
