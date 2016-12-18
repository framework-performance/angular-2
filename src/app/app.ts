import {Component} from '@angular/core';
import {NgRedux, DevToolsExtension} from "ng2-redux";
import {IAppState, ROOT_REDUCER} from "./store/index";
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {TreeEpic} from "./epics/tree.epic";


@Component({
  selector: 'app-root',
  template: `
            <h1>
              Angular Performance Demo
            </h1>
            <ngrx-admin></ngrx-admin>
            <router-outlet></router-outlet>
  `

})
export class AppComponent {

  constructor(ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension,
              treeEpic: TreeEpic) {

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
      [devTools.enhancer()]
    );
  }

}

