import { Component } from '@angular/core';
import {signal, computed} from '@angular/core';
@Component({
  selector: 'user-profile-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  private _firstName = signal('Morgan');
  
  public get firstName() {
    return this._firstName;
  }
  
  public set firstName(value) {
    this._firstName = value;
  }

  testSignal = signal('Morgan').set('Jaime');
  
  test = (signal('Morgan')).update(name => name.toUpperCase());
}
