import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  console.log('\x1b[36m', `The service is currently running in the ${configService.get('NODE_ENV')} environment.`, '\x1b[0m');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
