import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'mypost',
  template: `
    <p>
      {{post}}
    </p>
  `,
  styles: []
})
export class MypostComponent implements OnInit {
  @Input() private post;
  constructor() { }

  ngOnInit() {
  }

}
