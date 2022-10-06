import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  // Validation Pipe
  // White list ignores the parameters doesn't be in the dto.
  // Forbid: throws an error.
  app.useGlobalPipes(
    new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true, })
  );
  await app.listen(3000);
}
main();
