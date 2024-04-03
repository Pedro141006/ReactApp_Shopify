import AddItem from '../AddItem'
import ErrorAuth from './ErrorAuth'

export default function WithAuth() {
  const isAuth = localStorage.getItem('permission')
  if (isAuth === 'accessADM') {
    return <AddItem />
  } else {
    return <ErrorAuth />
  }
}
