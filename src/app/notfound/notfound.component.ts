import { Component, OnInit } from '@angular/core';

let template = './notfound.component.html';

@Component({
  selector: 'app-notfound',
  templateUrl: template,
  styleUrls: ['./notfound.component.sass']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
