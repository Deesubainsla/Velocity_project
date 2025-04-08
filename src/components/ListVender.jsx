import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

function ListVender({index, name, email, mobile, status, id}) {

    const action = async(act)=>{
        try {
            
            const token = localStorage.getItem('token');
            const res = await axios.put('https://rfpdemo.velsof.com/api/rfp/approveVendor',{
                USER_ID: id,
                Status: act,
            },{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })

            console.log(res);
            if(res.data.response == 'error'){
                toast.error('Error in changing status');
            }
            else{
                toast.success(`${name} status has changed`);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return <>
       
            <tr>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{mobile}</td>
                <td><span class="badge badge-pill badge-success">{status}</span></td>
                <td>
                    {status!="Pending"? <button onClick={()=>{action('Approved')}} className='text-danger rounded'>Reject</button>: <button onClick={()=>{action('Pending')}} className=' rounded'>approve</button>}
                </td>
            </tr>
        
    </>
}

export default ListVender