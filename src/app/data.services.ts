import {Injectable} from '@angular/core'
import {IconsService} from './icons.services'
import * as Professors from '../assets/data/Professors.json';
import * as Classes from '../assets/data/Classes.json';
import * as Fuse from 'fuse.js'

@Injectable()
export class DataService {

  constructor(private iconsService: IconsService) {

    for (let professor of this.professors) {
      if (professor['Title'] == "-")
        professor['Title'] = "Faculty"
      if (professor['Department'] == "-")
        professor['Department'] = ''
    }
  }

  icons = this.iconsService.icons

  professorOptions = {
    keys: ['Professor'],
    tokenize: true,
    threshold: 0,
    matchAllTokens: true
  };

  courseOptions = {
    keys: ['Course'],
    threshold: 0,
  };

  allOptions = {
    keys: ['Professor', 'Course', 'Name'],
    tokenize: true,
    threshold: 0,
  };

  professors = (Professors as any).default;
  classes = (Classes as any).default;
  professorFuse = new Fuse(this.professors, this.professorOptions);
  courseFuse = new Fuse(this.classes, this.courseOptions);
  allFuse = new Fuse(this.classes, this.allOptions);

  getProfessor(id: any) {
    id = id.trim()
    if (!isNaN(id))
      return this.professors.find((professor) => professor.ID == id)
    return this.professors.find((professor) => professor.Professor == id)
  }

  getCoursesForProfessor(courses: [number]) {
    let arr = [];
    for (let course of courses)
      arr.push(this.classes[course])
    return arr;
  }

  getCourse(id: number) {
    // console.log(id)
    return this.classes.find((course) => course.Id == id)
  }


  getOtherProfessors(id: number) {
    let c = this.getCourse(id).Course
    return this.professors.filter(
      (professor) => {
        for (let course of professor.Courses) {
          if (this.getCourse(++course).Course == c) {
            return true
          }
        }
      }
    )
  }

  searchProfessors(query: string) {
    query = query.trim()
    let results = this.professorFuse.search(query);
    return results;
  }

  searchCourses(query: string) {
    query = query.trim()
    return this.courseFuse.search(query)
  }

  searchAll(query: string) {
    query = query.trim()
    return this.allFuse.search(query)
  }


}
