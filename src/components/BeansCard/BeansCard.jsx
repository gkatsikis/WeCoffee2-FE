
const BeansCard = ({ beans }) => {
  return ( 
    <>
      <h2>ALL OF THEM</h2>
      {beans.map(bean => {
        <>
        <h3>{bean.name}</h3>
        <p>{bean.roaster}</p>
        <p>{bean.origin}</p>
        <p>{bean.region}</p>
        <p>{bean.farmer}</p>
        <p>{bean.varietals}</p>
        <p>{bean.tasting}</p>
        </>
      })}
    </>
   );
}
 
export default BeansCard;