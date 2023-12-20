import React from 'react'
import Navbar from './Navbar'
import './Coding.css'
import Fontawesome from './Fontawesome'


const Home = () => {

  return (
    <div>
      <Navbar/>
      {/* <Fontawesome/> */}
    <div> WELCOME TO OUR CODING SCHOOL</div>
    <button className='btn btn-success'>login</button>
    
    </div>
  )
}

export default Home