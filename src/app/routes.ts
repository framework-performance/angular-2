import {BasicPage} from "./container/basic/basic.container";
import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  {path: '', component: BasicPage},
  //{ path: '**', component: PageNotFoundComponent }
];
