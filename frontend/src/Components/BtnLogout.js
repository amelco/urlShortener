import { React } from 'react'


function BtnLogout(props) {
const logout = () => {
  props.setLoggedIn(false)
  props.setUserData("")
}
  return (
    <button onClick={logout} className="btn btn-danger">Logout</button> 
  )
}

export default BtnLogout
