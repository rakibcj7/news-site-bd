import Image from 'next/image';
import React from 'react';

const MainNews = ({ news }) => {

    const [firstNews, ...otherNews] = news

    return (

        <div className=' flex gap-2'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        width={600}
                        height={600}
                        src={firstNews.imageUrl}
                        alt={firstNews.imageAlt} />
                </figure>
                <div className="card-body">
                    <p className='text-red-600 font-semi-bold'>{firstNews.category}</p>
                    <h2 className="card-title">

                        {firstNews.title}
                    </h2>
                    <p>{firstNews.description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>


            <div className='grid gap-2'>
                {otherNews.slice(0, 4).map(n =>

                    <div className='card bg-base-100 border border-gray-400 rounded py-5 px-1' key={n.id}>

                        <p className='text-red-600 font-semi-bold'>{firstNews.category}</p>
                        <div className='px-1'>{n.title}</div>


                    </div>)}

            </div>


        </div>

    )
}

export default MainNews;