import {
  ComponentRef,
  Directive,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { NotificationOverlayComponent } from '../components/notification-overlay.component';

@Directive({
  selector: '[libPopupNotification]',
})
export class PopupNotificationDirective implements OnInit {
  hostComponent: any = null;

  constructor(private viewContainerRef: ViewContainerRef) {
    const component = this.viewContainerRef.createComponent(
      NotificationOverlayComponent
    );

    if (component) {
      this.hostComponent = component;
    }
  }

  createNotification(item: any) {
    if (
      this.hostComponent &&
      (this.hostComponent as ComponentRef<NotificationOverlayComponent>)
    ) {
      console.log('host', this.hostComponent.instance.items);
      console.log('create', item?.title);

      this.hostComponent.instance.create(item);
    }
  }

  ngOnInit(): void {}
}
