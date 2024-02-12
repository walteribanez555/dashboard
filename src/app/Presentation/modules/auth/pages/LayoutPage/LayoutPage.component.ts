import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>LayoutPage works!</p>`,
  styleUrl: './LayoutPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent { }
