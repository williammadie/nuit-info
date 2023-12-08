import {Component} from '@angular/core';
import {Question} from "../../model/question.model";
import {PossibleAnswer} from "../../model/possibleAnswer.model";
import {NgForOf, NgIf} from "@angular/common";
import {CardQuizComponent} from "../card-quiz/card-quiz.component";
import {QuizService} from "../services/quiz.service";

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

  constructor(private quizService : QuizService) {
    this.questions = this.quizService.questions;
  }

  onAnswerSelected(event: { isCorrect: boolean }): void {
    this.backgroundColor = event.isCorrect ? '#A6FA8FFF' : '#FD7272FF'
    this.isAnswerSelectedForCurrentQuestion = true;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.isAnswerSelectedForCurrentQuestion = false; // Réinitialiser pour la nouvelle question
    }
  }
}
