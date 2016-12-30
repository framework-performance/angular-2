import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-tree-fast',
  template: `
      <ul>
        <li *ngFor="let node of nodes;let index = index;trackBy: trackNode">
              <ngrx-node
                  [showAnimation]="showAnimation"
                  [value]="node.value"
                  (onSelectNode)="selectNode($event,index)"></ngrx-node>
              <ngrx-tree-fast *ngIf="node.nodes.length > 0"
                  [showAnimation]="showAnimation"
                  [nodes]="node.nodes"
                  (onSelectTreeNode)="selectNode($event,index)"></ngrx-tree-fast>
        </li>
      </ul>
  `,
  styleUrls: ['./tree-fast.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class TreeFastComponent {
  @Input() nodes: Array<INode>;
  @Input() showAnimation: boolean;
  @Output() onSelectTreeNode = new EventEmitter();

  trackNode(index): number {
    return index;
  }

  selectNode(nodePath = [], index = 0): void {
    this.onSelectTreeNode.emit([...nodePath, index]);
  }
}

