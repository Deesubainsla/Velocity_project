import React from 'react'

function ListQuotes({index, name, email, mobile, itemcost, totalcost }) {
  return <>
        <tr>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{mobile}</td>
                <td>{itemcost}</td>
                <td>{totalcost}</td>
                
                
        </tr>
  </>
}

export default ListQuotes