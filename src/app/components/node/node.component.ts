import {
  Component, OnInit, Input, Output, EventEmitter, HostBinding, trigger, state, style,
  transition, animate, OnChanges, keyframes, HostListener
} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-node',
  template: `
      <div >{{text}}</div>
  `,
  animations: [
    trigger('nodeAnimation', [
      state('init', style({transform: 'translateX(0)'})),
      transition('* => init', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.6s ease-in')
      ]),
      transition('* => change', animate(100, keyframes([
        style({backgroundColor: 'green', offset: 0.8}),
        style({backgroundColor: '*', offset: 0.9})
      ])))
    ])
  ],
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit, OnChanges {
  @Input() node: INode = {value: '', nodes: []};
  @Input() value: string;
  @Input() showAnimation: boolean;
  @Output() onSelectNode = new EventEmitter();
  @HostBinding('style.display') styleDisplay: string = 'block';
  @HostBinding('@nodeAnimation') nodeAnimation: string = '';

  @HostListener('click', ['$event']) selectNode(event) {
    this.onSelectNode.emit([]);
    event.stopPropagation();
  }

  @HostListener('@nodeAnimation.done', [])  nodeAnimationDone() {
    this.nodeAnimation = '';
  }

  get text(): string {
    return this.value || this.node.value;
  }

  setAnimationState(state: 'init' | 'change'): void {
    if (!this.showAnimation) {
      return;
    }
    this.nodeAnimation = state;
  }

  ngOnInit(): void {
    this.setAnimationState('init')
  }

  ngOnChanges(): void {
    this.setAnimationState('change')
  }
}
