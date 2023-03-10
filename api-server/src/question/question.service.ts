/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateRawQuestionDto } from "./dto/create-question.dto";
import { Question, QuestionDocument } from "./schemas/question.schems";

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}

  async create(dto: CreateRawQuestionDto): Promise<Question> {
    const {
      incorrect_answers_1,
      incorrect_answers_2,
      incorrect_answers_3,
      ...rest
    } = dto;

    const incorrect_answers = [
      incorrect_answers_1,
      incorrect_answers_2,
      incorrect_answers_3,
    ];

    const createdQuestion = new this.questionModel({
      ...rest,
      incorrect_answers,
    });
    return createdQuestion.save();
  }

  async getAll(): Promise<Question[]> {
    const questions = await this.questionModel.find();
    return questions;
  }
  async getOne(id: ObjectId): Promise<Question> {
    const question = await this.questionModel.findById(id);
    return question;
  }

  async getOneByTestId(testid: number): Promise<Question[]> {
    const query = { testID: testid };
    const question = await this.questionModel.find(query);
    return question;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const question = await this.questionModel.findByIdAndDelete(id);
    return question.id;
  }

  async getAllbyCategory(
    category: string,
    testNumber: number,
  ): Promise<Question[]> {
    const query = { categoryName: category, testNumber: testNumber };
    const questions = await this.questionModel.find(query);
    return questions;
  }
}
