import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app';
import {NgReduxModule} from 'ng2-redux';
import {TreeActions} from './actions/tree.action';
import { BasicPage } from './container/basic/basic.container';
import {appRoutes} from './routes';
import {RouterModule} from "@angular/router";
import {TreeEpic} from "./epics/tree.epic";
import { TreeComponent } from './components/tree/tree.component';
import { NodeComponent } from './components/node/node.component';
import { AdminComponent } from './container/admin/admin.component';
import { EditNodeComponent } from './components/edit-node/edit-node.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicPage,
    TreeComponent,
    NodeComponent,
    AdminComponent,
    EditNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TreeActions,
    TreeEpic
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
