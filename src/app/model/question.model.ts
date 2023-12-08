import {PossibleAnswer} from "./possibleAnswer.model";

export class Question {
    text: string;
    answers: PossibleAnswer[];
    explanation: string;

    constructor(text: string, answers: PossibleAnswer[], explanation: string) {
        this.text = text;
        this.answers = answers;
        this.explanation = explanation;
    }
}
