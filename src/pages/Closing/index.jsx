import { useEffect, useState, useRef } from 'react';
import style from './style.module.css';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import img1 from '../../assets/6.jpg';
import img2 from '../../assets/11.jpg';
import img3 from '../../assets/4.jpg';
import img4 from '../../assets/9.jpg';
import { GiFallingLeaf } from 'react-icons/gi';
import { motion } from 'motion/react';

const Closing = () => {
   const [photo, setPhoto] = useState([
        { id: 1, url: img1 },
        { id: 2, url: img2 },
        { id: 3, url: img3 },
        { id: 4, url: img4 }
    ]);
    const [index, setIndex] = useState(0)
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % photo.length)
        }, 4000);
  
          return () => clearInterval(interval);
      }, []);

  return (
    <section className={`${ style.bgGradient } position-relative py-5`}>
        <motion.div 
            className={`${style.divider} mb-2 d-flex gap-4 text-center mx-4  justify-content-center align-items-center`}
            initial={{ 
                scale: 0,
                opacity: 0
            }}
            whileInView={{ 
                scale: 1,
                opacity: 1
            }}
            transition={{
                duration: 3.5,
                ease: 'easeOut'
            }}
            viewport={{ once: true }}
        >
            <span>
                <span className='fs-2'>
                    <GiFallingLeaf color='white' />
                </span>
            </span>
        </motion.div>

        <div className={`container text-white py-3`}>
            <div className="d-flex align-items-center justify-content-evenly text-center flex-column h-100">
                <motion.img 
                    className={`w-50 ${style.outlineIn} rounded-2 mb-4`} src={photo[index].url}
                    initial={{ 
                        scale: 0,
                        opacity: 0
                    }}
                    whileInView={{ 
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{
                        duration: 3.5,
                        ease: 'easeOut'
                    }}
                    viewport={{ once: true }}
                />
                <motion.div 
                    initial={{ 
                        scale: 0,
                        opacity: 0
                    }}
                    whileInView={{ 
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{
                        duration: 3.5,
                        ease: 'easeOut'
                    }}
                    viewport={{ once: true }}
                >
                    <p>Kami yang berbahagia</p>
                    <p className="fs-2">Yusni & Anggara</p>
                    <p>Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada kami.</p>
                    <p>Terimakasih</p>
                </motion.div>
            </div>
        </div>

        <motion.div 
            className={`${style.divider} mb-2 d-flex gap-4 text-center mx-4  justify-content-center align-items-center`}
            initial={{ 
                scale: 0,
                opacity: 0
            }}
            whileInView={{ 
                scale: 1,
                opacity: 1
            }}
            transition={{
                duration: 3.5,
                ease: 'easeOut'
            }}
            viewport={{ once: true }}
        >
            <span>
                <span className='fs-2'>
                    <GiFallingLeaf color='white' />
                </span>
            </span>
        </motion.div>
        
        <div className="container text-white text-center py-3">
            <motion.p 
                className="m-0 pb-4"
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
                viewport={{ once: true }}
            >Made with love by Divition</motion.p>

            <div className="position-relative d-flex gap-3 justify-content-center">
                <motion.div
                    initial={{ 
                        translateX:'-10rem'
                    }}
                    whileInView={{ 
                        translateX:0
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeOut'
                    }}
                    viewport={{ once: true }}
                >
                    <BsInstagram className="fs-1 " />
                </motion.div>
                
                <motion.div
                    initial={{ 
                        translateX:'10rem'
                    }}
                    whileInView={{ 
                        translateX:0
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeOut'
                    }}
                    viewport={{ once: true }}
                >
                    <BsWhatsapp className="fs-1 "/>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Closing
