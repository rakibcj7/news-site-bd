import React from 'react';
import Marquee from "react-fast-marquee";

const Marquees = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news");
    const data = await res.json();
    const headLines = data.data;


    return (
        <div className='bg-red-700 text-white px-2 mx-2'>
          <div className="flex max-w-7xl mx-auto">

             <div className='bg-red-800 py-1 px-5 font-bold'>সর্বশেষ</div>


            <Marquee className='py-1'
                direction='left'>
                {headLines.map(h =>
                    <span key={h.id}>
                        <span>{h.title}</span>
                        <span className='mx-5'>|</span>

                    </span>

                )}
            </Marquee>
            </div> 
        </div>
    );
};

export default Marquees;