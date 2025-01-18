import { Component } from '@angular/core';
import { AreaComponent } from './area/area.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'content',
  imports: [AreaComponent, SidebarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
