import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.services'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
  providers: [DataService]
})
export class CourseComponent implements OnInit {

  params: any;
  course: any;
  results: any;
  constructor(
  private route: ActivatedRoute,
  private data: DataService,
  private router: Router) { }

  ngOnInit() {
    this.params = this.route.snapshot.params['id'];

    this.course = this.data.getCourse(this.params);
    if (typeof this.course == "undefined")
      this.router.navigate(['clemson/notfound']);
    this.route.params.subscribe (
      (param) => this.params = param['id']
    )
    this.results = this.data.getOtherProfessors(this.params);
  }

}
