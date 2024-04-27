import React,{useState} from 'react'
import logo from '../data/images/logo.png'
import { navlink } from '../data/dummydata'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";


const Header = () => {
    const [responsive, setResponsive] = useState(false)
  return (
    <>
     <header>
     <div className="container flexsb">
        <div className="logo">
         <img src={logo} alt="" />
        </div>
        <div className={responsive ? "hideMenu" : "nav"}>
{navlink.map((links, i)=>(
    <Link to={links.url}>{links.text}</Link>
))}
        </div>
        <button className='toggle' onClick={()=>setResponsive(!responsive)}>
        <CiMenuBurger />

        </button>
      </div>
     </header>
    </>
  )
}

export default Header
