import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navItems = [
    { label: 'My Profile', active: true },
    { label: 'News Feed', active: false },
    { label: 'Settings', active: false },
  ];

  setActive(item: any) {
    this.navItems.forEach((navItem) => (navItem.active = false));
    item.active = true;
  }
}
