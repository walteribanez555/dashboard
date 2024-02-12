import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: 'navbar.component.html',
  styleUrl: './navbar.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() nvState: boolean = false;
  @Input() themeStatus: boolean = false;
  @Output() onChangeNavBarState = new EventEmitter();
  @Output() onChangeBtnThemeMode = new EventEmitter();

  onClickNavBarExpandable() {
    this.onChangeNavBarState.emit(!this.nvState);
  }

  onClickNavBarThemeMode() {
    this.onChangeBtnThemeMode.emit();
  }
}
