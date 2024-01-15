import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NotificationData,
  PopupNotificationDirective,
  PopupNotificationModule,
} from 'angular-popup-notification-lib';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

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
  data: NotificationData = {
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
    ];

    if (list) {
      list.forEach((val: NotificationData) => {
        this.popupDirective.createNotification(val);
      });
    }
  }

  create() {
    if (this.data) {
      this.popupDirective.createNotification(this.data);
    }
  }
}
