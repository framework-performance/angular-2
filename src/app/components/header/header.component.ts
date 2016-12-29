import {Component} from '@angular/core';

@Component({
  selector: 'ngrx-header',
  template: `<header>
                <h1>
                  <a href="https://framework-performance.github.io/blog/">framework performance</a>
                </h1>
                <h2>Angular </h2>
                
                <nav>
                  <a routerLink="simple" routerLinkActive="active">worse performance</a>
                  <a routerLink="track" routerLinkActive="active">optimize performance with tracking</a>
                  <a routerLink="fast" routerLinkActive="active">best performance with input reducing</a>
                </nav>
              </header>
            `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
