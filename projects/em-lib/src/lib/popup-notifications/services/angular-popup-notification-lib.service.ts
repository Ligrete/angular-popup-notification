import { Injectable } from '@angular/core';
import { MAX_STACK_SIZE } from '../constants/notifications-preset.const';

@Injectable({
  providedIn: 'any',
})
export class AngularPopupNotificationLibService {
  private notifications = [];

  private maxArraySize = MAX_STACK_SIZE;

  constructor() {}

  public get notificationsList(): any[] {
    return this.notifications as any[];
  }

  public get getMaxArraySize() {
    return this.maxArraySize;
  }

  public set setMaxArraySize(value: number) {
    this.maxArraySize = value;
  }
}
