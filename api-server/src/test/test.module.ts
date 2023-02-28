/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestSchema } from './schemas/test.schems';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
