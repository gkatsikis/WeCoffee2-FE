import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/beans/`

export const create = async (bean) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(bean)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteOne = async (id) => {
  try {
    const res = await fetch (`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return await res.json()
  } catch (error) {
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

export const getOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const update = async (bean) => {
  try {
    const res = await fetch(`${BASE_URL}${bean.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(bean)
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const createReview = async (id, review) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/review`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(review)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}