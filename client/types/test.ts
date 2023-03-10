export interface ITest {
  _id: string;
  testID: number;
  question: string;
  img?: string;
  categoryName: string;
  incorrect_answers: string[];
  correct_answer: string;
}
