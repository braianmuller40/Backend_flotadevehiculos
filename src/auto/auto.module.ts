import { Module } from '@nestjs/common';
import { AutoController } from './auto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto } from './auto.entity';
import { AutoService } from './auto.service';

@Module({
  imports:[TypeOrmModule.forFeature([Auto])],
  providers: [AutoService],
  controllers: [AutoController]
})
export class AutoModule {}
