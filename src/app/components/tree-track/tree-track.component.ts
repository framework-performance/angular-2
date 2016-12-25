import {Component, Input, Output, EventEmitter} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-tree-track',
  template: `
      <ul>
        <li *ngFor="let node of nodes;let index = index;trackBy: trackNode">
              <ngrx-node
                  (onSelectNode)="selectNode($event,index)" 
                  [node]="node"></ngrx-node>
              <ngrx-tree-track
                  (onSelectTreeNode)="selectNode($event,index)" 
                  [nodes]="node.nodes"></ngrx-tree-track>
        </li>
      </ul>
  `,
  styleUrls: ['./tree-track.component.css']
})


export class TreeTrackComponent {
  @Input() nodes: Array<INode>;
  @Output() onSelectTreeNode = new EventEmitter();

  trackNode(index): number {
    return index;
  }

  selectNode(nodePath = [], index = 0): void {
    this.onSelectTreeNode.emit([...nodePath, index]);
  }
}

