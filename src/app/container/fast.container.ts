import {Component, OnInit} from '@angular/core';
import {TreeActions} from "../actions/tree.action";
import {select} from "ng2-redux";
import {INode} from "../models/node.models";

@Component({
  selector: 'ngrx-fast',
  template: `
            <h3>Fast Example</h3>
            <ngrx-tree-fast 
              [showAnimation]="showAnimation$ | async"
              [nodes]="nodes$ | async"
              (onSelectTreeNode)="setNode($event)"></ngrx-tree-fast>`
})
export class FastComponent {
  @select(['tree', 'nodes']) nodes$: INode;
  @select(['tree', 'showAnimation']) showAnimation$: boolean;

  constructor(private treeActions: TreeActions) {
  }

  setNode(path: Array<number>) : void{
    this.treeActions.setSelectedNodePath(path);
  }

}
