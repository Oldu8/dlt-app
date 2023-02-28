/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";
import { Model } from "mongoose";
import { CreateTestDto } from "./dto/create-test.dto";
import { TestDocument } from "./schemas/test.schems";

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {}

  async create(dto: CreateTestDto): Promise<Test> {
    const test = await this.testModel.create({ ...dto });
    return test;
  }
  // async getAll() {}
  // async getOne() {}
  // async delete() {}
}
