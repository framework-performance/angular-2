import {Component} from '@angular/core';
import {NgRedux, DevToolsExtension} from "ng2-redux";
import {IAppState, ROOT_REDUCER} from "./store/index";
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {TreeEpic} from "./epics/tree.epic";
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
          <ngrx-header></ngrx-header>
          <ngrx-admin></ngrx-admin>
          <router-outlet></router-outlet>
  `

})
export class AppComponent {

  constructor(ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension,
              treeEpic: TreeEpic) {
    let enhancers = [];
    if (!environment.production) {
      enhancers.push(devTools.enhancer());
    }
    ngRedux.configureStore(
      ROOT_REDUCER,
      {},
      [createEpicMiddleware(
        combineEpics(
          treeEpic.fetchTree,
          treeEpic.setSelectedNode,
          treeEpic.updateNode
        )
      )],
      enhancers
    );
  }

}

