import {Component} from '@angular/core';
import {Question} from "../../model/question.model";
import {PossibleAnswer} from "../../model/possibleAnswer.model";
import {NgForOf, NgIf} from "@angular/common";
import {CardQuizComponent} from "../card-quiz/card-quiz.component";
import {QuizService} from "../services/quiz.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CardQuizComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  questions !: Question[];
  backgroundColor = 'transparent';
  currentQuestionIndex = 0;
  isAnswerSelectedForCurrentQuestion = false;
  cptGoodAnswer = 0;

  constructor(private quizService : QuizService,private _snackBar: MatSnackBar) {
    this.questions = this.quizService.questions;
  }

  onAnswerSelected(event: { isCorrect: boolean }): void {
    if (event.isCorrect){
      this.backgroundColor =  '#A6FA8FFF';
      this.cptGoodAnswer++;
    }else
      this.backgroundColor = '#FD7272FF';
    this.isAnswerSelectedForCurrentQuestion = true;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.isAnswerSelectedForCurrentQuestion = false; // Réinitialiser pour la nouvelle question
    }else{
      const messageFin =
        this.cptGoodAnswer > this.questions.length / 2
          ? 'Bien joué !'
          : 'Dommage, essaye encore !';

      this._snackBar.open(
        `${this.cptGoodAnswer}/${this.questions.length} bonne(s) réponse(s) - ${messageFin}`,
        'Fermer'
      );
    }
  }
}
