import {Routes} from "@angular/router";
import {SimpleComponent} from "./container/basic.container";
import {TrackComponent} from "./container/track.container";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'simple',
    pathMatch: 'full'
  },
  {path: 'simple', component: SimpleComponent},
  {path: 'track', component: TrackComponent}
  //{ path: '**', component: PageNotFoundComponent }
];
