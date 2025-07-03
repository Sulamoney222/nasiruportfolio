import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';

const ReviewCard = ({ content, name, imgSrc, company }) => {
  // Create an array of 5 stars with unique keys
  const ratings = Array.from({ length: 5 }, (_, i) => (
    <StarIcon key={i} className="text-yellow-400 text-xl" />
  ));

  return (
    <div className="bg-blue-900 p-6 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-1 mb-4" aria-label="Rating: 5 out of 5 stars">
        {ratings}
      </div>

      <p className="text-zinc-50 mb-8 text-sm leading-relaxed">{content}</p>

      <div className="flex items-center gap-4 mt-auto">
        <figure className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
          <img src={imgSrc} alt={name} className="img-cover w-full h-full object-cover" />
        </figure>

        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider uppercase">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
