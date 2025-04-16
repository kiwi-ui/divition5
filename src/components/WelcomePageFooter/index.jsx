import Countdown from '../Countdown'
import { BsCalendarCheckFill } from "react-icons/bs";
import style from './style.module.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../../App.css';
import { motion } from "motion/react";

const WelcomePageFooter = () => {
  return (
    <section className={`w-100 position-relative`} style={{ paddingTop: '60vh' }}>
        <div className={`d-flex flex-column align-items-center gap-4 ${style.grad}`} style={{ paddingBottom: '3rem' }}>
            <motion.div 
              className="position-relative mx-auto" 
              style={{zIndex: 10}}
              initial={{ 
                translateX: '-5rem',
                opacity: 0
              }}
              whileInView={{ 
                translateX: '0rem',
                opacity: 1
              }}
              transition={{
                  duration: 2,
                  ease: 'easeOut'
              }}
              viewport={{once: true}}
            >
                <p className="fs-1 mb-0 cormorant-upright fw-semibold text-white" style={{ letterSpacing: "0.5rem" }}>Fulan & Fulani</p>
            </motion.div>

            <Countdown />

            <motion.button 
              className={`d-flex justify-content-between align-items-center mx-auto gap-2 btn text-white px-3 shadows ${ style.buttonColor }`} 
              type="button"
              initial={{ 
                translateX: '5rem',
                opacity: 0
              }}
              whileInView={{ 
                translateX: '0rem',
                opacity: 1
              }}
              transition={{
                  duration: 2,
                  ease: 'easeOut'
              }}
              viewport={{once: true}}
            >
              <BsCalendarCheckFill />
              <p className="m-0 fw-semibold fs-5 dm-sans">ADD TO CALENDAR</p>
            </motion.button>
            <motion.div
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
            >
              <DotLottieReact
                src='https://lottie.host/f7a96224-5623-4bda-86c3-f8e8135ab051/Mxk8nQiEno.lottie'
                loop
                autoplay
                style={{ height: '50px', width:'100px' }}
              />
            </motion.div>
        </div>
    </section>
  )
}

export default WelcomePageFooter