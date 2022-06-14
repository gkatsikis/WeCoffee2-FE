import { Link } from "react-router-dom";
import './BeansCard.css'

const BeansCard = ({ beans }) => {
  console.log('BEANNNSSS', beans)
  return ( 
    <div className="beans-list">
      {beans.map(bean => {
        return <>
        <Link to={`/beans/${bean.id}`} className="blog-card"
        key={bean.id}>
            <div className="description">
            <h3>{bean.name}</h3>
            <p>{bean.roaster}</p>
            <p>{bean.origin}</p>
            <p>{bean.region}</p>
            <p>Producer: {bean.farmer}</p>
            <p>Varietal(s): {bean.varietals}</p>
            <p>Tasting notes: {bean.tasting}</p>
            </div>
        </Link>
        </>
      })}
    </div>
   );
}

export default BeansCard;