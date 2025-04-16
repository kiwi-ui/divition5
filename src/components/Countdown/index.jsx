import { useEffect, useState } from 'react';
import style from './style.module.css';
// import Slide from '../../assets/animation';
// import font from '../../fonts.module.css';
import '../../App.css';
import { motion } from 'motion/react';

const Countdown = () => {
    const [event, setEvent] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null
    })
    const [isEventOver, setIsEventOver] = useState(false)

    useEffect(() => {
        const targetDate = new Date('2025-05-01T00:00:00');

        setInterval(() => {
            const currentDate = new Date();
            const timeDifference = targetDate - currentDate;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setEvent({ days, hours, minutes, seconds })

            if (timeDifference <= 0) {
                return (setIsEventOver((event) => !event));
            }
        }, 1000)
    }, [])

    return (
        <section id="date" className="border-0 position-relative py-2" style={{  overflowX:'hidden' }}>
                <div className="row justify-content-center">
                    {!isEventOver ?
                        <div className={`row text-white`}>
                            <motion.div 
                                className="col-3"
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
                                <div className={` border border-3 px-4 text-center d-flex align-items-center flex-column rounded-2 shadow-sm ${style.countdown}`}>
                                    <p className={` fw-bold fs-5 pt-1 mb-0 dm-sans `}>{event.days}</p>
                                    <p className={` fw-semibold m-0 pb-1 cormorant-upright fs-5 `} style={{fontSize:'0.7rem'}}>Hari</p>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="col-3"
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
                                <div className={` border border-3 px-4 text-center d-flex align-items-center flex-column rounded-2 shadow-sm ${style.countdown}`}>
                                    <p className={` fw-bold fs-5 pt-1 mb-0 dm-sans `}>{event.hours}</p>
                                    <p className={` fw-semibold m-0 pb-1 cormorant-upright fs-5 `} style={{fontSize:'0.7rem'}}>Jam</p>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="col-3"
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
                                <div className={` border border-3 px-4 text-center d-flex align-items-center flex-column rounded-2 shadow-sm ${style.countdown}`}>
                                    <p className={` fw-bold fs-5 pt-1 mb-0 dm-sans `}>{event.minutes}</p>
                                    <p className={` fw-semibold m-0 pb-1 cormorant-upright fs-5 `} style={{fontSize:'0.7rem'}}>Menit</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="col-3"
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
                                <div className={` border border-3 px-4 text-center d-flex align-items-center flex-column rounded-2 shadow-sm ${style.countdown}`}>
                                    <p className={` fw-bold fs-5 pt-1 mb-0 dm-sans `}>{event.seconds}</p>
                                    <p className={` fw-semibold m-0 pb-1 cormorant-upright fs-5 `} style={{fontSize:'0.7rem'}}>Detik</p>
                                </div>
                            </motion.div>
                        </div>
                        :
                        <div>
                            <p>Acara Sudah Selesai</p>
                        </div>
                    }
                </div>
        </section>
    )
}

export default Countdown
