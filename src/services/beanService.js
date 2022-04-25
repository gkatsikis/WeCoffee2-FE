import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/beans/`

export const create = async (bean) => {
  try {
    const res = await fetch('http://127.0.0.1:5000/api/beans/', {
      method: 'POST',
      headers: {
        // 'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(bean)
    })
    return await res.json
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getAll = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

