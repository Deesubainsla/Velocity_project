import React,{useState, useEffect} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import Listrfp from './Listrfp';
import { Link } from 'react-router-dom';

function RFPadmin() {

    const [rfplist, setrfplist] = useState(null);

    useEffect(() => {
      (async()=>{
            try {
                const userid = localStorage.getItem('userid');
                const token = localStorage.getItem('token');
                const res = await axios.get(`https://rfpdemo.velsof.com/api/rfp/getrfp/${userid}`,{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                });

                setrfplist(res.data.rfps);

                // console.log('rfp list: ',res);
            } catch (error) {
                toast.error(error.message);
            }
      })();
    }, [])
    

    return <>
            <div class="page-content">
                <div class="container-fluid">

                    
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0 font-size-18">RFP List</h4>
                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                        <li class="breadcrumb-item active">RFP List</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                   


                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">

                                    <div class="TableHeader">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <h4 class="card-title">RFP</h4>
                                            </div>
                                            <div class="col-lg-9 text-right">
                                                <div class="headerButtons">
                                                    <Link className='text-success' to="/admin/rfp/addrfp" >+Add rfp</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table mb-0 listingData dt-responsive" id="datatable">
                                            <thead>
                                                <tr>
                                                    <th>RFP No.</th>
                                                    <th>RFP Title</th>
                                                    <th>RFP Last Date</th>
                                                    <th>Min Amount</th>
                                                    <th>Max Amount</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                                {rfplist && rfplist.map((rfp)=>(
                                                    <Listrfp key={rfp.id} id={rfp.id} rfpno={rfp.rfp_no} tittle={rfp.item_name} lastdate={rfp.last_date} min={rfp.minimum_price} max={rfp.maximum_price} status={rfp.rfp_status} />
                                                ))}

                                                
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="row pt-3">
                                        <div class="col-sm-12 col-md-5">
                                            <div class="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 5 of 5 entries</div>
                                        </div>
                                        <div class="col-sm-12 col-md-7 dataTables_wrapper ">
                                            <div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                                                <ul class="pagination">
                                                    <li class="paginate_button page-item previous disabled" id="datatable_previous">
                                                        <a href="#" aria-controls="datatable" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                                                    </li>
                                                    <li class="paginate_button page-item active"><a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                                    <li class="paginate_button page-item next disabled" id="datatable_next"><a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0" class="page-link">Next</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                    

                </div>
            </div>
           

    </>
}

export default RFPadmin