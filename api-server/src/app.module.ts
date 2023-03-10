import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { QuestionModule } from "./question/question.module";
@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://DLT_admin:DLT_pass0508@cluster0.vnoz2wd.mongodb.net/?retryWrites=true&w=majority",
    ),
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
