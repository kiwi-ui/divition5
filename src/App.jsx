import { BsFillGiftFill } from "react-icons/bs"
import Card from "./components/Card"
import Music from "./components/Music"
import WelcomePageFooter from "./components/WelcomePageFooter"
import Closing from "./pages/Closing"
import Couple from "./pages/Couple"
import Events from "./pages/Events"
import Gallery from "./pages/Gallery"
import Gift from "./pages/Gift"
import Story from "./pages/Story"
import WelcomePage from "./pages/WelcomePage"
import { motion } from "motion/react"
import { useRef, useState } from "react"

function App() {
  const constraintDrag = useRef(null);
  const [isModalShown, setIsModalShown] = useState(false);
  const toggleModal = () => {
      setIsModalShown((e) => !e)
  }

  const [isPhotoClicked, setisPhotoClicked] = useState()
  const [clickedPhoto, setClickedPhoto] = useState('')

  return (
    <body className={` ${ isPhotoClicked ? 'overflow-y-hidden' : 'overflow-y-scroll'  } `}>
      <WelcomePage />
      <WelcomePageFooter />
      <Music />
      <Card isModalShown={ isModalShown } toggleModal={ toggleModal }  />
      <Couple />
      <Events />
      <Gallery clickedPhoto={ clickedPhoto } setClickedPhoto={ setClickedPhoto } isPhotoClicked={ isPhotoClicked } setisPhotoClicked={ setisPhotoClicked }/>
      <Gift />
      <Story />
      <Closing />

      <div className="position-fixed text-center text-white end-0 me-3 mb-3 bottom-0">
        <button className="d-flex align-items-center justify-items-center m-0 my-3 mx-1 position-relative bg-transparent rounded-circle border-0" style={{ color: '#A78556'}} onClick={ toggleModal }>
            <BsFillGiftFill className="text-color-primary fs-1"/>
        </button>
      </div>
    </body  >
  )
}

export default App
