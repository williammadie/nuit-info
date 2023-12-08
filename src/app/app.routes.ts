import { Routes } from '@angular/router';
import {QuizComponent} from "./component/quiz/quiz.component";
import { DraggableStereotypesComponent } from './component/draggable-stereotypes/draggable-stereotypes.component';
import {AppComponent} from "./app.component";
import {InformationComponent} from "./component/information/information.component";

export const routes: Routes = [
  { path: '', component: InformationComponent },
  { path: 'stereotypes', component: DraggableStereotypesComponent },
  { path: 'quiz', component: QuizComponent },
];
