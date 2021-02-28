import { React, useState } from 'react';
import axios from 'axios'
import Register from './Components/Register';
import Login from './Components/Login';
import UrlShortener from './Components/UrlShortener';
import Header from './Components/Header';

function App() {
  const [userData, setUserData] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [registered, setRegistered] = useState(true)
  
  const getUser = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/user"
    }).then((res) => {
      if (res.data.username !== undefined) {
        setUserData(res.data)
        setLoggedIn(true)
      }
      return res.data
    })
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUserData={setUserData} />
     { !loggedIn && !registered ? <Register isLoggedIn={setLoggedIn} registered={setRegistered}/> : null } 
     { !loggedIn && registered? <Login isLoggedIn={setLoggedIn} registered={setRegistered} getUser={getUser} /> : null } 
     { loggedIn ? <UrlShortener user={userData} /> : null } 
    </div>
  );
}

export default App;
