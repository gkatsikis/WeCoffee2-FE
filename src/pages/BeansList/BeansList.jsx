import React, { useState, useEffect } from 'react';
import * as beanService from '../../services/beanService'

const BeansList = (props) => {
  const [beans, setBeans] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await beanService.getAll()
      setBeans(data)
    }
    fetchData()
  }, [])

  return ( 
    <>
      <h1>All da Beans</h1>
    </>
   );
}
 
export default BeansList;