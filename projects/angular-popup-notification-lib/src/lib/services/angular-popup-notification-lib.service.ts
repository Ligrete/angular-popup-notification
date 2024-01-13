import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class AngularPopupNotificationLibService {
  private notifications = [];

  constructor() {}

  public get notificationsList(): any[] {
    return this.notifications as any[];
  }
}
