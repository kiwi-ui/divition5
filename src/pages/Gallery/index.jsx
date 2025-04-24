import { useState } from 'react';
import g1 from '../../assets/5.jpg';
import g2 from '../../assets/14.jpg';
import g3 from '../../assets/13.jpg';
import g4 from '../../assets/4.jpg';
import g5 from '../../assets/9.jpg';
import g6 from '../../assets/11.jpg';
import ModalImage from '../../components/ModalImage';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';

const Gallery = ({ isPhotoClicked, setisPhotoClicked, clickedPhoto, setClickedPhoto }) => {
    const galleryImages = [{img: g1},{img: g2},{img: g3},{img: g4},{img: g5},{img: g6}]
    const showImage = (param) => {
        setisPhotoClicked(true);
        setClickedPhoto(param.target.src);
    }

    return (
        <>
            <ModalImage isPhotoClicked={ isPhotoClicked } setisPhotoClicked={ setisPhotoClicked } clickedPhoto={ clickedPhoto }/>
            
            <section id="gallery" className={ `gallery position-relative bg-body-secondary` } style={{overflowX: 'hidden'}}>
                <div className="container py-5 text-black">
                    <motion.div 
                        className={ `mb-4 cormorant-upright` }
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeOut'
                        }}
                        viewport={{ once: true }}
                    >
                        <p className={ `mb-0 p-0 fs-1 mt-2 fw-bold` } style={{ letterSpacing: '0.4rem' }}>Momen</p>
                        <div className="border border-1 border-black position-absolute ms-5" style={{ marginTop: '-0.6rem', width: '77%' }}></div>
                        <p className={ `mb-0 position-absolute fs-1 ms-5 fw-bold` } style={{ marginTop: '-1.2rem', letterSpacing: '0.4rem' }}>Bahagia</p>
                    </motion.div>  
        
                    <motion.div 
                        className="pb-5"
                        initial={{
                            opacity: 0,
                            scale: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeOut'
                        }}
                        viewport={{ once: true }}
                    >
                        <p className="mb-0 text-center cormorant-garamond">Setiap foto adalah potongan kisah cinta yang kami rajut bersama. Dari senyuman yang tulus hingga pelukan hangat, semuanya penuh makna. Inilah kenangan yang akan kami simpan selamanya.</p>
                    </motion.div>
        
                    <div className="row px-2 g-4">
                        { galleryImages.map((image, index) => 
                            (
                                <div key={ index } className="col-md-4">
                                    <AnimatePresence className="position-relative shadow-sm">
                                        <motion.img  
                                            className={ `position-relative w-100 rounded-1` } 
                                            src={ image.img }
                                            alt='prewedding' 
                                            onClick={ showImage } 
                                            initial={{ translateX: '-10rem' }}
                                            whileInView={{ translateX: '0rem' }}
                                            transition={{
                                                duration: 2,
                                                ease: 'easeOut'
                                            }}
                                            viewport={{ once: true }}
                                        />
                                    </AnimatePresence>
                                </div> 
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
