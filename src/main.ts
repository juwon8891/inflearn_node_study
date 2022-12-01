import { NestFactory } from '@nestjs/core';
import { BoardsModule } from './boards/board.module';

async function bootstrap() {
  const app = await NestFactory.create(BoardsModule);
  await app.listen(3000);
}
bootstrap();
