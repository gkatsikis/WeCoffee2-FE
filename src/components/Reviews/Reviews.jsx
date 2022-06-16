import './Reviews.css'

const Reviews = (props) => {
  return ( 
    <>
      <label htmlFor="impressions" className="title">Impressions</label>
      <textarea name="impressions" id="" cols="30" rows="5"></textarea>
      <label htmlFor="rating" className="title">Rating</label>
      <select name="rating" className="rating">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </>
   );
}
 
export default Reviews;