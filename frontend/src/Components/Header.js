import { React } from 'react'
import BtnLogout from './BtnLogout'

function Header(props) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1 className="display-4">Encurtador de URL</h1>
      {props.loggedIn ? <BtnLogout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} setUserData={props.setUserData} /> : null}
    </div>
  )
}

export default Header

