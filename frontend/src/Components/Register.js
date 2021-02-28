import {React, useState} from 'react'
import axios from 'axios'

function Register(props) {
  const [registerUserName, setRegisterUserName] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [error, setError] = useState("")

  const register = () => {
    axios({
      method: "post",
      data: {
        username: registerUserName,
        password: registerPassword
      },
      withCredentials: true,
      url: "http://localhost:5000/register"
    }).then((res) => {
      console.log(res)
      if (!res.data.error) {
        props.registered(true)
        props.isLoggedIn(false)
      }
      else {
        setError(res.data.error)
      }
    })
  }

  return (
    <div className="my-4">
        <h2 className="display-6">Register</h2>
        <p>{error ? error : null}</p>
        <input placeholder="username" onChange={e => setRegisterUserName(e.target.value)} className="form-control mr-2" />
        <input placeholder="password" type="password" onChange={e => setRegisterPassword(e.target.value)} className="form-control mr-2" />
        <button onClick={register} className="btn btn-primary">Submit</button>
      </div>
  )
}

export default Register