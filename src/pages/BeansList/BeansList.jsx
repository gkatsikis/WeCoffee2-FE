import BeansCard from "../../components/BeansCard/BeansCard";

const BeansList = ({ beans }) => {

  
  if (!beans) return <h1> Loading </h1>

  return ( 
    <>
      <h1 className="beans-header">All da Beans</h1>
      <BeansCard beans={beans} />
    </>
   );
}
 
export default BeansList;