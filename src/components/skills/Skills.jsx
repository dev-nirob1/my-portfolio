import { motion } from "framer-motion";

const Variants = {
  initial: {
    y: 50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}


import html from '/html.png'
import css from '/css.png'
import tailwind from '/tailwind.png'
import bootstrap from '/bootstrap.png'
import javascript from '/javascript.png'
import reactIcon from '/react.png'
import node from '/nodejs.png'
import expressjs from '/express-js.png'
import mongodb from '/mongodb.png'
import git from '/git.png'
import vsCode from '/vs-code.png'
import figma from '/figma.png'
import chatgpt from '/chatgpt.png'
import firebase from '/firebase.png'


const Skills = () => {

  const skills = [
    { name: 'HTML', path: `${html}` },
    { name: 'CSS', path: `${css}` },
    { name: 'Tailwind CSS', path: `${tailwind}` },
    { name: 'Bootstrap', path: `${bootstrap}` },
    { name: 'JavaScript', path: `${javascript}` },
    { name: 'React.js', path: `${reactIcon}` },
    { name: 'Node.js', path: `${node}` },
    { name: 'Express.js', path: `${expressjs}` },
    { name: 'MongoDB', path: `${mongodb}` },
    { name: 'Firebase', path: `${firebase}` },
  ];

  const tools = [
    { name: 'VS Code', path: `${vsCode}` },
    { name: 'Git', path: `${git}` },
    { name: 'ChatGPT', path: `${chatgpt}` },
    { name: 'Figma', path: `${figma}` },
  ]


  return (
    <div className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] py-5 md:pb-16 px-4 md:px-8 lg:px-16 text-gray-200">
      <h2 className="text-3xl text-gray-100 md:text-4xl font-bold md:font-extrabold my-5 md:my-10 flex items-center justify-center gap-1">
        <hr className='w-[50px] border-t-2' />
        Skills
      </h2>

      <motion.div variants={Variants} initial="initial" animate="animate" className='font-medium grid grid-cols-2 items-center justify-center gap-3 md:gap-6'>
        {
          skills.map((skill, index) => <motion.div variants={Variants} key={index} className='flex items-end gap-2 md:gap-5'>
            <img style={{ width: '30px' }} src={skill.path} alt="logo" />
            <div className='w-full'>
              <p>{skill.name}</p>
              <hr />
            </div>
          </motion.div >)
        }
      </motion.div>

      <motion.div variants={Variants} initial="initial" animate="animate">
        <h3 className='flex items-center justify-center gap-1 text-gray-100 text-3xl  md:text-4xl font-bold md:font-extrabold my-5 md:my-10'>
          <hr className='w-[50px] border-t-2' />
          Tools
        </h3>
        <motion.div variants={Variants} className='font-medium grid grid-cols-2 items-center justify-center gap-3 md:gap-8'>
          {
            tools.map((tool, index) => <div key={index} className='flex items-end gap-2 md:gap-5'>
              <img style={{ width: '30px' }} src={tool.path} alt="logo" />
              <div className='w-full'>
                <p>{tool.name}</p>
                <hr />
              </div>
            </div >)
          }
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Skills;
