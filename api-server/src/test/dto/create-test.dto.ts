/* eslint-disable prettier/prettier */
export class CreateTestDto {
  readonly testID: number;
  readonly question: string;
  readonly categoryName: string;
  readonly testNumber: string;
  readonly incorrect_answers: string[];
  readonly correct_answers: string;
}
