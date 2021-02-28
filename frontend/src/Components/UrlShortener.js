import { React, useState, useEffect } from 'react';
import axios from 'axios'
import URLList from './URLList';
import isUrl from '../utils/isUrl';

function UrlShortener(props) {
  const username = props.user.username
  const [fullURL, setFullURL] = useState("")
  const [shortURL, setShortURL] = useState("")
  const [urlList, setUrlList] = useState([])
  const [message, setMessage] = useState("")

  function toShort(){
    console.log(props.user)
    if(fullURL) {
      if (!isUrl(fullURL)) {
        setMessage("URL inválida.")
        return
      }
      axios({
        method: "post",
        data: {
          full: fullURL
        },
        withCredentials: true,
        url: "http://localhost:5000/shortUrls"
      }).then((res) => {
        setShortURL(res.data.short)
      })
    }
  }


  const getUrlList = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/getList"
    }).then((res) => {
      setUrlList(res.data)
    })
  }

  useEffect(() => {
    getUrlList()
  }, [])

  useEffect(() => {
    getUrlList()
  }, [shortURL])

  return (
    <div>
      <h2 className="display-6">Olá, {username}.</h2>
      <p>
        Digite a URL que deseja encurtar
      </p>
      <p>{message ? message : null}</p>
      <div className="my-4 form-inline">
      <input placeholder="fullURL" onChange={e => {setFullURL(e.target.value); setMessage("")}} className="form-control mr-2" />
      <button onClick={toShort} className="btn btn-success">Submit</button>
      </div>
      {shortURL ? <p>A URL encurtada é: <a rel={"external"} href={`http://localhost:5000/${shortURL}`}>{shortURL}</a></p> : null}
      <URLList urlList={urlList} />
    </div>
  )
}

export default UrlShortener
