export interface ITest {
  _id: string;
  testID: number;
  question: string;
  img?: string;
  categoryName: string;
  inccorect_answers: string[];
  correct_answer: string;
}
