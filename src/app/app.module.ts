import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app';
import {NgReduxModule} from 'ng2-redux';
import {TreeActions} from './actions/tree.action';
import {appRoutes} from './routes';
import {RouterModule} from "@angular/router";
import {TreeEpic} from "./epics/tree.epic";
import {TreeComponent} from './components/tree/tree.component';
import {NodeComponent} from './components/node/node.component';
import {EditNodeComponent} from './components/edit-node/edit-node.component';
import {TreeTrackComponent} from './components/tree-track/tree-track.component';
import {TreeFastComponent} from './components/tree-fast/tree-fast.component';
import {HeaderComponent} from './components/header/header.component';

import {AdminComponent} from './container/admin.component';
import {SlowComponent} from './container/slow.container';
import {TrackComponent} from './container/track.container';
import {FastComponent} from './container/fast.container';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    NodeComponent,
    EditNodeComponent,
    TreeTrackComponent,
    TreeFastComponent,
    HeaderComponent,
    SlowComponent,
    AdminComponent,
    TrackComponent,
    FastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [
    TreeActions,
    TreeEpic
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
