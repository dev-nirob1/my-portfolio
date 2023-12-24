import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

const Parallax = ({ type }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <div ref={ref} className="px-4 z-50 md:px-8 lg:px-16 h-[100vh] w-full flex items-center justify-center relative overflow-hidden" style={{
            background: type === 'services' ?
                'linear-gradient(180deg, #111132, #0c0c1d)'
                :
                'linear-gradient(180deg, #111132, #505064'
        }}>
            <motion.h1 style={{ y: ytext }} className="text-3xl md:text-5xl lg:text-7xl"> {type === 'services' ? 'What I Do' : 'What I Did'}</motion.h1>

            <motion.div className="absolute w-full h-full z-30" style={{ backgroundImage: 'url("/mountains.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>

            </motion.div>
            <motion.div className="absolute w-full h-full z-20" style={{ backgroundImage: `url(${ type === 'services'? "/planets.png" : "/sun.png"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', y: yBackground}}>

            </motion.div>
            <motion.div className="absolute w-full h-full z-0" style={{ backgroundImage: 'url("/stars.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', x: yBackground}}>

            </motion.div>
        </div>
    );
};

export default Parallax;