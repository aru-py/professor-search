import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  input: string;
  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

    search() {

      if (this.input != "") {
        let queryParams = {
          searchMode: 1,
          query: this.input
        }
        this.router.navigate(['clemson/results'], {queryParams: queryParams} )
        this.http.post("https://clemsonprofessors.firebaseio.com/searches.json",
          queryParams).subscribe((e) => console.log(e))
      }
    }

}
