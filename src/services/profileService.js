import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/profiles/`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function getProfile(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`)
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { getAllProfiles, getProfile }
