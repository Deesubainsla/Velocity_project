import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import ListQuotes from './ListQuotes';

function Getquotesadmin() {

    const {rfpid} = useParams();
    const [quotelist, setquotelist] = useState(null);

    useEffect(() => {
      (async()=>{
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`https://rfpdemo.velsof.com/api/rfp/quotes/${rfpid}`,{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                })

                if(res.data.error){
                    toast.error(res.data.error);
                }
                else{
                    setquotelist(res.data.quotes);
                }
                // console.log("quotes: ", res);
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
                            <h4 class="mb-0 font-size-18">Quotes for RFP_id:{rfpid}</h4>
                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                    <li class="breadcrumb-item active">RFP Quotes/openQuotes</li>
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
                                            <h4 class="card-title">Vender Details</h4>
                                        </div>

                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table mb-0 listingData dt-responsive" id="datatable">
                                        <thead>
                                            <tr>
                                                <th>Seq No.</th>
                                                <th>Name</th>
                                                <th>email</th>
                                                <th>Mobile</th>
                                                <th>Item_Price</th>
                                                <th>Total_Cost</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {quotelist && quotelist.map((quote, index) => (
                                                <ListQuotes key={index} index={index+1} name={quote.name} email={quote.email} mobile={quote.mobile} itemcost={quote.item_price} totalcost={quote.total_cost} />
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

export default Getquotesadmin