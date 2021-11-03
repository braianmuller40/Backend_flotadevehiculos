import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule , DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
  .setTitle('Flota de Vehiculos')
  //.setDescription('Descripcion')
  .setVersion('1.0')
  .addTag('flotaDeVehiculos')
  .build();

  const doc = SwaggerModule.createDocument(app,options);

  SwaggerModule.setup('api/doc',app,doc);

  await app.listen(3000);
}
bootstrap();
