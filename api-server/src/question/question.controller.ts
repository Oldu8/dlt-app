/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from "@nestjs/common";
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

  // Peredelat s id na testID
  @Get("/byid/:id")
  getOne(@Param("id") id: ObjectId) {
    console.log(id);
    return this.questionService.getOne(id);
  }
  @Get("/all")
  getAll() {
    return this.questionService.getAll();
  }

  @Get("/bytestid/:testid")
  getOneByTestId(@Param("testid") testid: number) {
    console.log(testid);
    return this.questionService.getOneByTestId(testid);
  }

  @Get("/category/:category")
  getAllbyCategory(
    @Param("category") category: string,
    @Query("testNumber") testNumber: number,
  ) {
    return this.questionService.getAllbyCategory(category, testNumber);
  }

  @Delete(":id")
  delete(@Param("id") id: ObjectId) {
    return this.questionService.delete(id);
  }
}
