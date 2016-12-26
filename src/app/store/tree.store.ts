import {TreeActions} from '../actions/tree.action';
import {INode} from '../models';


interface ITreeStore {
  nodes: Array<INode>,
  selectedNodePath: Array<number>;
  selectedNode: INode;
  treeFile: string;
  showAnimation: boolean;
}

const INITIAL_STATE: ITreeStore = {
  nodes: [],
  selectedNodePath: [],
  selectedNode: null,
  treeFile: '',
  showAnimation: false
};

const treeStore = (state: ITreeStore = INITIAL_STATE,
  {type, payload}): ITreeStore => {
  switch (type) {
    case TreeActions.LOAD_NODES:
      return Object.assign({}, INITIAL_STATE, {treeFile: payload.file});
    case TreeActions.SET_NODES:
      return Object.assign({}, state, {nodes: payload.nodes, showAnimation: payload.showAnimation});
    case TreeActions.SET_SELECTED_NODE_PATH:
      return Object.assign({}, state, {selectedNodePath: payload.selectedNodePath});
    case TreeActions.SET_SELECTED_NODE:
      return Object.assign({}, state, {selectedNode: payload.selectedNode});
    case TreeActions.UPDATE_NODES :
      return Object.assign({}, state, {nodes: payload.nodes});
    default:
      return state;
  }
};

export {
  ITreeStore,
  treeStore
}
