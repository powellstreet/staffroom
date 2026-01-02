import { BookSearch } from '@/components/book-search';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/50 font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0 left-0 right-0 p-6 flex items-center justify-between z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="text-xl font-bold tracking-tighter">StaffRoom</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-black transition-colors">홈</a>
          <a href="#" className="hover:text-black transition-colors">나의 모임</a>
          <a href="#" className="hover:text-black transition-colors">로그인</a>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            북클럽 운영을 더 스마트하게.
          </h1>
          <p className="text-lg text-gray-500">
            발제문 작성부터 토론 질문 생성까지,<br className="md:hidden" /> 스태프룸이 당신의 모임을 보조합니다.
          </p>
        </div>

        <BookSearch />
      </main>
    </div>
  );
}
