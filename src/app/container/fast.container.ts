import {Component, OnInit} from '@angular/core';
import {TreeActions} from "../actions/tree.action";
import {select} from "ng2-redux";
import {INode} from "../models/node.models";

@Component({
  selector: 'ngrx-fast',
  template: `
            <h3>Fast Example</h3>
            <ngrx-tree-fast (onSelectTreeNode)="setNode($event)" [nodes]="nodes$ | async"></ngrx-tree-fast>`
})
export class FastComponent implements OnInit {
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
