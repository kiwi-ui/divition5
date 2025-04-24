import { BsFillDoorOpenFill, BsSendFill } from 'react-icons/bs';
import { useState } from 'react';
import { GiFallingLeaf } from 'react-icons/gi';
import style from './style.module.css';
import { motion } from 'motion/react';

const Gift = ({toggleModal}) => {
    const [formData, setFormData] = useState({
        name: '',
        harapan: '',
    });
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    const handleNameChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            name: e.target.value
        }));
    };  
    const handleWishChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            harapan: e.target.value
        }));
    };

    const handleSubmit = (event) =>  {
        event.preventDefault();
        const url = 'https://script.google.com/macros/s/AKfycbwQXX_3toAoYP2V9KO1XaxR8oldPUEAN9X5K91zYE3GIi7wVCTl0HMrdbRpQHswUlco/exec';
        const form = document.getElementById('form');

        if (!formData.name || !formData.harapan) {
            setIsInputEmpty((e) => !e)
            setTimeout(() => {
                setIsInputEmpty(false);
            }, 2000)
            setIsSuccess(false)
            return;
        }
        fetch(url, { method: 'POST', body: new FormData(form) })
        .then(() => {
            setIsLoading(e => !e)
            form.reset();
            setFormData({name:'', harapan:''})
            setIsSuccess(true) 
            setTimeout(() => {
                setIsSuccess(false)
            }, 3000);
        })
        .catch(() =>  {
            setIsLoading(e => !e)
            alert('Terjadi Kesalahan!')
        }
        );
        setIsLoading(e => !e)
    }

  return (
    <section className="position-relative layer">
        <div className="container pt-5">
            <div className="text-white text-center position-relative pb-5">
                <motion.p 
                    className="text-center text-white m-0" 
                    style={{fontSize: '1.5rem', letterSpacing: '0.6rem'}}
                    initial={{ 
                        translateY:'-10rem',
                        scale: 0
                    }}
                    whileInView={{ 
                        translateY:'0rem',
                        scale: 1
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeOut'
                    }}
                    viewport={{ once: true }}
                >RSVP & UCAPAN</motion.p>
                
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
                        <span className='fs-3'>
                            <GiFallingLeaf />
                        </span>
                    </span>
                </motion.div>

                <motion.p 
                    className="px-4"
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
                >Diharapkan kepada tamu undangan untuk mengisi form kehadiran dibawah ini</motion.p>
                
                <form className="">
                    <div className={ `container rounded-4  d-flex flex-column` }>
                        <div id="wish">
                            <form name="submit-to-google-sheet" id="form" className="form-wrapper row py-1" method="post">
                                <motion.div 
                                    className="col-md-6 col-12 mt-md-3 input-group input-group-sm"
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
                                >
                                    <input className={`py-2 form-control w-100 rounded-1 border-0 fw-semibold bg-inputs` } name="name" type="text" placeholder="Nama" onChange={ handleNameChange } value={ formData.name }/>
                                    { !isInputEmpty ? '' : <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama anda</p> }
                                </motion.div>
                                <motion.div 
                                    className="col-md-6 col-12 my-3 input-group input-group-sm"
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
                                >
                                    <input className={`py-2   form-control w-100 rounded-1 border-0 fw-semibold bg-inputs`} name="no" type="number" placeholder="Nomor ponsel (opsional)" />
                                </motion.div>
                                <motion.div 
                                    className="col-12 input-group input-group-sm"
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
                                >
                                    <textarea className={ `form-control pt-2 pb-3 w-100 rounded-1 border-0 fw-semibold bg-inputs`} name="wish" placeholder="Harapan untuk pengantin" onChange={ handleWishChange } value={ formData.harapan } required />
                                    { !isInputEmpty ? '' : <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama harapan anda untuk kepengantin</p> }
                                </motion.div>
                            </form>

                            <motion.div 
                                className="pt-4 position-relative"
                                initial={{ 
                                    scale: 0
                                }}
                                whileInView={{ 
                                    scale: 1
                                }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeOut'
                                }}
                                viewport={{ once: true }}
                            >
                                <a href='blank' type="submit" className={`btn px-3 ${style.bgButton}  position-relative rounded-2 border-0 text-white fw-semibold btn ${isLoading ? 'disabled' : '' } bgButton`} aria-disabled="true" onClick={ handleSubmit }>
                                    { 
                                        isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
                                        : 
                                        <div className={`btn focus m-0 p-0 d-flex flex-row justify-content-center gap-2 align-items-center`}>
                                            <BsSendFill color='white'/>
                                            <p className="mb-1 text-white fw-semibold">Submit</p> 
                                        </div>
                                    }
                                </a>
                                { !isSuccess ? '' : <p className="position-relative bg-text-primary">Pesan Terkirim!</p> }
                            </motion.div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Gift
