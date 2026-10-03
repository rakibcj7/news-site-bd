import Link from 'next/link';
import React from 'react';

const Navlinks = async() => {
     const res = await fetch('https://news-api-v2.vercel.app/api/categories');
     const data = await res.json();
     const navs = data.data;
     const filteredNavs = navs.filter((n) => n.scrapable);


    return (
        <div className='flex gap-5 justify-center mt-5'>

            <Link href='/'>হোম</Link>

           {filteredNavs.map((n, ind)=> (
            <Link key={ind} href={n.slug}>{n.title}</Link>
           ))}
        </div>
    );
};

export default Navlinks;