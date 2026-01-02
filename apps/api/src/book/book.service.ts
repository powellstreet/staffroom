import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export interface Book {
  title: string;
  authors: string[];
  description: string;
  publishedDate: string;
  thumbnail: string;
}

@Injectable()
export class BookService {
  private readonly logger = new Logger(BookService.name);

  constructor(private readonly httpService: HttpService) {}

  async searchBooks(query: string): Promise<Book[]> {
    this.logger.log(`Searching books with query: ${query}`);
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            query,
          )}&maxResults=10`,
        ),
      );

      const items = response.data.items || [];
      return items.map((item: any) => ({
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || [],
        description: item.volumeInfo.description || '',
        publishedDate: item.volumeInfo.publishedDate || '',
        thumbnail: item.volumeInfo.imageLinks?.thumbnail || '',
      }));
    } catch (error) {
      this.logger.error('Error fetching books', error);
      throw error;
    }
  }
}
