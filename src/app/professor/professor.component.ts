import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.services';

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
    private router: Router ) { }

  ngOnInit() {
    const name = this.route.snapshot.params.name;
    this.professor = this.data.getProfessor(name);

    if (typeof this.professor === 'undefined') {
      this.router.navigate(['clemson/notfound']);
    }
    this.classes = this.data.getCoursesForProfessor(this.professor.Courses);

  }

}
