import { Link } from 'react-router-dom'
import PermissionAccess from '../../js/PermissionAccess'
import './header.css'

export default function Header() {
  let permission = localStorage.getItem('permission')
  let userImage = localStorage.getItem('imgUser')

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand title">Shopify</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={'/home'}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/home/cart'}>
                  Cart
                </Link>
              </li>
              <PermissionAccess permissions={[permission]}>
                <li className="nav-item">
                  <Link className="nav-link" to={'/home/additem'}>
                    Add Item
                  </Link>
                </li>
              </PermissionAccess>
            </ul>
            <div className="d-flex userBox">
              <Link className="nav-link" to={'/'}>
                log-out
              </Link>

              <img className="imageUser" src={userImage} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
