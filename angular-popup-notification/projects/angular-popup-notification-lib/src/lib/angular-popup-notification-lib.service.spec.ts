import { TestBed } from '@angular/core/testing';

import { AngularPopupNotificationLibService } from './angular-popup-notification-lib.service';

describe('AngularPopupNotificationLibService', () => {
  let service: AngularPopupNotificationLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularPopupNotificationLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
