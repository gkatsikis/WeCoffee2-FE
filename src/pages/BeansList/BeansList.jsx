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
        <label htmlFor="name">Name</label>
        <input type="text"
        required
        name="name"
        className="bean-input"
        placeholder=" e.g. La Fortuna"
        />
        <label htmlFor="roaster">Roaster</label>
        <input type="text"
        required
        name="roaster"
        className="bean-input"
        placeholder=" e.g. Sey Coffee"
        />
        <label htmlFor="origin">Origin</label>
        <input type="text"
        required
        name="origin"
        className="bean-input"
        placeholder=" e.g. Colombia"
         />
         <label htmlFor="region">Region</label>
         <input type="text"
         name="region"
         placeholder=" e.g. Huila"
          />
          <label htmlFor="producer">Producer</label>
          <input type="text"
          name="producer"
          placeholder=" e.g. Oscar and Diego Hoyos" 
          />
          <label htmlFor="varietals">Varietal(s)</label>
          <input type="text"
          name="varietals"
          placeholder=" e.g. Pink Bourbon"
           />
           <label htmlFor="tasting">Tasting Notes</label>
           <input type="text"
           required
           name="tasting"
           placeholder=" e.g. sweet cherry, tangerine, jasmine" 
           />
      </form>
    </>
   );
}
 
export default BeansList;