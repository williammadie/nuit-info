import { Routes } from '@angular/router';
import {QuizComponent} from "./component/quiz/quiz.component";
import { DraggableStereotypesComponent } from './component/draggable-stereotypes/draggable-stereotypes.component';

export const routes: Routes = [
  { path: 'stereotypes', component: DraggableStereotypesComponent },
  { path: 'quiz', component: QuizComponent },
];
