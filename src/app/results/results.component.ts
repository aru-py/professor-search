import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.services';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  query: ParamMap;
  searchQuery: string;
  results: any;
  showProfessors = true;
  icons = this.data.icons;


  ngOnInit() {
    this.query = this.route.snapshot.queryParamMap;
    this.init();
    this.route.queryParamMap.subscribe(
      (params) => {
        this.query = params;
        this.init();
      }
    );
  }

  // initializes page
  init() {
    if (this.query.get('searchMode') === '1') {
      this.showProfessors = false;
      this.results = this.data.searchCourses(this.query.get('query')).slice(0, 15);
    } else {
      this.showProfessors = true;
      this.results = this.data.searchProfessors(this.query.get('query')).slice(0, 15);
    }
  }

  // changes search mode between professors and courses
  changeMode(param: number) {
    this.router.navigate(['results'], {
      queryParams: {searchMode: param},
      queryParamsHandling: 'merge'
    }).then(() => this.init());
  }

  // search functionality
  onSubmit() {
    this.router.navigate(['results'], {
      queryParams: {query: this.searchQuery},
      queryParamsHandling: 'merge'
    }).then();
  }
}
