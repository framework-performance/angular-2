import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-tree-track',
  template: `
      <ul>
        <li *ngFor="let node of nodes;let index = index;trackBy: trackNode">
              <ngrx-node 
                  [showAnimation]="showAnimation"
                  [node]="node"
                  (onSelectNode)="selectNode($event,index)"></ngrx-node>
              <ngrx-tree-track *ngIf="node.nodes.length > 0"
                  [showAnimation]="showAnimation"
                  [nodes]="node.nodes"
                  (onSelectTreeNode)="selectNode($event,index)"></ngrx-tree-track>
        </li>
      </ul>
  `,
  styleUrls: ['./tree-track.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class TreeTrackComponent {
  @Input() nodes: Array<INode>;
  @Input() showAnimation : boolean;
  @Output() onSelectTreeNode = new EventEmitter();

  trackNode(index): number {
    return index;
  }

  selectNode(nodePath = [], index = 0): void {
    this.onSelectTreeNode.emit([...nodePath, index]);
  }
}

