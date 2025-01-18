import { Component } from '@angular/core';

@Component({
  selector: 'content-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  isSidebarVisible: boolean = true;

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
