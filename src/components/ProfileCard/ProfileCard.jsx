import { useNavigate, Link } from "react-router-dom";


const ProfileCard = ({ bean, deleteBean }) => {
  const navigate = useNavigate()

  const handleDelete = async () => {
    deleteBean(bean.id)
    navigate('/profiles')
  }

  return ( 
    <>
    <form action="">
      <h2>Name: {bean.name}</h2>
      <p>{bean.roaster}</p>
      <p>{bean.origin}</p>
      <p>{bean.region}</p>
      <p>{bean.farmer}</p>
      <p>{bean.varietals}</p>
      <p>{bean.tasting}</p>
      <button>edit</button>
      <button
      type="button" 
      onClick={handleDelete}>
      delete
      </button>
    </form>
    </>
   );
}
 
export default ProfileCard;