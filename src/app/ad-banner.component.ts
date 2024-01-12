import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgComponentOutlet } from '@angular/common';

import { AdService } from './ad.service';

@Component({
  selector: 'app-ad-banner',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet, AsyncPipe],
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements test</h3>
      <div class="list" *ngFor="let item of currentAds; index as i">
        <ng-container *ngComponentOutlet="
          item.component;
          inputs: item.inputs;
        "/>
      </div>
      <button (click)="displayNextAd()">Next</button>
    </div>
  `
})
export class AdBannerComponent {
  private adList = inject(AdService).getAds();

  private currentAdIndex = 0;

  get currentAd() {
    return this.adList[this.currentAdIndex];
  }

  get currentAds() {
    console.log('adlist', this.adList)
    return this.adList;
  }

  displayNextAd() {
    this.currentAdIndex++;
    // Reset the current ad index back to `0` when we reach the end of an array.
    if (this.currentAdIndex === this.adList.length) {
      this.currentAdIndex = 0;
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/