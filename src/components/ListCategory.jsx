import React from 'react'

function ListCategory({index, name, status, id}) {
  return <>
        <tr>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{status}</td>
                <td><button className='text-danger rounded'>
                        {status=='Active'? 'Deactivate': 'Activate'}
                    </button></td>
                
        </tr>
  </>
}

export default ListCategory