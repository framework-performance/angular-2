import {Component, OnInit} from '@angular/core';
import {TreeActions} from "../actions/tree.action";
import {select} from "ng2-redux";
import {INode} from "../models/node.models";

@Component({
  selector: 'ngrx-track',
  template: `
            <h3>Track Example</h3>
            <ngrx-tree-track (onSelectTreeNode)="setNode($event)" [nodes]="nodes$ | async"></ngrx-tree-track>`
})
export class TrackComponent implements OnInit {
  @select(['tree','nodes']) nodes$: INode;

  constructor(private treeActions: TreeActions) {
  }

  setNode (path: Array<number>) {
    this.treeActions.setSelectedNodePath(path);
  }

  ngOnInit() {
    this.treeActions.load();
  }

}
