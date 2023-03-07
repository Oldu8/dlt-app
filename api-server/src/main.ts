import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(PORT, () =>
      console.log("Server is working on port:", PORT),
    );
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
