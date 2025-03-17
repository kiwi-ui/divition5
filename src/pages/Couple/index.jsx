import groom from '../../assets/9.jpg';
import bride from '../../assets/14.jpg';
import style from './style.module.css';
import { BsInstagram } from 'react-icons/bs';

const Couple = () => {
  return (
    <section className='position-relative bg-white' style={{zIndex:10}}>
        <div className="container text-center">
            <div className=''>
                <p className='fs-2'>The Bride & Groom</p>
                <p>
                    Bismillahirrahmanirrahim
                    Assalamualaikum Warahmatullahi Wabarakatuh.
                    Dengan memohon rahmat dan ridho Allah SWT, kami mengharapkan kehadiran Bapak/Ibu/Saudara/i 
                    pada acara pernikahan putra-putri kami
                </p>
            </div>

            <div className="">
                <img className={`w-75 outline ${style.outlineIn}`} src={groom} alt="groom" />
                <div className='container pt-3 text-start d-flex flex-column align-items-center'>
                    <p className={ `fw-semibold mb-1 fs-3 `} style={{ letterSpacing:'0.2rem' }}>Yusni Anggara</p>
                    <div className="text-center text-body-secondary opacity-80">
                        <p className="mb-0 mt-2">Putri bungsu dari</p>
                        <p className="mb-2">Bapak mempelai & Ibu mempelai</p>
                        <a className="btn bg-white" href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                            <BsInstagram className="fs-3" style={{color:'rgb(179, 148, 151)'}}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className={`py-5 ${style.divider} d-flex gap-4 text-center mx-4  justify-content-center align-items-center`}>
                <span >
                    <span className='fs-1'>&</span>
                </span>
            </div>
            
            <div className='py-3'>
                <img className={`w-75 outline ${style.outlineIn}`} src={bride} alt="groom" />
                <div className='container py-5 text-start d-flex flex-column align-items-center'>
                    <p className={ `fw-semibold mb-1 fs-3 `} style={{ letterSpacing:'0.2rem' }}>Yusni Anggara</p>
                    <div className="text-center text-body-secondary opacity-80">
                        <p className="mb-0 mt-2">Putra bungsu dari</p>
                        <p className="mb-2">Bapak mempelai & Ibu mempelai</p>
                        <a className="btn bg-white" href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                            <BsInstagram className="fs-3" style={{color:'rgb(179, 148, 151)'}}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Couple