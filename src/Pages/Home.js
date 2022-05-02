import React from 'react'
import '../css/home.css'
import * as FontAwesomeIcon from "react-icons/"
import * as FaIcons from "react-icons/fa"

import { Link } from 'react-router-dom'

function Home() {
  
 
  
  
  
  return (
    <div className= 'home'>
      
    <div className='title'><h1>Blind's 75<br></br> Leetcode Questions</h1></div>
    <div className='right-arrow'> 
      <div className='icon'><FaIcons.FaArrowRight onClick={<Link to={'./Array.js'}></Link>}/></div>
    </div>
      
       
    </div>
  )
}

export default Home