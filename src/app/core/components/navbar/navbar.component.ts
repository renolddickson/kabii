import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showLabel = false;
  mod = 'dark';
  modc= 'Dark';

  modToggle(m: string) {
    if(m==='dark') {
      this.mod = 'light';
      this.modc = 'Light';
    } else {
      this.mod = 'dark';
      this.modc = 'Dark';
    }
  }
}
