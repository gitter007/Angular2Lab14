import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'mypost',
  template: `
    <p>
      {{data}}
    </p>
  `,
  styles: []
})
export class MypostComponent implements OnInit {
  @Input() private data;
  constructor() { }

  ngOnInit() {
  }

}
