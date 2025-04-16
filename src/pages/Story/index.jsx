import { Stories } from '../../data/story';
import photo1 from '../../assets/4.jpg';
import photo2 from '../../assets/6.jpg';
import '../../App.css';
import { GiFallingLeaf } from 'react-icons/gi';
import style from './style.module.css';
import { motion } from 'motion/react';

const Story = () => {
  return (
    <section className="bg-white position-relative pt-5">
        <div className="container text-center">
            <p className="fs-1 cormorant-upright mb-0 fw-semibold" style={{ letterSpacing: '0.4rem' }}>Love Story</p>
            
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
                <span >
                    <span className='fs-2'>
                        <GiFallingLeaf />
                    </span>
                </span>
            </motion.div>
            
            <div className="d-flex flex-row align-items-baseline container pt-4 pb-4">
                <div className="d-flex m-0 pe-0">
                    <img className="w-100" src={ photo1 } alt="story groom"  />
                </div>

                <div className="m-0  ps-0" >
                    <img className="w-100" src={ photo2 } alt="story groom" />
                </div>
            </div>
            
            <div>
                {
                    Stories.map((story) => (
                        <div key={story.id} className="d-flex flex-column justify-content-center gap-2">
                            <div className="text-center">
                                <motion.h2 
                                    className='cormorant-upright fw-semibold fs-1'
                                    initial={{ 
                                        translateX:'-10rem',
                                        scale: 0
                                    }}
                                    whileInView={{ 
                                        translateX:'0rem',
                                        scale: 1
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: 'easeOut'
                                    }}
                                    viewport={{ once: true }}
                                >{story.title}</motion.h2>
                                
                                <motion.p 
                                    className="mb-0 pt-2"
                                    initial={{ 
                                        translateX:'10rem',
                                        scale: 0
                                    }}
                                    whileInView={{ 
                                        translateX:'0rem',
                                        scale: 1
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: 'easeOut'
                                    }}
                                    viewport={{ once: true }}
                                >{story.desc}</motion.p>

                                <motion.div 
                                    className={`${style.divider} mb-2 d-flex gap-4 text-center mx-4 py-3 justify-content-center align-items-center`}
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
                                    <span >
                                        <span className='fs-2'>
                                            <GiFallingLeaf />
                                        </span>
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Story
