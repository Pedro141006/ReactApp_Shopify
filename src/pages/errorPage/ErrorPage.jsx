import { Link, useRouteError } from 'react-router-dom'
import './errorPage.css'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  return (
    <div className="section">
      <h1 className="errorTitle">{error.status}</h1>
      <h2>
        Page: {error.statusText}
        <i className="fa-solid fa-magnifying-glass"></i>
        <br />
        Return to:{' '}
        <Link to={'/home'} className="backHome">
          Home
        </Link>
      </h2>
    </div>
  )
}
