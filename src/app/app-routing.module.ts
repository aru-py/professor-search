import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfessorComponent} from './professor/professor.component'
import {LandingComponent} from './landing/landing.component'
import {NavbarComponent} from './navbar/navbar.component'
import {ResultsComponent} from './results/results.component'
import {CourseComponent} from './course/course.component'
import {NotFoundComponent} from './notfound/notfound.component'

const routes: Routes = [
  {
    path: '', component: NavbarComponent, children: [
      {path: '', component: LandingComponent},
      {path: 'results', component: ResultsComponent},
      {path: 'professor/:name', component: ProfessorComponent},
      {path: 'course/:id', component: CourseComponent},
      {path: 'notfound', component: NotFoundComponent}
    ]
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
