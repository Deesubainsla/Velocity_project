import React from 'react'
import { Link } from 'react-router-dom'

function Listrfp({ id, rfpno,rfpid, lastdate, tittle, min, max, status, inquotes=false }) {
    return <>
        <tr>
            <th scope="row">{rfpno}</th>
            <td>{tittle}</td>
            <td>{lastdate}</td>
            <td>{min}</td>
            <td>{max}</td>
            <td><span class="badge badge-pill badge-success">{status}</span></td>
            <td>
                { inquotes? <Link to={`/admin/rfpqotes/quotes/${rfpid}`} className='text-success'>Quotes</Link> : (status=='closed'? <button className='rounded'>Open</button> : <button className='rounded text-danger'>Close</button>) }
                
            </td>
        </tr>
    </>
}

export default Listrfp