import React from 'react'
import PropTypes from 'prop-types'

const SkillCard = ({imgSrc, label, desc, classes}) => {
  return (
    <>
    <div data-aos='flip-left' className={'flex items-center gap-3 ring-2 ring-inset ring-blue-500 rounded-2xl p-3 hover:bg-blue-200 transition-colors group ' + classes}>
        <figure className='bg-sky-500 rounded-lg overflow-hidden w-12 h-12
                            group-hover:bg-zinc-700 transition-colors'>
            <img className='w-20 h-12'
            src={imgSrc}
            width={50}
            height={20}
            alt={label}
            ></img>
        </figure>

        <div>
            <h3>{label}</h3>

            <p className=' text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                {desc}
            </p>
        </div>
    </div>
    </>
    
  )
}


SkillCard.PropTypes={
    imgSrc: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}
export default SkillCard
