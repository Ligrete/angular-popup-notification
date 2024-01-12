import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="hero-profile">
      <h4>{{ name }}</h4>
      <p>{{ bio }}</p>
    </div>
  `,
})
export class HeroProfileComponent {
  @Input() name!: string;
  @Input() bio!: string;
}
