import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
  inject,
} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../../../Shared/utils/Theme.service';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, RouterModule],
  templateUrl: 'LayoutPage.component.html',
  styleUrl: './LayoutPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent  implements OnInit {
  ngOnInit(): void {
    const status  = this.toggleService.getToken();

    this.isDarkTheme = status == "1" ? true : false;
    this.onChangeTheme(this.isDarkTheme);
    // this.toggleTheme();
  }


  stateNavBar: boolean = false;
  isDarkTheme: boolean = false;
  debounceTimeout: any;

  private toggleService = inject(ThemeService);

  onChangeStateNavBar(event: any) {
    // console.log(event);
    this.stateNavBar = event;
  }

  toggleTheme() {
    clearTimeout(this.debounceTimeout); // Clear any existing timeout
    this.debounceTimeout = setTimeout(() => {
      this.isDarkTheme = !this.isDarkTheme;
      this.onChangeTheme(this.isDarkTheme);

    }, 200);
  }


  onChangeTheme(status : boolean) {
    if (status) {
      document.body.classList.add('dark');
      this.toggleService.setToken('1');
    } else {
      document.body.classList.remove('dark');
      this.toggleService.setToken('2');
    }
  }




}
