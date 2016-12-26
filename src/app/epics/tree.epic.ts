import {Http} from "@angular/http";
import {TreeActions} from "../actions/tree.action";
import {Injectable} from "@angular/core";
import 'rxjs';
import {ActionsObservable} from "redux-observable";
import {INode} from "../models/node.models";
import {treeFiles} from '../constants/files';

@Injectable()
export class TreeEpic {
  constructor(private http: Http) {
  }

  public fetchTree = (action$: ActionsObservable<{payload: {file: string}}>) =>
    action$.ofType(TreeActions.LOAD_NODES)
      .switchMap(({payload}) =>
        this.http.get(this.getFileForType(payload.file))
          .map((tree) => tree.json())
          .map((nodes) => ({
            type: TreeActions.SET_NODES,
            payload: {
              nodes: nodes,
              showAnimation: this.showAnimationForTree(payload.file)
            }
          }))
      );


  public setSelectedNode = (action$: ActionsObservable<{payload: {selectedNodePath: Array<number>}}>
    , store) =>
    action$.ofType(TreeActions.SET_SELECTED_NODE_PATH)
      .map(({payload}) => ({
          type: TreeActions.SET_SELECTED_NODE,
          payload: {
            selectedNode: this.getNode(
              [...store.getState().tree.nodes],
              [...payload.selectedNodePath]
            )
          }
        })
      );

  public updateNode = (action$: ActionsObservable<{payload: {value: string}}>, store) =>
    action$.ofType(TreeActions.UPDATE_NODE_VALUE)
      .map(({payload}) => ({
          type: TreeActions.UPDATE_NODES,
          payload: {
            nodes: this.updateNodeValue(
              [...store.getState().tree.nodes],
              [...store.getState().tree.selectedNodePath],
              payload.value
            )
          }
        })
      );

  protected showAnimationForTree(type): boolean {
    if (type === 'small') {
      return true;
    }
    return false;
  }

  protected getFileForType(type: string = ''): string {
    if (!type) {
      throw new Error('load tree.json failed, type is empty');
    }
    if (!treeFiles[type]) {
      throw new Error('load tree.json failed, type ' + type + ' is not defined');

    }
    return treeFiles[type];
  }

  protected updateNodeValue(nodes: Array<INode>, indexPath: Array<number>, value: string): Array<INode> {
    return nodes.map((node, nodeIndex) => {
      if (nodeIndex == indexPath[0]) {
        indexPath.shift();
        if (indexPath.length === 0) {
          return Object.assign({}, node, {value: value});
        }
        return Object.assign(
          {},
          node,
          {
            nodes: this.updateNodeValue(node.nodes, indexPath, value)
          }
        );
      }
      return node;
    });
  }

  protected getNode(nodes: Array<INode>, indexPath: Array<number>): INode {
    let index = indexPath[0];
    indexPath.shift();
    if (indexPath.length === 0) {
      return nodes[index];
    }
    return this.getNode(nodes[index].nodes, indexPath);
  }
}
