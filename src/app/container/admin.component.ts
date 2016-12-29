import {Component, OnInit} from '@angular/core';
import {select} from "ng2-redux";
import {INode} from "../models/node.models";
import {TreeActions} from "../actions/tree.action";
import {treeFiles} from '../constants/tree-files';

@Component({
  selector: 'ngrx-admin',
  template: ` <select (change)="onChangeFile($event.target.value)" >
                    <option [value]="" >Select Tree Size</option>
                   <option [value]="file" *ngFor="let file of files">{{file}}</option>
              </select>
              <p>
                Nodes: {{ nodesCount$ | async }}
              </p>
              <p>
                click on Node for edit
              </p>
              <ngrx-edit-node 
              *ngIf="node$ | async"
              (onUpdateNode)="updateNodeValue($event)" 
              [node]="node$ | async"></ngrx-edit-node>`,

})
export class AdminComponent implements OnInit {
  @select(['tree', 'selectedNode']) node$: INode;
  @select(['tree', 'nodesCount']) nodesCount$: INode;

  constructor(private treeActions: TreeActions) {
  }

  get files(): string[] {
    return Object.keys(treeFiles);
  }

  onChangeFile(file) {
    this.treeActions.load(file);
  }

  updateNodeValue(value: string) {
    this.treeActions.updateNodeValue(value);
  }

  ngOnInit() {
    this.treeActions.load();
  }
}
