import { ComponentRef, Directive, ViewContainerRef } from '@angular/core';
import { DURATION } from '../constants/notifications-preset.const';
import { NotificationOverlayComponent } from '../components/notification-overlay/notification-overlay.component';
import { NotificationData, Notification } from '../models/notification.model';

@Directive({
  selector: '[libPopupNotification]',
})
export class PopupNotificationDirective {
  hostComponent;

  index = 0;

  constructor(private viewContainerRef: ViewContainerRef) {
    const component = this.viewContainerRef.createComponent(
      NotificationOverlayComponent
    );
    if (component) {
      this.hostComponent = component;
    }
  }

  createNotification(item: NotificationData) {
    if (
      this.hostComponent &&
      (this.hostComponent as ComponentRef<NotificationOverlayComponent>)
    ) {
      const newNotification: Notification = {
        ...item,
        id: this.index,
        createdAt: new Date().getTime(),
        duration: item?.duration ?? DURATION,
        isHidden: false,
      };

      this.index = this.hostComponent.instance.create(newNotification);
    }
  }
}
