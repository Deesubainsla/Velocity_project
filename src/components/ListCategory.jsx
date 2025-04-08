import React from 'react'

function ListCategory({index, name, status, id}) {
  return <>
        <tr>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{status}</td>
                <td><button className='rounded'>
                        {status=='Active'? 'Deactivate': 'Activate'}
                    </button></td>
                
                {/* <td>
                    <a href="editvendor.html" class="text-primary mr-2" title="Edit"><i class="mdi mdi-pencil"></i></a>
                    <a href="#" class="text-danger"><i class="mdi mdi-circle-off-outline"></i></a>
                </td> */}
        </tr>
  </>
}

export default ListCategory