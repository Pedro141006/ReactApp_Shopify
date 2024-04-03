import { Link } from 'react-router-dom'
import '../styles/chouse.css'

export default function Chouse() {
  function permissionUser() {
    localStorage.setItem('permission', 'accessUser')
    localStorage.setItem(
      'imgUser',
      'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
    )
  }

  function permissionADM() {
    localStorage.setItem('permission', 'accessADM')
    localStorage.setItem(
      'imgUser',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uXhen7w1tKNLJFgEnT-eljsUgRqu2OvvkHLy4pzkTQ&s'
    )
  }

  return (
    <>
      <div className="container-0">
        <Link to={'/home'} className="userPermission" onClick={permissionADM}>
          <div className="chouseCard">
            <i className="fa-solid fa-user-gear"></i>
            <h2>Admin</h2>
          </div>
        </Link>

        <Link to={'/home'} className="userPermission" onClick={permissionUser}>
          <div className="chouseCard">
            <i className="fa-solid fa-user"></i>
            <h2>User</h2>
          </div>
        </Link>
      </div>
    </>
  )
}
