import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  imports: [HttpModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
