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
import { useRef } from "react"

function App() {
  const constraintDrag = useRef(null);
  return (
    <>
      <WelcomePage />
      <WelcomePageFooter />
      <motion.div ref={ constraintDrag }>
        <motion.div
          drag
          dragConstraints={ constraintDrag }
          dragElastic= {0.5}
          >
          <Music />
        </motion.div>
      </motion.div>
      <Couple />
      <Events />
      <Gallery />
      <Gift />
      <Story />
      <Closing />
    </>
  )
}

export default App
