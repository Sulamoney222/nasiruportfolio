import React from 'react'
import ProjectCard from './ProjectCard';

// importing allimages
import luxnet from './images/luxnet.png'
import tutorial from './images/tutorial.png'
import bank from './images/bank.png'
import zora from './images/zoralty.png'
import coin from './images/coin.png'
import random from './images/random.png'
import phone from './images/poly.png'
import quiz from './images/quiz.png'
import commerce from './images/commerce.png'
import photo from './images/photo.png'
import cock from './images/cock.png'
import travel from './images/iphone.png'
import count from './images/shop.png'


const works = [

  {
    imgSrc: phone,
    title: `Polygon Web3 Website`,
    tags:[{
      label:'Next.JS',},
    {label:'Tailwind Css'},
    ,{label:'Swipper.JS'},
    ],
    desc:'This platform serves as a reliable source for the latest updates, news, and developments within the Polygon Web3 blockchain ecosystem. It is designed to keep developers, investors, and enthusiasts informed about key advancements, ecosystem projects, and emerging trends across the Polygon network.',
    
    projectLink: 'https://polygon-blockproject.vercel.app/'
  },
  {
    imgSrc: travel,
    title: 'iPhone Cal.',
    tags:[{
      label:'React',},
    {label:'TailwindCSS'},
    ,{label:'Api'}],
    desc:'The iPhone website provides up-to-date information on the newest iPhone models, including their specifications, features, and availability. It serves as an official source for exploring and comparing different iPhone versions to help users make informed purchasing decisions.',
    projectLink: 'https://iphone-project-eosin.vercel.app/'
  },

  {
    imgSrc: photo,
    title: 'Clone stock photo app',
    tags:[{
      label:'React',},
    {label:'TailwindCSS'},
    ],
    desc:'This clone stock app delivers timely updates and downloads of the latest gallery versions, ensuring users have access to the newest features, enhancements, and visual assets as they become available.',

    projectLink: 'https://pixstock-official.vercel.app/'
  },

  {
    imgSrc: count,
    title: 'Shopping Website',
    tags:[{
      label:'React.JS',},
    {label:'Tailwind CSS'},
    ,{label:'JAVASCRIPT & JSON'},
    ],
    projectLink: 'https://first-ecommerce-website-five.vercel.app/'
  },
  {
    imgSrc: quiz,
    title: 'Quiz Application',
    tags:[{
      label:'HTML',},
    {label:'CSS'},
    ,{label:'JAVASCRIPT'},
    ],
    desc:'r',
    projectLink: 'https://sulamoney-mc-qs-ashen.vercel.app/'
  },
  {// https://sulamoney-mc-qs-ashen.vercel.app/
    imgSrc: cock,
    title: 'CocktailApi',
    tags:[{
      label:'React',},
    {label:'CSS'},
    ,{label:'Api'}],
    projectLink: 'https://allcocktailapi-website-hah2.vercel.app/'
  },
  
  {
    imgSrc: commerce,
    title: 'Crypto Countdown Website',
    tags:[{
      label:'HTML',},
    {label:'CSS'},
    ,{label:'JAVASCRIPT & JSON'},
    ],
    projectLink: 'https://countdowncrypto.vercel.app/'
  },

  {
    imgSrc: count,
    title: 'Ecommerce Responsive Website',
    tags:[{
      label:'HTML',},
    {label:'CSS'},
    ,{label:'JAVASCRIPT & JSON'},
    ],
    projectLink: 'https://e-commerce-website-dun-tau.vercel.app/'
  },













//Designs


    {
      imgSrc: luxnet,
      title: 'LuxNet Real Estate Website Design',
      tags:[{
        label:`LuxNet Real Estate Management is a premier real estate platform designed to streamline property management and enhance the buying, selling, and renting experience. With a user-friendly interface and powerful features, LuxNet offers both real estate professionals and clients an intuitive way to browse, manage, and connect with properties.`, 
        
      }],
      
      projectLink: 'https://www.figma.com/design/fqw1GXkPLlRNnStIOHEDFg/Luxnet?m=auto&t=eNlYQkFmBU2BNaVF-6'
    },
    {
      imgSrc: tutorial,
      title: 'Webinar Tutorial App Design',
      tags: [{
        label:`Webinar is a user-friendly mobile app designed to help you learn new skills at your own pace. With easy-to-follow tutorials on a wide range of topics, you can access step-by-step guides, interactive lessons, and practical exercises right at your fingertips. Whether you're a beginner or looking to sharpen your expertise, [App Name] makes learning simple, flexible, and fun.`
      }],
      projectLink: 'https://www.figma.com/design/clejgFFPCoyqW2IlGvQagn/Mobile-App-Designs?m=auto&t=eNlYQkFmBU2BNaVF-6'
    },
    {
      imgSrc: bank,
      title: 'CashPay Bank',
      tags: [{
        label: 'CashPay  is your trusted online banking platform, offering secure, convenient, and easy access to all your financial needs. With features like account management, bill payments, money transfers, and real-time transaction updates, [Bank Name] ensures you can handle your finances anytime, anywhere.'
      }],
      projectLink: 'https://www.figma.com/design/fFjOJ0hXczhKaOhKzJIPj3/Banking-Website?m=auto&t=eNlYQkFmBU2BNaVF-6'
    },
    {
      imgSrc: zora,
      title: 'Zoralty Website',
      tags: [{
        label:'Zoralty Real Estate is your go-to platform for finding, buying, selling, and renting properties with ease. Whether you’re looking for your dream home, investment opportunities, or seeking professional property management services, Zoralty offers a seamless and intuitive experience.'
      }],
      projectLink: 'https://www.figma.com/design/RU3pKjBydptG2NnRMacJge/Untitled?m=auto&t=eNlYQkFmBU2BNaVF-6'
    },
    {
      imgSrc: coin,
      title: 'CoinApp Trading App',
      tags: [{
        label: `CoinApp is a powerful, easy-to-use mobile app designed for traders of all levels. Whether you're a beginner or an experienced investor, CoinApp gives you real-time access to market data, trading tools, and personalized insights. `
      }],
      projectLink: 'https://www.figma.com/design/CUx0c49a5PbrHbQZY5w1va/Trade-Mobile-Design?m=auto&t=eNlYQkFmBU2BNaVF-6'
    },
    {
      imgSrc: random,
      title: 'Random Profile Design',
      tags: [{
        label: `Whether you're managing your account, connecting with others, or simply exploring the platform, This profile Design ensures a smooth and engaging experience every time.`
      }],
      projectLink: 'https://www.figma.com/design/LusbjFYgifrau0s1O3xXeW/Untitled?m=auto&t=eNlYQkFmBU2BNaVF-6'
    },
  ];
const Work = () => {
  return (
    <>
     <section
     id='work'
     className='section'>
        <div className="container">

            <h2 className="headline-2 mb-8">
                My Portfolio Highlights
            </h2>

            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>

                {
                    works.map(({imgSrc,title,tags, projectLink, key,desc})=>{
                     return    <ProjectCard 
                         key={key}
                         imgSrc={imgSrc}
                         title={title}
                         desc={desc}
                         tags={tags}
                         projectLink={projectLink}/>
                    })
                }
            </div>
        </div>
     </section>
    </>
  )
}

export default Work
