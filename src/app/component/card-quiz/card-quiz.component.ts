import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../../model/question.model";
import {NgForOf} from "@angular/common";
import {PossibleAnswer} from "../../model/possibleAnswer.model";

@Component({
  selector: 'app-card-quiz',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './card-quiz.component.html',
  styleUrl: './card-quiz.component.css'
})
export class CardQuizComponent {
  @Input() question!: Question;
  @Output() answerSelected = new EventEmitter<{ isCorrect: boolean }>();

  clickAnswer(answer: PossibleAnswer):void{
    this.answerSelected.emit({ isCorrect: answer.isCorrect });
  }
}
