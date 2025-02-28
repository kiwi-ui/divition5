import { useParams, useNavigate } from "react-router";
import style from './style.module.css';
import { BsFillDoorOpenFill } from "react-icons/bs";

const Cover = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(name).replace(/\+/g, " ");
  const hideCover = () => { navigate(`/${name}/mainpage`) };
  
  return (
    <section className={`${style.bgCover} vh-100 d-flex flex-column justify-content-around align-items-center text-center`}>
      <div className="text-white" style={{zIndex: 10}}>
          <p className="m-0 dm-sans" style={{letterSpacing: '0.3rem'}}>The Wedding Of</p>
          <p className="my-1 cormorant-upright" style={{letterSpacing: '0.1rem', fontSize: '3rem'}}>Fulan & Fullin</p>
          <p className="mb-0 dm-sans" style={{letterSpacing: '0.3rem'}}>31 Februari 2025</p>
      </div>
      
      <div className={`text-white ${style.width50} text-center `} style={{zIndex: 10}}>
          <p className="mb-0 cormorant-garamond fst-italic">Dear</p>
          <div className={`d-flex justify-content-center align-content-center py-3 rounded-3 my-3 ${ style.glass }`}>
              {decodedName}
          </div>
          <button className={`btn d-flex justify-content-between align-items-center mx-auto gap-2  ${style.buttonColor} text-white px-3`} type="button" onClick={ hideCover }>
            <BsFillDoorOpenFill />
            <p className="m-0">Buka Undangan</p>
          </button>
      </div>
    </section>
  )
}

export default Cover
