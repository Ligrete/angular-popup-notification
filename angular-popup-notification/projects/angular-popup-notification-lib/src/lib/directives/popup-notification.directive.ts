import {
  ComponentRef,
  Directive,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { NotificationOverlayComponent } from '../components/notification-overlay/notification-overlay.component';
import { distinctUntilChanged, interval, of, switchMap, tap } from 'rxjs';
import { Notification, NotificationData } from '../models/notification.model';
import { DURATION } from '../constants/notifications-preset.const';

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
      console.log('directive');

      this.hostComponent = component;
      this.startCheck();
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
      };

      this.hostComponent.instance.create(newNotification);
      this.index++;
    }
  }

  startCheck(): void {
    interval(1000)
      .pipe(distinctUntilChanged())
      .subscribe((val) => {
        console.log('tap', val);
      });
  }
}
