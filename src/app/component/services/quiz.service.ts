import { Injectable } from '@angular/core';
import {Question} from "../../model/question.model";
import {PossibleAnswer} from "../../model/possibleAnswer.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private _questions!: Question[];
  constructor() {
    this._questions =  [
      new Question(
        'Première question ici',
        [
          new PossibleAnswer('Réponse A', false),
          new PossibleAnswer('Réponse B', true),
          new PossibleAnswer('Réponse C', false),
          new PossibleAnswer('Réponse D', false),
        ],
        'Explication de la bonne réponse.'
      ),
      new Question(
        'Deuxième question ici',
        [
          new PossibleAnswer('Réponse A', false),
          new PossibleAnswer('Réponse B', true),
        ],
        'Explication de la bonne réponse.'
      ),
    ];
  }


  get questions(): Question[] {
    return this._questions;
  }
}
