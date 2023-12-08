class StereotypeQuote {
  quote!: string;
  isCorrect!: boolean;
  explanation!: string;

  constructor(quote: string, isCorrect: boolean, explanation: string) {
    this.quote = quote;
    this.isCorrect = isCorrect;
    this.explanation = explanation;
  }
}

export default StereotypeQuote;
