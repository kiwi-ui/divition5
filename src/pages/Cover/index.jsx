import { useParams, useNavigate } from "react-router";
import style from './style.module.css';
import { BsFillDoorOpenFill } from "react-icons/bs";
import { motion } from "motion/react";

const Cover = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(name).replace(/\+/g, " ");
  const hideCover = () => { navigate(`/${name}/main`) };
  
  return (
    <section className={`${style.bgCover} vh-100 d-flex flex-column justify-content-around align-items-center text-center`}>
      <div className="text-white" style={{zIndex: 10}}>
          <motion.p 
              className="m-0 dm-sans"
              style={{letterSpacing: '0.3rem'}}
              initial={{ 
                translateY: '-5rem',
                opacity: 0
              }}
              whileInView={{ 
                translateY: '0rem',
                opacity: 1
              }}
              transition={{
                  duration: 2,
                  ease: 'easeOut'
              }}
              viewport={{once: true}}
          >The Wedding Of</motion.p>
          
          <motion.p 
              className="my-1 cormorant-upright" 
              style={{letterSpacing: '0.1rem', fontSize: '3rem'}}
              initial={{
                scale: 0,
                opacity: 0
              }}
              whileInView={{
                scale: 1,
                opacity: 1
              }}
              transition={{
                duration: 2,
                ease: 'easeOut'
              }}
          >Fulan & Fullin</motion.p>
          <motion.p 
              className="mb-0 dm-sans" 
              style={{letterSpacing: '0.3rem'}}
              initial={{ 
                translateY: '5rem', 
              }}
              whileInView={{ translateY: '0rem' }}
              transition={{
                  duration: 2,
                  ease: 'easeOut'
              }}
              viewport={{once: true}}

          >31 Februari 2025</motion.p>
      </div>
      
      <div className={`text-white ${style.width50} text-center `} style={{zIndex: 10}}>
          <motion.p 
            className="mb-0 cormorant-garamond fst-italic"
            initial={{ 
              translateY: '-2rem',
              opacity: 0
            }}
            whileInView={{ 
              translateY: '0rem',
              opacity: 1
            }}
            transition={{
                duration: 2,
                ease: 'easeOut'
            }}
            viewport={{once: true}}
          >Dear</motion.p>

          <motion.div 
              className={`d-flex justify-content-center align-content-center py-3 rounded-3 my-3 ${ style.glass }`}
              initial={{
                scale: 0,
                opacity: 0
              }}
              whileInView={{
                scale: 1,
                opacity: 1
              }}
              transition={{
                duration: 2,
                ease: 'easeOut'
              }}
          >
            <motion.p 
                className="fs-4 m-0"
                initial={{ 
                  translateY: '-5rem',
                  opacity: 0
                }}
                whileInView={{ 
                  translateY: '0rem',
                  opacity: 1
                }}
                transition={{
                    duration: 2,
                    ease: 'easeOut'
                }}
                viewport={{once: true}}
            >{ decodedName }</motion.p>
          </motion.div>

          <motion.button 
            className={`btn d-flex justify-content-between align-items-center mx-auto gap-2  ${style.buttonColor} text-white px-3 shadows`} 
            type="button" 
            onClick={ hideCover }
            initial={{
              opacity: 0.3,
              scale: 2
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 2,
              ease: 'easeOut'
            }}
          >
            <BsFillDoorOpenFill />
            <motion.p 
                className="m-0"
            >Buka Undangan</motion.p>
          </motion.button>
      </div>
    </section>
  )
}

export default Cover
