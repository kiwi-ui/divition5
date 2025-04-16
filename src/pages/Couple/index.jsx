import groom from '../../assets/9.jpg';
import bride from '../../assets/14.jpg';
import style from './style.module.css';
import { BsInstagram } from 'react-icons/bs';
import { GiFallingLeaf } from 'react-icons/gi';
import '../../App.css';
import { motion } from 'motion/react';

const Couple = () => {
  return (
    <section className='position-relative bg-white py-5' style={{zIndex:10}}>
        <div className="container text-center">
            <div className='py-5'>
                <motion.p 
                    className='fs-1 cormorant-upright fw-semibold' style={{ letterSpacing: '0.4rem' }}
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
                >The Bride & Groom</motion.p>

                <motion.p 
                    className='cormorant-garamond' 
                    style={{ color: '#585656' }}
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
                    Bismillahirrahmanirrahim
                    Assalamualaikum Warahmatullahi Wabarakatuh.
                    Dengan memohon rahmat dan ridho Allah SWT, kami mengharapkan kehadiran Bapak/Ibu/Saudara/i 
                    pada acara pernikahan putra-putri kami
                </motion.p>
            </div>

            <motion.div 
                className=""
                initial={{ 
                  opacity: 0
                }}
                whileInView={{ 
                  opacity: 1
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut'
                }}
                viewport={{once: true}}
            >
                <motion.img 
                    className={`w-50 outline ${style.outlineIn}`} src={groom} alt="groom" 
                    initial={{ 
                        opacity: 0,
                        scale: 0
                    }}
                    whileInView={{ 
                    opacity: 1,
                    scale: 1
                    }}
                    transition={{
                        duration: 3,
                        ease: 'easeOut'
                    }}
                    viewport={{once: true}}
                />
                <div className='container pt-3 text-start d-flex flex-column align-items-center'>
                    <motion.p 
                        className={ `fw-semibold mb-0 cormorant-upright fw-semibold fs-1`}
                        style={{ letterSpacing:'0.3rem' }}
                        initial={{ 
                            opacity: 0,
                            scale: 0
                        }}
                        whileInView={{ 
                        opacity: 1,
                        scale: 1
                        }}
                        transition={{
                            duration: 3,
                            ease: 'easeOut'
                        }}
                        viewport={{once: true}}
                    >Yusni Anggara</motion.p>
                    
                    <div className="text-center text-body-secondary">
                        <motion.p 
                            className="mb-0 mt-2" 
                            style={{ letterSpacing: '0.2rem' }}
                            initial={{ 
                                opacity: 0,
                                scale: 0
                            }}
                            whileInView={{ 
                            opacity: 1,
                            scale: 1
                            }}
                            transition={{
                                duration: 3,
                                ease: 'easeOut'
                            }}
                            viewport={{ once: true }}
                        >Putra bungsu dari</motion.p>

                        <motion.p className="mb-3"
                            initial={{ 
                                opacity: 0,
                                scale: 0
                            }}
                            whileInView={{ 
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 3,
                                ease: 'easeOut'
                            }}
                            viewport={{once: true}}
                        >Bapak mempelai & Ibu mempelai</motion.p>
                        <motion.a 
                            className={`btn rounded-circle ${style.bgButton} p-3`}
                            href="https://www.instagram.com/yusnianggara/"
                            target='_blank' 
                            rel="noreferrer"
                            initial={{ 
                                opacity: 0,
                                scale: 0
                            }}
                            whileInView={{ 
                            opacity: 1,
                            scale: 1
                            }}
                            transition={{
                                duration: 3,
                                ease: 'easeOut'
                            }}
                            viewport={{once: true}}
                        >
                            <BsInstagram className="fs-1 text-white fw-bold"/>
                        </motion.a>
                    </div>
                </div>
            </motion.div>

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
            
            <motion.div 
                className='py-3'
                initial={{ 
                    opacity: 0
                  }}
                  whileInView={{ 
                    opacity: 1
                  }}
                  transition={{
                      duration: 1,
                      ease: 'easeOut'
                  }}
                  viewport={{once: true}}
            >
                <motion.img 
                    className={`w-50 outline ${style.outlineIn}`} src={bride} 
                    initial={{ 
                        opacity: 0,
                        scale: 0
                    }}
                    whileInView={{ 
                    opacity: 1,
                    scale: 1
                    }}
                    transition={{
                        duration: 3,
                        ease: 'easeOut'
                    }}
                    viewport={{once: true}}
                    alt='bride'
                />

                <div className='container pt-3 text-start d-flex flex-column align-items-center'>
                    <motion.p 
                        className={ `fw-semibold mb-0 cormorant-upright fw-semibold fs-1` } 
                        style={{ letterSpacing:'0.3rem' }}
                        initial={{ 
                            opacity: 0,
                            scale: 0
                        }}
                        whileInView={{ 
                        opacity: 1,
                        scale: 1
                        }}
                        transition={{
                            duration: 3,
                            ease: 'easeOut'
                        }}
                        viewport={{once: true}}
                    >
                        Yusni Anggara
                    </motion.p>

                    <div className="text-center text-body-secondary">
                        <motion.p 
                            className="mb-0 mt-2" 
                            style={{ letterSpacing: '0.2rem' }}
                            initial={{ 
                                opacity: 0,
                                scale: 0
                            }}
                            whileInView={{ 
                            opacity: 1,
                            scale: 1
                            }}
                            transition={{
                                duration: 3,
                                ease: 'easeOut'
                            }}
                            viewport={{once: true}}
                        >Putri bungsu dari</motion.p>

                        <motion.p 
                            className="mb-3"
                            initial={{ 
                                opacity: 0,
                                scale: 0
                            }}
                            whileInView={{ 
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 3,
                                ease: 'easeOut'
                            }}
                            viewport={{once: true}}
                        >Bapak mempelai & Ibu mempelai</motion.p>
                        <motion.a 
                            className={`btn rounded-circle ${style.bgButton} p-3`}
                            href="https://www.instagram.com/yusnianggara/"
                            target='_blank' 
                            rel="noreferrer"
                            initial={{ 
                                opacity: 0,
                                scale: 0
                            }}
                            whileInView={{ 
                            opacity: 1,
                            scale: 1
                            }}
                            transition={{
                                duration: 3,
                                ease: 'easeOut'
                            }}
                            viewport={{once: true}}
                        >
                            <BsInstagram className="fs-1 text-white fw-bold"/>
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Couple