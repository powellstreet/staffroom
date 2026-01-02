'use client';

import { useState } from 'react';

export function ReviewForm() {
  const [formData, setFormData] = useState({
    memberName: '',
    bookTitle: '',
    bookAuthor: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit review');
      
      alert('독후감이 성공적으로 등록되었습니다!');
      setFormData({ memberName: '', bookTitle: '', bookAuthor: '', content: '' });
    } catch (error) {
      console.error(error);
      alert('등록에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100 mt-12">
      <h2 className="text-2xl font-bold mb-6">독후감 등록</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">멤버 이름</label>
          <input
            type="text"
            required
            value={formData.memberName}
            onChange={(e) => setFormData({ ...formData, memberName: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
            placeholder="이름을 입력하세요"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">책 제목</label>
            <input
              type="text"
              required
              value={formData.bookTitle}
              onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
              placeholder="책 제목"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">저자 (옵션)</label>
            <input
              type="text"
              value={formData.bookAuthor}
              onChange={(e) => setFormData({ ...formData, bookAuthor: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
              placeholder="저자명"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">독후감 내용</label>
          <textarea
            required
            rows={8}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 resize-none"
            placeholder="독후감 내용을 입력하세요..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {loading ? '등록 중...' : '독후감 등록하기'}
        </button>
      </form>
    </div>
  );
}
