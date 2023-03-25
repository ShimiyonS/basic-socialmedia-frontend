import React from 'react'
import ProfileCard from '../../components/profilecard/ProfileCard'
import './Profile.css'
import ProfileLeft from './../../components/ProfileLeft/ProfileLeft';
import RightSide from '../../components/RightSide/RightSide';
import Postside from '../../components/PostSide/Postside';
const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard/>
            <Postside/>
        </div>
        <RightSide/>
    </div>
  )
}
export default Profile