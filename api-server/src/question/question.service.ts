/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { Question, QuestionDocument } from "./schemas/question.schems";

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}

  async create(dto: CreateQuestionDto): Promise<Question> {
    const question = await this.questionModel.create({ ...dto });
    return question;
  }
  async getAll(): Promise<Question[]> {
    const questions = await this.questionModel.find();
    return questions;
  }
  async getOne(id: ObjectId): Promise<Question> {
    const question = await this.questionModel.findById(id);
    return question;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const question = await this.questionModel.findByIdAndDelete(id);
    return question.id;
  }
}
