import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import qr from '../../assets/qr-1.webp';

const Card = ({ isModalShown, toggleModal }) => {
    const [showCopy, setShowCopy] = useState(false)
    const copyId =() => {
        const bankId = '091204789789';
        navigator.clipboard.writeText(bankId);
        setShowCopy((e) => !e)
        setTimeout(() => setShowCopy(false), 2000)
    }

    return (
    <section className={ `${ isModalShown ? 'd-flex' : 'd-none' } cardGift vh-100 w-100 position-fixed top-0 justify-content-center align-items-center`} style={{zIndex: 100, background:"rgb(0,0,0,0.5)"}}>
        <div className="top-50">
            <div className="rounded-5 container" style={{background:"#f1d6ab"}}>
                <div className="d-flex justify-content-end">
                    <button className="bg-transparent border-0 fs-1" type="button" onClick={ toggleModal }><GrFormClose /></button>
                </div>

                <div className="text-center pb-4 position-relative">
                    <img src={ qr } className="position-relative h-50" alt="qr code" />  
                    <div className="my-2 text-black">
                        <p className="fs-3 fw-bold m-0">Anggara</p>
                        <p className='fs-5'>091204789789 / Bank Mandiri</p>
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="fs-4 py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold" style={{ background: "#2b2b2b" }} onClick={copyId}>Copy</button>
                    </div>
                    <p className={`${ showCopy ? "d-block" : "d-none" } fs-2 position-fixed translate-middle-x start-50 rounded-3 text-white p-3`} style={{top: "90%" }}>Copied</p>
                </div>
            </div>
        </div>
    </section> 
    );
}

export default Card
