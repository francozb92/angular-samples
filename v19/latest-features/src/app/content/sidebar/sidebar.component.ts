import { Component, output, Output } from '@angular/core';

@Component({
  selector: 'content-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  featureContentDispatched = output<any>();
  
  handleFeatureContentEvent(event: any){
    //still deciding if hardcoding the content somewhere or making an api call to dispatch to content area
    debugger;
    this.featureContentDispatched.emit(event.currentTarget.id);
  }

  exampleFunc(event: any){
    this.handleFeatureContentEvent(event);
  }

}
