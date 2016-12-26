import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-tree-fast',
  template: `
      <ul>
        <li *ngFor="let node of nodes;let index = index;trackBy: trackNode">
              <ngrx-node
                  (onSelectNode)="selectNode($event,index)" 
                  [value]="node.value"></ngrx-node>
              <ngrx-tree-fast *ngIf="node.nodes.length > 0"
                  (onSelectTreeNode)="selectNode($event,index)" 
                  [nodes]="node.nodes"></ngrx-tree-fast>
        </li>
      </ul>
  `,
  styleUrls: ['./tree-fast.component.css']
})


export class TreeFastComponent {
  @Input() nodes: Array<INode>;
  @Output() onSelectTreeNode = new EventEmitter();

  trackNode(index): number {
    return index;
  }

  selectNode(nodePath = [], index = 0): void {
    this.onSelectTreeNode.emit([...nodePath, index]);
  }
}

