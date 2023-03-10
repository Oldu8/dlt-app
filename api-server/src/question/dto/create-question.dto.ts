/* eslint-disable prettier/prettier */
export class CreateRawQuestionDto {
  readonly testID: number;
  readonly question: string;
  readonly img?: string;
  readonly categoryName: string;
  readonly testNumber: number;
  readonly correct_answer: string;
  readonly incorrect_answers_1: string;
  readonly incorrect_answers_2: string;
  readonly incorrect_answers_3: string;
}
