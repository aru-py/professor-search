import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.services'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  providers: [DataService]
})
export class CarouselComponent implements OnInit {

  @Input() professors: any;
  @Input() title: string;
  @Input() subtitle: string;

  constructor(private data: DataService) { }

  ngOnInit() {}

}
