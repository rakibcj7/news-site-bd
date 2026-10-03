import Image from 'next/image';
import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
              <div className="card bg-base-100  shadow-sm">
                <figure>
                    <Image
                        width={600}
                        height={600}
                        src={news.imageUrl}
                        alt={news.imageAlt} />
                </figure>
                <div className="card-body">
                    <p className='text-red-600 font-semi-bold'>{news.category}</p>
                    <h2 className="card-title">

                        {news.title}
                    </h2>
                    <p>{news.description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;