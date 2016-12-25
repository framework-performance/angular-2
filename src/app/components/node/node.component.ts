import {
  Component, OnInit, Input, Output, EventEmitter, HostBinding, trigger, state, style,
  transition, animate, OnChanges, ChangeDetectionStrategy, keyframes, HostListener, ChangeDetectorRef
} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-node',
  template: `
      <div >{{text}}</div>
      <div click="add()"></div>
  `,
  animations: [
    trigger('nodeChange', [
      state('init', style({transform: 'translateX(0)'})),
      transition('* => init', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.6s ease-in')
      ]),
      transition('* => change', animate(1000, keyframes([
        style({backgroundColor: 'green', offset: 0.8}),
        style({backgroundColor: '*', offset: 0.9})
      ])))
    ])
  ],
  styleUrls: ['./node.component.css']

})
export class NodeComponent implements OnInit, OnChanges {
  @Input() node: INode;

  @Output() onSelectNode = new EventEmitter();
  @HostBinding('style.display') styleDisplay: string = 'block';
  @HostBinding('@nodeChange') nodeChange: string = '';

  @HostListener('click', ['$event'])   selectNode(event) {
    this.onSelectNode.emit([]);
    event.stopPropagation();
  }

  @HostListener('@nodeChange.done', [])  nodeChangeDone() {
    this.nodeChange = '';
  }

  get text(): string {
    return this.node.value;
  }

  ngOnInit(): void {
    this.nodeChange = 'init';
  }

  ngOnChanges(change): void {
    this.nodeChange = 'change';
  }
}
