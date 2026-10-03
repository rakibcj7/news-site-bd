import MainNews from '@/app/components/MainNews';
import Mostread from '@/app/components/Mostread';
import NewsCard from '@/app/components/NewsCard';
import { getSections } from '@/lib/api';

export default async function Home() {
  const sections = await getSections();
  const [firstSection, ...otherSections] = sections;
  const leadNews = firstSection?.articles ?? [];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
      <div className="grid gap-8 lg:col-span-2">
        <MainNews news={leadNews} />

        {otherSections.map((section) => (
          <section key={section.curationId} className="grid gap-4">
            <h2 className="border-b-2 border-red-700 pb-2 text-lg font-bold sm:text-xl">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.articles.map((article) => (
                <NewsCard key={article.id} news={article} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <aside className="lg:sticky lg:top-24 lg:self-start">
        <Mostread />
      </aside>
    </div>
  );
}