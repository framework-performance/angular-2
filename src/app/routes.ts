import {Routes} from "@angular/router";
import {SlowComponent} from "./container/slow.container";
import {TrackComponent} from "./container/track.container";
import {FastComponent} from "./container/fast.container";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'simple',
    pathMatch: 'full'
  },
  {path: 'simple', component: SlowComponent},
  {path: 'track', component: TrackComponent},
  {path: 'fast', component: FastComponent}
];
