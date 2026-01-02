import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({ example: 'Jin', description: 'Name of the member' })
  memberName: string;

  @ApiProperty({ example: 'Harry Potter is amazing...', description: 'Content of the review' })
  content: string;

  @ApiProperty({ example: 'Harry Potter', description: 'Title of the book' })
  bookTitle: string;

  @ApiProperty({ example: 'J.K. Rowling', description: 'Author of the book', required: false })
  bookAuthor?: string;
}
