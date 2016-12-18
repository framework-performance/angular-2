import {combineReducers} from 'redux';
import {treeStore,ITreeStore} from './tree.store';

interface IAppState {
  tree?: ITreeStore;
}

const ROOT_REDUCER = combineReducers<IAppState>({
  tree: treeStore
});

export {
  IAppState,
  ROOT_REDUCER
}
