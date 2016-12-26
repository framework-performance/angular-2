import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-tree',
  template: `
      <ul>
        <li *ngFor="let node of nodes;let index = index">
              <ngrx-node
                  [showAnimation]="showAnimation"
                  [node]="node"
                  (onSelectNode)="selectNode($event,index)"></ngrx-node>
              <ngrx-tree *ngIf="node.nodes.length > 0"
                  [showAnimation]="showAnimation"
                  [nodes]="node.nodes"
                  (onSelectTreeNode)="selectNode($event,index)" 
                  ></ngrx-tree>
        </li>
      </ul>
  `,
  styleUrls: ['./tree.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent {
  @Input() nodes: Array<INode>;
  @Input() showAnimation : boolean;
  @Output() onSelectTreeNode = new EventEmitter();

  selectNode(nodePath = [], index = 0) {
    this.onSelectTreeNode.emit([...nodePath, index]);
  }
}

