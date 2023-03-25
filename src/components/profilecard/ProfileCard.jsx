import React from 'react'
import cover from '../../img/cover.jpg';
import profile from '../../img/profileImg.jpg';
import './ProfileCard.css'

const ProfileCard = () => {

    const ProfilePage= true;
    return (
  <div className='profilecard'>
    <div className='profileimages'>
        <img src={cover} alt=""></img>
        <img src={profile} alt=""></img>
    </div>
    <div className='profilename'>
        <span>Sherin</span>
        <span>Senior Ui/Ux Desiner</span>
    </div>
    <div className='followstatus'>
        <hr/>
        <div>
            <div className='follow'>
                <span>3,999</span>
                <span>Followers</span>
            </div>
            <div className='vl'></div>
            <div className='follow'>
                <span>1</span>
                <span>Followings</span>
            </div>
            {ProfilePage &&(
                <>
                    <div className='vl'>

                    </div>
                    <div className='follow'>
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                </>
            )}
        </div>
        <hr/>
    </div>
    {ProfilePage ?'':<span>
        My Profile
    </span>}
    

  </div>
  )
}

export default ProfileCard