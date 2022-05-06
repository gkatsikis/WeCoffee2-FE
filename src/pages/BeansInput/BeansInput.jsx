import React, { useState } from 'react';

const BeansInput = (props) => {
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.addBean(form)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return ( 
    <>
      <div className="frame-beans">
      <h1>What did you try?</h1>
      <form 
      onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text"
        required
        name="name"
        className="bean-input"
        placeholder=" e.g. La Fortuna"
        onChange={handleChange}
        />
        <label htmlFor="roaster">Roaster</label>
        <input type="text"
        required
        name="roaster"
        className="bean-input"
        placeholder=" e.g. Sey Coffee"
        onChange={handleChange}
        />
        <label htmlFor="origin">Origin</label>
        <input type="text"
        required
        name="origin"
        className="bean-input"
        placeholder=" e.g. Colombia"
        onChange={handleChange}
         />
         <label htmlFor="region">Region</label>
         <input type="text"
         name="region"
         placeholder=" e.g. Huila"
         className="bean-input"
          />
          <label htmlFor="farmer">Producer</label>
          <input type="text"
          name="farmer"
          placeholder=" e.g. Oscar and Diego Hoyos"
          onChange={handleChange} 
          className="bean-input"
          />
          <label htmlFor="varietals">Varietal(s)</label>
          <input type="text"
          name="varietals"
          placeholder=" e.g. Pink Bourbon"
          onChange={handleChange}
          className="bean-input"
           />
           <label htmlFor="tasting">Tasting Notes</label>
           <input type="text"
           required
           name="tasting"
           placeholder=" e.g. sweet cherry, tangerine, jasmine"
           onChange={handleChange} 
           className="bean-input"
           />
           <button type="submit" className="btn btn-primary">Save Coffee</button>
      </form>
      </div>
    </>
   );
}
 
export default BeansInput;