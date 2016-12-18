import {Component, OnInit} from '@angular/core';
import {select} from "ng2-redux";
import {INode} from "../../models/node.models";
import {TreeActions} from "../../actions/tree.action";

@Component({
  selector: 'ngrx-admin',
  template: `<ngrx-edit-node 
              *ngIf="node$ | async"
              (onUpdateNode)="updateNodeValue($event)" 
              [node]="node$ | async"></ngrx-edit-node>
  `,

})
export class AdminComponent {
  @select(['tree', 'selectedNode']) node$: INode;

  constructor(private treeActions: TreeActions) {
  }

  updateNodeValue(value: string) {
    this.treeActions.updateNodeValue(value);
  }
}
