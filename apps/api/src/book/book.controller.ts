import { Controller, Get, Query } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('search')
  async search(@Query('q') query: string) {
    return this.bookService.searchBooks(query);
  }
}
