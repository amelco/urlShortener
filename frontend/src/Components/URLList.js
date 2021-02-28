import { React } from 'react';

function URLList(props) {

  const formatDate = (_date) => {
    const timestamp = Date.parse(_date)
    const dateObj = new Date(timestamp)
    return dateObj.toUTCString();
  }

  return (
    <div>
      <h2 className="display-6">Lista de URLs encurtadas</h2>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th>data</th>
            <th>URL Completa</th>
            <th>URL Encurtada</th>
          </tr>
        </thead>
        <tbody>
        {props.urlList.map((item) => {
          return (
          <tr key={item._id}>
            <td>{formatDate(item.date)}</td>
            <td><a rel={"external"} href="item.full">{item.full}</a></td>
            <td><a href={"http://localhost:5000/" + item.short}>{item.short}</a></td>
          </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default URLList