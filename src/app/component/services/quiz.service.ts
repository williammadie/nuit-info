import { Injectable } from '@angular/core';
import {Question} from "../../model/question.model";
import {PossibleAnswer} from "../../model/possibleAnswer.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
   _questions!: Question[];
  constructor() {
    this._questions =  [new Question(
      'Depuis le 19ème siècle, la température moyenne a augmenté de :',
      [
        new PossibleAnswer('0,5°C', false),
        new PossibleAnswer('0,8°C', false),
        new PossibleAnswer('1,1°C', true),
      ],
      'La température moyenne a augmenté de 1,1°C depuis le 19ème siècle.'
    ),

      new Question(
        'D\'ici 2050, les scientifiques prévoient une augmentation de la température de :',
        [
          new PossibleAnswer('2,2°C', false),
          new PossibleAnswer('1,5°C', false),
          new PossibleAnswer('3,5°C', true),
        ],
        'L\'objectif fixé par la COP21 est de ne pas dépasser une augmentation supérieure à 1,5°C.'
      ),

      new Question(
        'Les conséquences d\'une augmentation supérieure à 1,5°C...',
        [
          new PossibleAnswer('Blanchissement de 100% des coraux', false),
          new PossibleAnswer('Les risques d\'inondations doubleront', true),
          new PossibleAnswer('Plus aucun lieu sur Terre n\'aura une température inférieure à -20°C', false),
        ],
        'Si nous atteignons ces hausses, 70% des coraux disparaîtront.'
      ),

      new Question(
        'Quelle part l\'alimentation prend-elle dans la pollution en France?',
        [
          new PossibleAnswer('30%', false),
          new PossibleAnswer('18%', true),
          new PossibleAnswer('5%', false),
        ],
        'Les transports sont en première position avec 40%, suivi par l\'alimentation qui est ex aequo avec les industries.'
      ),

      new Question(
        'La fast-fashion sur le podium de la consommation d\'eau est :',
        [
          new PossibleAnswer('La première', false),
          new PossibleAnswer('La deuxième', false),
          new PossibleAnswer('La troisième', true),
        ],
        'La première position est occupée par la culture du riz et la deuxième par celle du blé.'
      )
    ];
  }


  get questions(): Question[] {
    return this._questions;
  }
}
