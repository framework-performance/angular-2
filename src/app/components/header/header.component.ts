import {Component} from '@angular/core';

@Component({
  selector: 'ngrx-header',
  template: `<h1>
              Angular Performance Demo
              </h1>
              <nav>
                <a routerLink="simple" routerLinkActive="active">Basic Example</a>
                <a routerLink="track" routerLinkActive="active">track</a>
              </nav>
            `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
