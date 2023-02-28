/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateTestDto } from "./dto/create-test.dto";
import { TestService } from "./test.service";

@Controller("/tests")
export class TestController {
  constructor(private testService: TestService) {}
  @Post()
  create(@Body() dto: CreateTestDto) {
    return this.testService.create(dto);
  }
  @Get()
  getAll() {
    return "Get ALL";
  }
  // @Get()
  // getOne() {}
  // delete() {}
  // }
}
