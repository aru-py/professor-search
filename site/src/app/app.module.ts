import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { ProfessorComponent } from './professor/professor.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './landing/form/form.component';
import { ResultsComponent } from './results/results.component';
import { CourseComponent } from './course/course.component';
import { IconsComponent } from './icons/icons.component';
import { GraphsComponent } from './graphs/graphs.component';

import { DataService } from './data.services';
import { IconsService } from './icons.services';
import { NotFoundComponent } from './notfound/notfound.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    ProfessorComponent,
    FooterComponent,
    FormComponent,
    ResultsComponent,
    CourseComponent,
    IconsComponent,
    GraphsComponent,
    NotFoundComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    AngularFireModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [DataService, IconsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
