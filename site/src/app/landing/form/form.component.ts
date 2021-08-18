import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../../data.services';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  providers: [DataService]
})
export class FormComponent implements OnInit {

  @ViewChild('f', {static: true}) form: NgForm;

  professorName = '';
  className = '';

  courseResults = [];
  professorResults = [];


  constructor(
    private router: Router,
    public data: DataService,
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.form.dirty) {
      return;
    }
    const searchQuery = {
      searchMode: this.className !== '' ? 1 : 0,
      query: this.professorName + ' ' + this.className,
    };
    this.router.navigate(['results'], {queryParams: searchQuery})
      .then();
  }


  searchCourses(query) {
    setTimeout(() => {
      if (this.className === query) {
        this.courseResults = this.data.searchCourses(query).slice(0, 5);
      }
    }, 100);
  }

  searchProfessors(query) {
    setTimeout(() => {
      if (this.professorName === query) {
        this.professorResults = this.data.searchProfessors(query).slice(0, 5);
      }
    }, 100);
  }

  show(e: HTMLElement) {
    e.style.display = 'block';
  }

  hide(e: HTMLElement) {
    setTimeout(() => e.style.display = 'none', 200);
  }

}
