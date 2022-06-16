import './Reviews.css'
import React, { useState } from 'react';


const Reviews = (props) => {
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return ( 
    <>
      <div className="review">
        <form>
          <div className="impressions">
            <label htmlFor="impressions" className="title">Impressions</label>
            <textarea
            onChange={handleChange} name="impressions" cols="30" rows="5"></textarea>
          </div>
          <div className="rating">
            <label htmlFor="rating" className="title">Rating</label>
            <select name="rating" onChange={handleChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </>
   );
}
 
export default Reviews;