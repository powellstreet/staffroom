'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Book {
  title: string;
  authors: string[];
  description: string;
  publishedDate: string;
  thumbnail: string;
}

export function BookSearch() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      // In production, use env var for API URL
      const res = await fetch(`http://localhost:4000/book/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
      alert('책 검색에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-8 relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="책 제목이나 저자를 검색하세요..."
          className="w-full px-6 py-4 text-lg rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 shadow-sm transition-all placeholder:text-gray-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {loading ? '검색 중...' : '검색'}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((book, index) => (
          <div
            key={`${book.title}-${index}`}
            className="flex gap-4 p-4 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow bg-white group cursor-pointer"
            onClick={() => console.log('Selected:', book)}
          >
            <div className="relative w-24 h-36 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
              {book.thumbnail ? (
                <Image
                  src={book.thumbnail}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
              )}
            </div>
            <div className="flex flex-col justify-between py-1">
              <div>
                <h3 className="font-bold text-gray-900 line-clamp-2 leading-tight mb-1">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{book.authors.join(', ')}</p>
                <p className="text-xs text-gray-400 line-clamp-3">{book.description}</p>
              </div>
              <button className="self-start text-xs font-semibold px-3 py-1.5 bg-gray-50 rounded-lg text-gray-600 group-hover:bg-black group-hover:text-white transition-colors mt-2">
                선택하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
