import { getOne } from '../../services/beanService'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const BeansDetails = (props) => {
  const { id } = useParams()
  const [bean, setBean] = useState()

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setBean(data.bean)
    }
    fetchOne()
  }, [id])

  if (!bean) return <h1>Loading...</h1>

  return ( 
    <>
      <h1>specific yo</h1>
    </>
   );
}
 
export default BeansDetails;