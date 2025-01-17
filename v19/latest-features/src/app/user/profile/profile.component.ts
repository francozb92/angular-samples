import { Component, computed, signal } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@Component({
  selector: 'user-profile',
  imports: [PhotoComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());
  activateTrial() {
    this.isTrial.set(true);
  }
}
