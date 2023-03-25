import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from './../InfoCard/InfoCard';
import FollowersCard from './../FollowerCard/FollowersCard';
const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
       <LogoSearch/>
       <InfoCard/>
       <FollowersCard/>
   </div>
  )
}
export default ProfileLeft