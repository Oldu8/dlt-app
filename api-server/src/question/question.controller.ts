/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { QuestionService } from "./question.service";

@Controller("/questions")
export class QuestionController {
  constructor(private questionService: QuestionService) {}
  @Post()
  create(@Body() dto: CreateQuestionDto) {
    return this.questionService.create(dto);
  }
  @Get()
  getAll() {
    return this.questionService.getAll();
  }
  @Get(":id")
  getOne(@Param("id") id: ObjectId) {
    return this.questionService.getOne(id);
  }
  @Delete(":id")
  delete(@Param("id") id: ObjectId) {
    return this.questionService.delete(id);
  }
}
