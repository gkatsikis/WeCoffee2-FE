import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
            <li>
              <Link to="" onClick={handleLogout}>Logout</Link>
            </li>
            <li>
              <Link to="/">Add Beans</Link>
            </li>
            <li>
              <Link to="/beans">All Beans</Link>
            </li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
