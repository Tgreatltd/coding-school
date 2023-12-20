import React from 'react'
import Navbar from './Navbar'
import './Coding.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart, faMugHot } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  return (
    <div>
      <Navbar/>
    <div> WELCOME TO OUR CODING SCHOOL</div>
    <button className='btn btn-success'>login</button>
    <FontAwesomeIcon icon={faEnvelope} />
    <FontAwesomeIcon icon={faHeart} />
    <FontAwesomeIcon icon={faMugHot} />

    </div>
  )
}

export default Home