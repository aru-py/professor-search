import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../data.services';
import * as d3 from 'd3';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass'],
  providers: []
})
export class GraphsComponent implements OnInit {

  @Input() prof: any;

  constructor(private data: DataService) {
  }

  ngOnInit() {

    var index = 20;
    const width = 340;
    const height = 340;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select('#chart-area')
      .append('svg')
      .attr('width', 540)
      .attr('height', 380)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeTableau10);

    const pie = d3.pie()
      .sort(null);


    const arc = d3.arc()
      .innerRadius(radius - 80)
      .outerRadius(radius);

    function arcTween(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(1);
      return (t) => arc(i(t));
    }

    let data = this.prof;

    function update(v = index, data) {

      const {A, B, C, D, F, W} = data;
      const datum = [A, B, C, D, F, W];

      const path = svg.selectAll('path')
        .data(pie(datum));

      path.transition().duration(200).attrTween('d', arcTween);

      path.enter().append('path')
        .attr('fill', (d, i) => color(i))
        .attr('d', arc)
        .attr('stroke', 'white')
        .attr('stroke-width', '6px')
        .each(function(d) {
          this._current = d;
        });

      let rectangles = svg.selectAll('rect')
        .data(datum);

      console.log(datum);
      rectangles.enter().append('rect')
        .attr('x', width / 2 + 30)
        .attr('y', (d, i) => -80 + i * 30)
        .attr('width', 25)
        .attr('height', 25)
        .attr('fill', (d, i) => color(i));

      let texts = svg.selectAll('text')
        .data(datum);

      let keys = ['A', 'B', 'C', 'D', 'F', 'W'];

      texts.enter().append('text')
        .attr('x', width / 2 + 65)
        .attr('y', (d, i) => -80 + 17.5 + i * 30)
        .text((d, i) => keys[i] + ': ' + Math.round(d) + '%');

    }

    update(index, data);


  }

}
