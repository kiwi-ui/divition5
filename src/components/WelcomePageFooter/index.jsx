import Countdown from '../Countdown'
import { BsFillDoorOpenFill } from "react-icons/bs";
import style from './style.module.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const WelcomePageFooter = () => {
  return (
    <section className={`w-100 position-relative`} style={{paddingTop: '70vh'}}>
        <div className={`d-flex flex-column align-items-center gap-4 pb-5 ${style.grad}`}>
            <div className="position-relative bg-danger mx-auto" style={{zIndex: 10}}>
                <p className="mb-0 fs-3">Fulan & Fulani</p>
            </div>
            <Countdown />
            <button className={`d-flex justify-content-between align-items-center mx-auto gap-2 btn btn-danger text-white px-3 shadows`} type="button">
                <BsFillDoorOpenFill />
                <p className="m-0">Buka Undangan</p>
            </button>
            <DotLottieReact 
              src='https://lottie.host/f7a96224-5623-4bda-86c3-f8e8135ab051/Mxk8nQiEno.lottie'
              loop
              autoplay
              style={{height: '40px', width:'40px'}}
            />
        </div>
    </section>
  )
}

export default WelcomePageFooter