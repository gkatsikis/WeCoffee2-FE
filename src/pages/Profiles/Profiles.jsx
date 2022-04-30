import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const Profiles = ({ user, beans, deleteBean }) => {
  const [profile, setProfile] = useState()

  useEffect(()=> {
    const fetchData = async () => {
      const data = await profileService.getProfile(user.id)
      setProfile(data.profile)
    }
    fetchData()
  }, [user.id])

  return (
    <>
      <h1>Vibecheck {user.name}</h1>
      {profile ?
      <>
      {beans.map((bean) => (
        bean.profile_id === profile.id &&
        <ProfileCard
          bean={bean}
          deleteBean={deleteBean}
          key={bean.id}
          />
      ))}
    </>
    :
      <p>No beans yet</p>
    }
      </>
  )
}


export default Profiles