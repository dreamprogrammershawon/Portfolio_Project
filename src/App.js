
import Pages from './components/pages/Pages'
import "./App.css"
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"



const App = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div>
      <Pages/>
    </div>
  )
}

export default App
