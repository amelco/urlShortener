import {React, useState} from 'react'
import axios from 'axios'

function Login(props) {
  const [loginUserName, setLoginUserName] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [error, setError] = useState("")

  const login = () => {
    if (loginUserName !== "" && loginPassword !== "") {
      axios({
        method: "post",
        data: {
          username: loginUserName,
          password: loginPassword
        },
        withCredentials: true,
        url: "http://localhost:5000/login"
      }).then((res) => {
        if (!res.data.error) {
          props.isLoggedIn(true)
          props.getUser()
        }
        else {
          setError(res.data.error)
        }
      })
    }
  }

  const register = () => {
    props.registered(false)
  }

  return (
    <>
    <h2 className="display-6">Login</h2>
    <p>{error ? error : null}</p>
    <div className="my-4">
      <input placeholder="username" onChange={e => setLoginUserName(e.target.value)} className="form-control mr-2" />
      <input placeholder="password" type="password" onChange={e => setLoginPassword(e.target.value)} className="form-control mr-2" />
      <button onClick={login} className="btn btn-primary" >Submit</button>
    </div>
      <p>
        <button onClick={register} className="btn btn-secondary">Registrar-se</button>
      </p>
    </>
  )
}

export default Login