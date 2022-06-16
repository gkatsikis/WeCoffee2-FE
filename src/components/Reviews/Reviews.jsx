import './Reviews.css'

const Reviews = (props) => {
  return ( 
    <div className="review">
      <div className="impressions">
        <label htmlFor="impressions" className="title">Impressions</label>
        <textarea name="impressions" cols="30" rows="5"></textarea>
      </div>
      <div className="rating">
        <label htmlFor="rating" className="title">Rating</label>
        <select name="rating">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
   );
}
 
export default Reviews;