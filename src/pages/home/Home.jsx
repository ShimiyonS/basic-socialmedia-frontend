import React from 'react'
import Postside from '../../components/PostSide/Postside'
import Profileside from '../../components/profileSIde/Profileside'
import RightSide from '../../components/RightSide/RightSide'
import './home.css'
const Home = () => {
  return (
    <div className='Home'>
        <Profileside/>
        <Postside/>
        <RightSide/>
    </div>
  )
}

export default Home