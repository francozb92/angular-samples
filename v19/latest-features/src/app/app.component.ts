import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DetailsComponent } from './user/profile/details/details.component';
import { ContentComponent } from './content/content.component';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, ContentComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'latest-features';
}
