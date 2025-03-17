import { useEffect, useState } from 'react';
import style from './style.module.css';
// import Slide from '../../assets/animation';
// import font from '../../fonts.module.css';

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
        <section id="date" className="border-0 position-relative" style={{  overflowX:'hidden' }}>
            {/* <Slide delay={2}> */}
                <div className="row justify-content-center">
                    {!isEventOver ?
                        <div className={`row text-white`}>
                            <div className="col-3 ">
                                <div className={` border border-1 bg-success px-4 ${style.bgCountdown} text-center d-flex align-items-center flex-column rounded-2 shadow-sm`}>
                                    <p className={` fw-bold fs-5 pt-1 mb-0`}>{event.days}</p>
                                    <p className={` fw-semibold m-0 pb-1`} style={{fontSize:'0.7rem'}}>Hari</p>
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className={` border border-1 bg-success px-4 ${style.bgCountdown} text-center d-flex align-items-center flex-column rounded-2 shadow-sm`}>
                                    <p className={` fw-bold fs-5 pt-1 mb-0`}>{event.hours}</p>
                                    <p className={` fw-semibold m-0 pb-1`} style={{fontSize:'0.7rem'}}>Jam</p>
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className={` border border-1 bg-success px-4 ${style.bgCountdown} text-center d-flex align-items-center flex-column rounded-2 shadow-sm`}>
                                    <p className={` fw-bold fs-5 pt-1 mb-0`}>{event.minutes}</p>
                                    <p className={` fw-semibold m-0 pb-1`} style={{fontSize:'0.7rem'}}>Menit</p>
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className={` border border-1 bg-success px-4 ${style.bgCountdown} text-center d-flex align-items-center flex-column rounded-2 shadow-sm`}>
                                    <p className={` fw-bold fs-5 pt-1 mb-0`}>{event.seconds}</p>
                                    <p className={` fw-semibold m-0 pb-1`} style={{fontSize:'0.7rem'}}>Detik</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <p>Acara Sudah Selesai</p>
                        </div>
                    }
                </div>
            {/* </Slide> */}
        </section>
    )
}

export default Countdown
