import { Link } from "react-router-dom";


const BeansCard = ({ beans }) => {
  console.log(beans)

  return ( 
    <>
      <h2>ALL OF THEM</h2>
      {beans.map(bean => {
        return <>
        <Link to={`/beans/${beans.id}`} className="card">
          <div>
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
    </>
   );
}

export default BeansCard;