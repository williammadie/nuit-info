import {Component, OnDestroy} from '@angular/core';
import {Question} from "../../model/question.model";
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
export class QuizComponent implements OnDestroy{
  questions !: Question[];
  backgroundColor = 'transparent';
  currentQuestionIndex = 0;
  isAnswerSelectedForCurrentQuestion = false;
  cptGoodAnswer = 0;
  tabAnswer !: boolean[];

  constructor(private quizService : QuizService,private _snackBar: MatSnackBar) {
    this.questions = this.quizService.questions;
    this.tabAnswer = []
  }

  onAnswerSelected(event: { isCorrect: boolean }): void {
    if (event.isCorrect && !this.tabAnswer[this.currentQuestionIndex]){
      this.backgroundColor =  '#A6FA8FFF';
      this.cptGoodAnswer++;
      this.tabAnswer.push(true);
    }else if (!this.tabAnswer[this.currentQuestionIndex]){
      this.backgroundColor = '#FD7272FF';
      this.tabAnswer.push(true);
    }
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
  ngOnDestroy(): void {
    this._snackBar.dismiss()
  }
}
