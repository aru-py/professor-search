import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.services'
import {Title} from "@angular/platform-browser";

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
        private router: Router,
        private title: Title) {
    }

    ngOnInit() {

        this.params = this.route.snapshot.params['id'];

        this.course = this.data.getCourse(this.params);
        this.title.setTitle(this.course.Name + ' at Clemson University')
        if (typeof this.course == "undefined")
            this.router.navigate(['/notfound']);
        this.route.params.subscribe(
            (param) => this.params = param['id']
        )
        this.results = this.data.getOtherProfessors(this.params);
    }

}
