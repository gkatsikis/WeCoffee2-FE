import React, { useState } from 'react';

const BeansList = (props) => {
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.addBean(form)
  }

  return ( 
    <>
      <h1>What did you try?</h1>
      <form onSubmit={handleSubmit}>

      </form>
    </>
   );
}
 
export default BeansList;