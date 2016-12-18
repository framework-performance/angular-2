import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-node',
  template: `
      <div (click)="selectNode($event)">{{text}}</div>
      <ngrx-tree (onSelectTreeNode)="selectChildNode($event)" [nodes]="childNodes"></ngrx-tree>
  `,
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  @Input() node: INode;
  @Output() onSelectNode = new EventEmitter();

  constructor() {
  }

  get childNodes() {
    return this.node.nodes;
  }

  get text() {
    return this.node.value;
  }

  selectNode(event) {
    this.onSelectNode.emit([]);
    event.stopPropagation();
  }

  selectChildNode(nodePath = []) {
    this.onSelectNode.emit(nodePath);
  }

}
