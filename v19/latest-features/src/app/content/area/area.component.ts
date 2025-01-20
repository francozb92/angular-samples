import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-area',
  imports: [],
  templateUrl: './area.component.html',
  styleUrl: './area.component.scss'
})
export class AreaComponent {
  title: string = 'Content Area';
  content: string = 'This is the content area. You can add any content you want here.';
  @Input() displayFeatureNumberValue: string = "";

}
