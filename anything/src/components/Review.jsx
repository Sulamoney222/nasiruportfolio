import React from 'react'
import ReviewCard from './ReviewCard';

const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Sophia Ramirez',
      imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.76v8tepNfFX5HfovCh_VXgAAAA&pid=Api&P=0&h=180',
      company: 'PixelForge'
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Ethan Caldwell',
      imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.mBnuGIw52_BTvyDI-AmyYAHaJ4&pid=Api&P=0&h=180',
      company: 'NexaWave'
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Liam Bennett',
      imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.qyehb9ANsZicFGPoeQ-9zgHaJ4&pid=Api&P=0&h=180',
      company: 'CodeCraft'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Noah Williams',
      imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.ZN-6_VfIF8n6OzeWFRxZVAHaJ3&pid=Api&P=0&h=180',
      company: 'BrightWeb'
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.xsPkg4YQSOyEd2A-u9kfigHaLH&pid=Api&P=0&h=180',
      company: 'TechMosaic'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.WpIMP_W3gb5bZ81rA-K2YgHaHa&pid=Api&P=0&h=180',
      company: 'Skyline Digital'
    }
  ];
const Review = () => {
  return (
    <>
    <section id='reviews' className="section overflow-hidden">
        <div className="container">
            <h2 className="headline-2 mb-8">
                Recent Reviews
            </h2>
            <div className='grid gap-20  grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] '>
                {
                    reviews.map(({content, name, imgSrc, company,key})=>{
                        return(
                           <>
                           <ReviewCard
                              name={name}
                              imgSrc={imgSrc}
                              content={content}
                              company={company}
                              key={key}
                              />
                           </>
                        )
                    })
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Review
