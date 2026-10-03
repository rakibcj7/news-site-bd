import Image from "next/image";
import Marquees from "./componnets/Marquees";
import MainNews from "./componnets/MainNews";
import NewsCard from "./componnets/NewsCard";

export default async function Home() {

  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles
  const otherSections = sections.slice(1);

  return (<>
    <div>
      <Marquees />
      <div className='gird grid-cols-3 max-w-7xl mx-auto'>

        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>

          <div className='grid gap-5 mt-5'>

            {otherSections.map(os => <div className=" " key={os.curationId }>
              
              <h1 className='font-bold border-b-2 border-red-700 pb-2'>{os.title}</h1>
               
          <div className='grid grid-cols-3 gap-2 mt-3'>
             
               {
              os.articles.map((news) => (
              <NewsCard key={news.id} news={news}/>
            ))}

            </div>
            
            
            </div>)}
          </div>
        </div>

        <div className="col-span-1"></div>

      </div>
    </div>
  </>


  );
}
