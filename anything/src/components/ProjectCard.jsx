import React from 'react';
import PropTypes from 'prop-types';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ProjectCard = ({ imgSrc, title, tags, desc, projectLink, classes }) => {
  return (
    <div
      data-aos="fade-down"
      className={
        'relative group p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 ring-1 ring-inset ring-zinc-50 transition-colors cursor-pointer overflow-hidden ' +
        classes
      }
    >
      {/* Full card clickable */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`Visit project: ${title}`}
      ></a>

      <figure className="img-box aspect-square rounded-lg overflow-hidden mb-4">
        <img
          src={imgSrc}
          alt={title}
          className="img-cover w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>

      <div className="flex items-start justify-between gap-4 relative z-20">
        <div className="flex-1">
          <h3 className="title-1 mb-3 text-white text-lg font-semibold">{title}</h3>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            {tags?.map(({ label, key }) => (
              <span
                key={key}
                className="h-8 px-3 text-sm text-zinc-900 bg-zinc-300 rounded-lg flex items-center"
              >
                {label}
              </span>
            ))}
          </div>

          {desc && <p className="text-sm text-zinc-200">{desc}</p>}
        </div>

        <div className="w-8 h-8 grid place-items-center bg-green-500 text-zinc-950 rounded-lg transition-transform group-hover:rotate-12">
          <ArrowOutwardIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  classes: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  projectLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default ProjectCard;
