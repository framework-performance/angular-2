import {NgRedux} from "ng2-redux";
import {Injectable} from "@angular/core";
import {IAppState} from "../store/index";

@Injectable()
export class TreeActions {

  static LOAD_NODES: string = 'LOAD_NODES';
  static SET_NODES: string = 'SET_NODES';

  static SET_SELECTED_NODE_PATH: string = 'SET_SELECTED_NODE_PATH';
  static SET_SELECTED_NODE: string = 'SET_SELECTED_NODE';

  static UPDATE_NODE_VALUE: string = 'UPDATE_NODE_VALUE';
  static UPDATE_NODES: string = 'UPDATE_NODES';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  public load(): void {
    this.ngRedux.dispatch({
      type: TreeActions.LOAD_NODES
    });
  }

  public updateNodeValue(value: string): void {
    this.ngRedux.dispatch({
      type: TreeActions.UPDATE_NODE_VALUE,
      payload: {value}
    });
  }

  public setSelectedNodePath(selectedNodePath: Array<number>): void {
    this.ngRedux.dispatch({
      type: TreeActions.SET_SELECTED_NODE_PATH,
      payload: {
        selectedNodePath: selectedNodePath.reverse()
      }
    });
  }
}
