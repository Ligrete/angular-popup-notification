import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupNotificationDirective } from './directives/popup-notification.directive';
import { NotificationCardComponent } from './components/notification-card.component';

@NgModule({
  imports: [CommonModule, NotificationCardComponent],
  providers: [PopupNotificationDirective],
})
export class PopupNotificationModule {}
