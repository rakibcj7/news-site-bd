import NewsCard from '@/app/components/NewsCard';
import { getCategoryNews } from '@/lib/api';

export const metadata = {
  title: 'ক্যাটাগরি',
};

const CategoryNewsPage = async ({ params }) => {
  const { id } = await params;
  const { title, articles } = await getCategoryNews(id);

  return (
    <div className="grid gap-6">
      <header className="border-b-2 border-red-700 pb-3">
        <h1 className="text-2xl font-bold text-red-700 sm:text-3xl">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">{articles.length}টি খবর</p>
      </header>

      {articles.length === 0 ? (
        <p className="py-12 text-center text-slate-500">এই ক্যাটাগরিতে এখনো কোনো খবর নেই।</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <NewsCard key={article.id} news={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNewsPage;