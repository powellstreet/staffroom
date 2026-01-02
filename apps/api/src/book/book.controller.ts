import { Controller, Get, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search books via Google Books API' })
  @ApiQuery({ name: 'q', required: true, description: 'Book title or author' })
  @ApiResponse({ status: 200, description: 'List of books found.' })
  async search(@Query('q') query: string) {
    return this.bookService.searchBooks(query);
  }
}
