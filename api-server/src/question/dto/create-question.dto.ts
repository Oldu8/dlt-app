/* eslint-disable prettier/prettier */
export class CreateQuestionDto {
  readonly testID: number;
  readonly question: string;
  readonly categoryName: string;
  readonly testNumber: string;
  readonly correct_answer: string;
  readonly incorrect_answers: string[];
}
