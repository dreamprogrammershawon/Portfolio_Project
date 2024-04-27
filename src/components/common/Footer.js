import React from 'react'
import { social } from '../data/dummydata'
const Footer = () => {
  return (
    <>
     <footer>
        {social.map((item)=>(
            <>
            <i>{item.icon}</i>
            </>
        ))}
        <p>All Right Resceved 2024</p>
        </footer> 
    </>
  )
}

export default Footer
