import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-tree',
  template: `
      <ul>
        <li *ngFor="let node of nodes;let index = index;">
          <ngrx-node (onSelectNode)="selectNode($event,index)" [node]="node"></ngrx-node>
        </li>
      </ul>
  `,
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  @Input() nodes: Array<INode>;
  @Output() onSelectTreeNode = new EventEmitter();

  selectNode(nodePath = [], index = 0) {
    this.onSelectTreeNode.emit([...nodePath, index]);
  }

}
