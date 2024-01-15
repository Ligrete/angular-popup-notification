import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  NotificationData,
  PopupNotificationDirective,
  PopupNotificationModule,
} from 'angular-popup-notification-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PopupNotificationModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-popup-notification';

  @Input() data: NotificationData = {
    title: 'Test',
    text: 'Hi asdnand;ahoewhcpq hcdfhhspiueie23473y2c4dshc gwcwrcw wgercbxc hher qhwe1g1d',
    duration: 3000,
  };

  constructor(private popupDirective: PopupNotificationDirective) {}

  ngOnInit(): void {
    const list: NotificationData[] = [
      {
        title: 'test 1',
        text: 'content test',
        duration: 1000,
      },
      {
        title: 'test 2',
        text: 'content test',
        duration: 7000,
      },
      {
        title: 'test 3',
        text: 'content test',
        submitButton: 'Accept',
        cancelButton: 'Cancel',
        duration: 3000,
      },
      {
        title: 'test 4',
        text: 'content test',
        submitButton: 'Accept',
        duration: 5000,
      },
      {
        title: 'test 5',
        text: 'content test',
        cancelButton: 'Cancel',
        duration: 6000,
      },
    ];

    if (list) {
      list.forEach((val: NotificationData) => {
        this.popupDirective.createNotification(val);
      });
    }
  }

  create() {
    if (this.data) {
      const duration =
        this.data.duration && this.data.duration > 0
          ? Number(this.data.duration)
          : Number(String(Math.floor(Math.random() * 10)) + '000');
      const newNotification = {
        ...this.data,
        duration: duration,
      };

      this.popupDirective.createNotification(newNotification);
    }
  }
}
