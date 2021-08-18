import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.services';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.sass']
})
export class ProfessorComponent implements OnInit {
  professor: any;
  classes: any;
  display = true;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router,
    private title: Title) { }

  ngOnInit() {
    const name = this.route.snapshot.params.name;
    this.title.setTitle(`${name} at Clemson University`);
    this.professor = this.data.getProfessor(name);

    if (typeof this.professor === 'undefined') {
      this.router.navigate(['/notfound']).then();
    }
    this.classes = this.data.getCoursesForProfessor(this.professor.Courses);

  }

}
