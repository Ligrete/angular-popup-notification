import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AngularPopupNotificationLibService,
  PopupNotificationDirective,
  PopupNotificationModule,
} from 'angular-popup-notification-lib';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PopupNotificationModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-popup-notification';
  content = '';

  constructor(
    private popupService: AngularPopupNotificationLibService,
    private popupDirective: PopupNotificationDirective
  ) {}

  ngOnInit(): void {
    const list = [
      {
        title: 'test 1',
        content: 'content test',
      },
      {
        title: 'test 2',
        content: 'content test',
      },
      {
        title: 'test 3',
        content: 'content test',
      },
    ];

    list.forEach((val) => {
      this.popupDirective.createNotification(val);
    });
  }

  create(title: string, content: string) {
    this.popupDirective.createNotification({
      title, content
    });
  }
}
