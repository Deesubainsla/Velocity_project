import React from 'react'

function ListVender({index, firstname, lastname, email, mobile, status, id}) {
    return <>
       
            <tr>
                <th scope="row">{index}</th>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{mobile}</td>
                <td><span class="badge badge-pill badge-success">{status}</span></td>
                <td>
                    <a href="editvendor.html" class="text-primary mr-2" title="Edit"><i class="mdi mdi-pencil"></i></a>
                    <a href="#" class="text-danger"><i class="mdi mdi-circle-off-outline"></i></a>
                </td>
            </tr>
        
    </>
}

export default ListVender