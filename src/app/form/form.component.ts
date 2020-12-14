import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../data.services';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';


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

  constructor(
    private router: Router,
    public data: DataService,
    private http: HttpClient
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
      time: moment().format('MMMM Do YYYY h:mm A ')
    };
    this.router.navigate(['clemson/results'], {queryParams: searchQuery})
      .then(r => this.http.post('https://clemsonprofessors.firebaseio.com/searches.json',
      searchQuery).subscribe((e) => console.log(e)));
  }
}
