import React from 'react'
import FollowersCard from '../FollowerCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../profilecard/ProfileCard'
import './Profileside.css'
const Profileside = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCard/>
      <FollowersCard/>
      
    </div>
  )
}

export default Profileside