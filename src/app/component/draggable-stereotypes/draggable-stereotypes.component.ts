import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';
import StereotypeQuote from '../../model/StereotypeQuote';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-draggable-stereotypes',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CommonModule, MatIconModule],
  templateUrl: './draggable-stereotypes.component.html',
  styleUrl: './draggable-stereotypes.component.css',
})
export class DraggableStereotypesComponent {
  standbyItems: Array<StereotypeQuote> = [
    new StereotypeQuote(
      'La France doit faire sa part des choses',
      true,
      'Tous les pays sont concernés par le changement climatique.'
    ),
    new StereotypeQuote(
      'Le nucléaire est une énergie de transition',
      true,
      "Le nucléaire n'est pas viable éternellement car il repose sur des combustible fossile"
    ),
    new StereotypeQuote(
      'Chaque personne devrait calculer son empreinte carbone',
      true,
      'Il est essentiel que chaque personne soit impliquée dans cette étape'
    ),
    new StereotypeQuote(
      "C'est d'abord aux autres d'agir",
      false,
      "L'individualisme est un des principaux facteurs d'inaction climatique."
    ),
  ];
  trueItems: Array<StereotypeQuote> = [];
  falseItems: Array<StereotypeQuote> = [];
  itemsToDetail: Array<StereotypeQuote> = [];
  isDisplayingExplanations: boolean = false;

  constructor(private _snackBar: MatSnackBar) {}

  drop(event: CdkDragDrop<StereotypeQuote[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  checkAnswers() {
    this.itemsToDetail = [];
    let totalScore =
      this.trueItems.length + this.falseItems.length + this.standbyItems.length;
    let correctAnswers = 0;

    for (const item of this.trueItems) {
      if (item.isCorrect) {
        correctAnswers++;
      }
    }

    for (const item of this.falseItems) {
      if (!item.isCorrect) {
        correctAnswers++;
      }
    }

    const messageFin =
      correctAnswers > totalScore / 2
        ? 'Bien joué !'
        : 'Dommage, essaye encore !';

    this._snackBar.open(
      `${correctAnswers}/${totalScore} bonne(s) réponse(s) - ${messageFin}`,
      'Fermer'
    );
  }

  showExplanations() {
    this.isDisplayingExplanations = !this.isDisplayingExplanations;

    for (const item of this.standbyItems) {
      this.itemsToDetail.push(item);
    }

    for (const item of this.falseItems) {
      this.itemsToDetail.push(item);
    }

    for (const item of this.trueItems) {
      this.itemsToDetail.push(item);
    }
  }

  hideExplanations() {
    this.itemsToDetail = [];
    this.isDisplayingExplanations = !this.isDisplayingExplanations;
  }
}
