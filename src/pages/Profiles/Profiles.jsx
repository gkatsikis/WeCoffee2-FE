import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = ({ user, beans }) => {
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
      <h1>{user.name}'s Contributions</h1>
      {beans.length ? 
        <>
          
        </>
      :
        <p>No beans yet</p>
      }
    </>
  )
}
 
export default Profiles