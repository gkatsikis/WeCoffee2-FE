import { getOne } from '../../services/beanService'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from '../../components/Reviews/Reviews';

const BeansDetails = (props) => {
  const { id } = useParams()
  const [bean, setBean] = useState()

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setBean(data.bean)
      console.log('data.bean', data.bean)
    }
    fetchOne()
  }, [id])

  if (!bean) return <h1>Loading...</h1>

  return ( 
    <>
      <h1>specific yo</h1>
        <p>{bean.name}</p>
        <p>{bean.roaster}</p>
        <p>{bean.origin}</p>
        <p>{bean.region}</p>
        <p>Producer: {bean.farmer}</p>
        <p>Varietal(s): {bean.varietals}</p>
        <p>Tasting notes: {bean.tasting}</p>
        <Reviews />
    </>
   );
}
 
export default BeansDetails;