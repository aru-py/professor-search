import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  input: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  search() {

    if (this.input != '') {
      const queryParams = {
        searchMode: 1,
        query: this.input
      }
      this.router.navigate(['results'], {queryParams: queryParams})

    }
  }

  showLogo() {
    return location.pathname === '/results' || location.pathname === '/';
  }

}
