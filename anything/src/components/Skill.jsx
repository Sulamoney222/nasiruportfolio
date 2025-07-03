import React from 'react';
import SkillCard from './SkillCard';

const skillItems = [
  {
    imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.jYcja5Jg64PLcKLvs6fBRwHaED&pid=Api&P=0&h=180',
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.nWXzzhpJlg2GbM-u1zo-6wHaHa&pid=Api&P=0&h=180',
    label: 'CSS',
    desc: 'User Interface',
  },
  {
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.u_Qa4LpkYnXQlmiIP4kMnwHaEo&pid=Api&P=0&h=180',
    label: 'JavaScript',
    desc: 'Interaction',
  },
  {
    imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.gUj6QmE3kAf4Wl8DW9iD-gHaDj&pid=Api&P=0&h=180',
    label: 'Typescript',
    desc: 'Interaction',
  },
  {
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.Tf4BFI6846neirVSebC0vAHaEi&pid=Api&P=0&h=180',
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.YKISdgRAdZAuXSPjPslqIQHaHa&pid=Api&P=0&h=180',
    label: 'ExpressJS',
    desc: 'Node Framework',
  },
  {
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.rfbzSCa2ig0zr9zEKiWbLgHaE-&pid=Api&P=0&h=180',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.lnUD4nSuOkNuRhAymN7GPAHaEH&pid=Api&P=0&h=180',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
];

const Skill = () => {
  return (
    <section className="section" aria-label="Skills and Tools">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="headline-2 font-semibold text-gray-900">
          Essential Tools I Use
        </h2>

        <p className="mt-3 mb-8 max-w-xl text-gray-700">
          Check out the tools and technologies I use to build high-performing websites and applications.
        </p>

        <div className="grid  grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {skillItems.map(({ imgSrc, label, desc }) => (
            <SkillCard key={label} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
