import React from 'react'
import PropTypes from 'prop-types'
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarBorder from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
// import me from './node_modules/.vite/deps/@mui_icons-material_Star.js'
const ratings =new Array(5);
ratings.fill({
    icon: <StarIcon/>,
    style: {fontVarirationSettings: '"FILL"1'},
    key: new Date().getTime.toString()
})
console.log(ratings);

const ReviewCard = ({content, name, imgSrc, company,key}) => {
  return (
    <>
  <div className='bg-blue-900 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]' key={key}>
   
   <div className='flex items-center gap-1 mb-3'>
    {
        ratings.map(({icon,style,key})=>{
            return(
                <span
                key={key}
                className='text-yellow-400 text-[18px]'
                style={style}>
               {icon}
             
                </span>
            )
        })
    }
   </div>
   <p className='text-zinc-50 mb-8'>
    {content}
   </p>

   <div className=' flex items-center gap-2 mt-auto'>
    <figure className='img-box rounded-lg'>
        <img 
        src={imgSrc}
        alt={name}
        width={44}
        height={44}
        className='img-cover' />
    </figure>

    <div>
        <p>{name}</p>
       <p className='text-xs text-zinc-400 tracking-wider'>{company}</p>
        
    </div>
   </div>
  </div>
    </>
  )
}

ReviewCard.PropTypes={
    content: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
}

export default ReviewCard
