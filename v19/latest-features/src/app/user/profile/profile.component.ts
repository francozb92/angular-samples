import { Component } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@Component({
  selector: 'user-profile',
  imports: [PhotoComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
