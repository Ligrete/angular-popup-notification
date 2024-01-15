import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { timer } from 'rxjs';
import {
  DURATION,
  MAX_STACK_SIZE,
} from '../../constants/notifications-preset.const';
import { Notification } from '../../models/notification.model';
import { AngularPopupNotificationLibService } from '../../services/angular-popup-notification-lib.service';
import { NotificationCardComponent } from '../notification-card/notification-card.component';

@Component({
  selector: 'lib-notification-overlay',
  standalone: true,
  imports: [CommonModule, NotificationCardComponent],
  templateUrl: './notification-overlay.component.html',
  styleUrl: './notification-overlay.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationOverlayComponent {
  @Input() items: Notification[] = [];

  maxArraySize = this.notificationsService.getMaxArraySize ?? MAX_STACK_SIZE;
  duration = DURATION;

  @HostBinding('class.overlay') someField = true;

  constructor(
    private cdr: ChangeDetectorRef,
    private notificationsService: AngularPopupNotificationLibService
  ) {}

  public create(item: Notification): number {
    this.createLifetimeChecker(item);
    const index = this.items.push(item);
    this.cdr.markForCheck();
    return index;
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

  createLifetimeChecker(item: Notification) {
    timer(item.duration).subscribe(() => {
      this.hideNotification(item);
    });
  }

  hideNotification(item: Notification) {
    this.items = this.items.map((val) =>
      val?.id === item?.id ? { ...val, isHidden: true } : val
    );
    this.cdr.markForCheck();
  }
}
