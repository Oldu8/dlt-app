/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test {
  @Prop()
  testID: number;

  @Prop()
  question: string;

  @Prop()
  categoryName: string;

  @Prop()
  testNumber: string;

  @Prop()
  inccorect_answers: string[];

  @Prop()
  correct_answers: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
