import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({ imgSrc, label, desc, classes = '' }) => {
  return (
    <div
      data-aos="flip-left"
      className={
        `flex items-center gap-4 p-4 rounded-xl ring-2 ring-inset ring-blue-500 bg-white shadow-sm transition-shadow hover:shadow-lg hover:bg-blue-50 ${classes}`
      }
      role="group"
      tabIndex={0}
      aria-label={`${label} skill card`}
    >
      <figure className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center overflow-hidden transition-colors group-hover:bg-blue-300">
        <img
          className="max-w-[70%] max-h-[70%] object-contain"
          src={imgSrc}
          alt={label}
          loading="lazy"
          width={56}
          height={56}
        />
      </figure>

      <div>
        <h3 className="text-lg font-semibold text-blue-900">{label}</h3>
        <p className="text-sm text-blue-700 mt-1 max-w-[18rem]">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
