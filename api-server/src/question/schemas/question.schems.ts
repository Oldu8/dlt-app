/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type QuestionDocument = HydratedDocument<Question>;

@Schema()
export class Question {
  @Prop()
  testID: number;
  @Prop()
  question: string;
  @Prop()
  img?: string;
  @Prop()
  categoryName: string;
  @Prop()
  testNumber: number;
  @Prop()
  incorrect_answers: string[];
  @Prop()
  correct_answer: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
