import React,{useState, useEffect} from 'react'
import ListVender from './ListVender'
import axios from 'axios';
import toast from 'react-hot-toast';

function Venderadmin() {

    const [venderlist, setvenderlist] = useState(null);

    useEffect(() => {
      (async()=>{
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get('https://rfpdemo.velsof.com/api/vendorlist',{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });

            // console.log('Vendor list: ',res);

            if(res.data.errors){
                toast.error("Error in Vendor list fetching");
            }
            else{
                // console.log('res for vendors: ',res);
                // toast.success('Vender data fetched successfully');
                setvenderlist(res.data.vendors);
            }
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
                                <h4 class="mb-0 font-size-18">Vendors List</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                        <li class="breadcrumb-item active">Vendors</li>
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
                                                <h4 class="card-title">Vendors</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table mb-0 listingData dt-responsive" id="datatable">
                                            <thead>
                                                <tr>
                                                    <th>S. No.</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Contact No</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {venderlist && venderlist.map((vender,index)=>(
                                                    <ListVender index={index+1} name={vender.name} email={vender.email} mobile={vender.mobile} status={vender.status} id={vender.user_id}/>
                                                )) }
                                                
                                                

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

export default Venderadmin