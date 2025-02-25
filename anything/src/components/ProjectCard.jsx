import React from 'react'
import PropTypes from 'prop-types'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const ProjectCard = ({imgSrc,title,tags, projectLink, classes}) => {
  return (
    <>
    <div className={'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-600 active:bg-zinc-100 ring-1 ring-inset ring-zinc-50 transition-colors' + classes}>
        <figure className=' img-box aspect-square rounded-lg'>
            <img 
            src={imgSrc}
             
            alt={title}
            className='img-cover'/>

        </figure>
    <div className=' flex items-center justify-between gap-4'>

        <div>
            <h3 className='title-1 mb-3 text-white'>{title}</h3>

            <div className='fex flex-wrap items-center gap-2'>
                {tags.map(({label,key})=>{
                  return  (<span className=' h-8 text-sm text-zinc-900 bg-zinc-300 items-center
                                       px-3 rounded-lg'
                          key={key}>
                    {label}  
                    </span>)
                })}
            </div>
        </div>

        <div className=' w-7 h-7 grid roundd-lg place-items-center bg-green-500 text-zinc-950 shrink-0 font-bold'>
            <span 
            className=''
            aria-hidden='true'
            >
           <ArrowOutwardIcon/>
            </span>
        </div>

        <a 
        href={projectLink}
        target='_blank'
        className='absolute inset-0 '>

        </a>
    </div>
    </div>
    
    </>
  )
}

ProjectCard.PropTypes ={
    imgSrc: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default ProjectCard
