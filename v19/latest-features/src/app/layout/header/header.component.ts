import { Component } from '@angular/core';

@Component({
  selector: 'layout-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleMenu(): void {
    const menu = document.getElementById('menu');
    menu?.classList.toggle('active');
  }

}
