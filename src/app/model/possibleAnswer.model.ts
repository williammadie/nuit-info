export class PossibleAnswer {
    text: string;
    isCorrect: boolean;

    constructor(text: string, isCorrect: boolean) {
        this.text = text;
        this.isCorrect = isCorrect;
    }
}
