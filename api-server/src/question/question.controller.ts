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
import { CreateRawQuestionDto } from "./dto/create-question.dto";
import { QuestionService } from "./question.service";

@Controller("/tests")
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post()
  createRaw(@Body() dto: CreateRawQuestionDto) {
    return this.questionService.create(dto);
  }

  @Get("/all")
  getAll() {
    return this.questionService.getAll();
  }

  @Get(":id")
  getOne(@Param("id") id: ObjectId) {
    return this.questionService.getOne(id);
  }

  @Get("/bytestid/:testid")
  getOneByTestId(@Param("testid") testid: number) {
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
