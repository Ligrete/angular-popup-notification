import { Injectable, Type } from '@angular/core';
import { HeroProfileComponent } from './hero-profile.component';

@Injectable({ providedIn: 'root' })
export class AdService {
  getAds() {
    return [
      {
        component: HeroProfileComponent,
        inputs: { name: 'Dr. IQ', bio: 'Smart as they come' },
      },
      {
        component: HeroProfileComponent,
        inputs: { name: 'Bombasto', bio: 'Brave as they come' },
      },
    ] as {component: Type<any>, inputs: Record<string, unknown>}[];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/