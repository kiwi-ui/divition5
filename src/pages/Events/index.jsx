import { useState, useEffect } from 'react';
import photo1 from '../../assets/10.jpg';
import photo2 from '../../assets/11.jpg';
import photo3 from '../../assets/9.jpg';
import photo4 from '../../assets/4.jpg';
import photo5 from '../../assets/5.jpg';
import photo6 from '../../assets/6.jpg';
import photo7 from '../../assets/7.jpg';
import photo8 from '../../assets/8.jpg';
import style from './style.module.css';
import { IoCalendar, IoLocation } from 'react-icons/io5';
import { IoIosClock } from 'react-icons/io';
import { motion } from 'motion/react';

const Events = () => {
  const [index, setIndex] = useState(0)
  const images = [
    {
      id: 1,
      url: photo1
    },
    {
      id: 2,
      url: photo2
    },
    {
      id: 3,
      url: photo3
    }
  ]
  const backfareImage = [
    {
      id: 1,
      url: photo4
    },
    {
      id: 2,
      url: photo5
    },
    {
      id: 3,
      url: photo6
    },
    {
      id: 4,
      url: photo7
    },
    {
      id: 5,
      url: photo8
    }
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((img) => (img + 1) % backfareImage.length)
    }, 4000);

    return () => clearInterval(interval) 
  }, [])
  
  return (
    <section className={ `position-relative pb-5 ${ style.layer }` }>
          <div className="text-center ">
              <motion.p 
                className="fs-1 cormorant-upright fw-semibold mb-0 pt-5 text-white"
                style={{ letterSpacing: '0.4rem' }}
                initial={{ 
                  opacity: 0,
                  scale:0
                }}
                whileInView={{ 
                  opacity: 1,
                  scale:1
                }}
                transition={{
                    duration: 3,
                    ease: 'easeOut'
                }}
                viewport={{once: true}}
              >Wedding events</motion.p>
              
              <motion.p 
                className="cormorant-garamond pb-5 mb-0 text-white"
                initial={{ 
                  opacity: 0,
                  scale:0
                }}
                whileInView={{ 
                  opacity: 1,
                  scale:1
                }}
                transition={{
                    duration: 3,
                    ease: 'easeOut'
                }}
                viewport={{once: true}}  
              >Mengharap kehadiran anda pada acara kami yang akan dilaksanakan seperti detail berikut </motion.p>
             
              <div className="row px-5 g-5 me-0">
                <div className='col-md-6'>

                  <motion.div 
                    className="overflow-hidden card rounded-4 mb-4 bg-dark border border-white"
                    initial={{ 
                      opacity: 0,
                      scale:0
                    }}
                    whileInView={{ 
                      opacity: 1,
                      scale:1
                    }}
                    transition={{
                        duration: 3,
                        ease: 'easeOut'
                    }}
                    viewport={{once: true}}
                  >
                    <div className={`d-flex card-img-top position-relative ${style.carouselTrack}`} >
                        {
                          images.map((image) => (
                            <img key={ image.id } className={`position-relative ${style.carouselCard} w-50`} src={ image.url } alt="slide" />
                          ))
                        }
                    </div>
          
                    <div className="card-body px-3 bg-white pb-4">
                        <p className="position-absolute text-white fw-bold text-start" style={{ marginTop: '-4rem', letterSpacing: '0.6rem', fontSize: '1.3rem' }}>AKAD NIKAH</p>
                        
                        <div className="d-flex flex-row flex-nowrap gap-3 border-bottom border-2 py-2 align-items-center">
                            <div className="">
                              <IoCalendar className="fs-5" style={{ color: '#5A5A5A' }}/>
                            </div>
                            <p className="m-0">
                              Sabtu, 31 Februari 2026
                            </p>
                        </div>

                        <div className="d-flex flex-row flex-nowrap gap-3 border-bottom border-2 py-2 align-items-center">
                            <div className="">
                              <IoIosClock className="fs-5" style={{ color: '#5A5A5A' }}/>
                            </div>
                            <p className="m-0">
                              08.00 - 21.00 WIB
                            </p>
                        </div>
                        
                        <div className="d-flex flex-row flex-nowrap gap-3 border-2 py-2 align-items-center">
                            <div className="">
                              <IoLocation  className="fs-5" style={{ color: '#5A5A5A' }}/>
                            </div>
                            <p className="m-0 text-start">
                              Gedung Balai Remaja.
                              Jl. Raya Bandara Juanda No.11 Juanda, Sudimoro, Betro, Kec. Sedati, Kabupaten Sidoarjo, Jawa Timur 61253
                            </p>
                        </div>

                        <button type="button" className="w-100 mt-4 text-white py-1 fw-semibold border-0 rounded" style={{ backgroundColor: '#A78556' }}>Google Maps</button>
                    </div>
                  </motion.div>
                </div>

              <div className='col-md-6'>
                <motion.div
                  className=" overflow-hidden bg-dark border border-white card rounded-4 mb-4"
                  initial={{ 
                    opacity: 0,
                    scale:0
                  }}
                  whileInView={{ 
                    opacity: 1,
                    scale:1
                  }}
                  transition={{
                      duration: 3,
                      ease: 'easeOut'
                  }}
                  viewport={{once: true}}
                >

                <div className={`d-flex card-img-top position-relative ${style.carouselTrack}`} >
                    {
                      images.map((image) => (
                        <img key={ image.id } className={`position-relative ${style.carouselCard} w-50`} src={ image.url } alt="slide" />
                      ))
                    }
                </div>
        
                <div className="card-body bg-white px-3 pb-4">
                    <p className="position-absolute text-white fw-bold text-start" style={{ marginTop: '-4rem', letterSpacing: '0.6rem', fontSize: '1.3rem' }}>RESEPSI</p>
                    
                    <div className="d-flex flex-row flex-nowrap gap-3 border-bottom border-2 py-2 align-items-center">
                      <div className="">
                        <IoCalendar className="fs-5" style={{ color: '#5A5A5A' }}/>
                      </div>
                      <p className="m-0">
                        Sabtu, 31 Februari 2026
                      </p>
                    </div>

                    <div className="d-flex flex-row flex-nowrap gap-3 border-bottom border-2 py-2 align-items-center">
                      <div className="">
                        <IoIosClock className="fs-5" style={{ color: '#5A5A5A' }}/>
                      </div>
                      <p className="m-0">
                        08.00 - 21.00 WIB
                      </p>
                    </div>
                    
                    <div className="d-flex flex-row flex-nowrap gap-3 border-2 py-2 align-items-center">
                      <div className="">
                        <IoLocation  className="fs-5" style={{ color: '#5A5A5A' }}/>
                      </div>
                      <p className="m-0 text-start">
                        Gedung Balai Remaja.
                        Jl. Raya Bandara Juanda No.11 Juanda, Sudimoro, Betro, Kec. Sedati, Kabupaten Sidoarjo, Jawa Timur 61253
                      </p>
                    </div>

                    <button type="button" className="w-100 mt-4 text-white py-1 fw-semibold border-0 rounded" style={{ backgroundColor: '#A78556' }}>Google Maps</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Events
