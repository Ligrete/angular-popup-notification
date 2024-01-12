import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPopupNotificationLibComponent } from './angular-popup-notification-lib.component';

describe('AngularPopupNotificationLibComponent', () => {
  let component: AngularPopupNotificationLibComponent;
  let fixture: ComponentFixture<AngularPopupNotificationLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularPopupNotificationLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularPopupNotificationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
