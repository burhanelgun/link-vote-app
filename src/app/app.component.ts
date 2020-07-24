import { Component, HostListener } from '@angular/core';
import { LinkListService } from './service/link-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'link-vote-app';

  constructor(public linkListService: LinkListService) { }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    localStorage.setItem('links', JSON.stringify(this.linkListService.links));
  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler(event) {
    localStorage.setItem('links', JSON.stringify(this.linkListService.links));
  }

}
