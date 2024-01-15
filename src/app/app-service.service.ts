import { Injectable } from '@angular/core';
import { NotificationData, PopupNotificationDirective } from 'em-lib';

@Injectable({
  providedIn: 'any',
})
export class AppService {
  constructor(private popupDirective: PopupNotificationDirective) {}

  create(data: NotificationData) {
    if (data) {
      const duration =
        data.duration && data.duration > 0
          ? Number(data.duration)
          : Number(String(Math.floor(Math.random() * 10)) + '000');
      const newNotification = {
        ...data,
        duration: duration,
      };

      this.popupDirective.createNotification(newNotification);
    }
  }
}
