/* eslint-disable prettier/prettier */
export class CreateQuestionDto {
  readonly testID: number;
  readonly question: string;
  readonly img: string;
  readonly categoryName: string;
  readonly testNumber: number;
  readonly correct_answer: string;
  readonly incorrect_answers: string[];
}
