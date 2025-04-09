import React,{useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function AddRFP() {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    const [venderlist, setvenderlist] = useState(null);
    const [categorylist, setcategorylist] = useState(null);

    //for vendor data:
    useEffect(() => {
      (async()=>{
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get('https://rfpdemo.velsof.com/api/vendorlist',{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });

            
            // console.log('Vender list: ',res);
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

    //for category data:
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('https://rfpdemo.velsof.com/api/categories');

                // console.log('res from category: ',res);
                if (res.data.error) {
                    toast.error('Error in Category list fetching');
                }
                else {
                    const newarr = Object.values(res.data.categories);
                    // console.log('newarr: ',newarr);
                    // console.log('Category: ',newarr);
                    setcategorylist(newarr);
                }
            } catch (error) {
                toast.error(error.message);
            }
        })();
    }, [])


    const onregister = async(data)=>{
        try {
            const token = localStorage.getItem('token');
            const obj = {
                        item_name: data.itemname ,
                        rfp_no: data.rfpno,
                        quantity: parseInt(data.quantity),
                        last_date: data.lastdate,
                        minimum_price: parseFloat(data.minprice),
                        maximum_price: parseFloat(data.maxprice),
                        categories: data.category[0],
                        vendors: data.vendor[0],
                        item_description: data.description
            };
            // console.log('Object: ',obj);
            const res = await axios.post('https://rfpdemo.velsof.com/api/createrfp',obj,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })

            console.log(res);
            if(res.data.error){
                toast.error('Error in new RFP');
            }
            else{
                navigate('/admin/rfp');
                toast.success(`New RFP for ${data.category} category has created`);
            }
        } catch (error) {
            toast.error(error.message);
        }
        
        
    }


    return <>
        <div class="page-content">
            <div class="container-fluid">


                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between">
                            <h4 class="mb-0 font-size-18">Add RFP</h4>
                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                    <li class="breadcrumb-item active">RFP List/ Add RFP</li>
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
                                            <h4 class="card-title">Add RFP</h4>
                                        </div>
                                        
                                    </div>
                                </div>

                                <form class="form-horizontal" onSubmit={handleSubmit(onregister)}>
                                            <div class="row">
                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="firstname">Item Name</label>
                                                        <input type="text" {...register('itemname',{required:"Enter Item Name"})} class="form-control" id="firstname" placeholder="Enter Item Name" />
                                                        {errors.itemname && <p className='text-danger'>{errors.itemname.message}</p>}
                                                    </div>
                                                    
                                                </div>
                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="lastname">RFP No.<em>*</em></label>
                                                        <input type="text" {...register('rfpno',{required:"Enter Your RFP No."})} class="form-control" id="lastname" placeholder="Enter RFP No."/>
                                                        {errors.rfpno && <p className='text-danger'>{errors.rfpno.message}</p>}
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="email">Item Description</label>
                                                        <input type="text" {...register('description',{required:"Enter Description"})} class="form-control" id="email" placeholder="Type Description"/>
                                                        {errors.description && <p className='text-danger'>{errors.description.message}</p>}
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="password">Min Price</label>
                                                        <input type="text" {...register('minprice',{required:"Enter Your Min Price"})} class="form-control" id="password" placeholder="Enter Min Price"/>
                                                        {errors.minprice && <p className='text-danger'>{errors.minprice.message}</p>}
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="confirmpassword">Max Price</label>
                                                        <input type="text" {...register('maxprice',{required:"Enter Max Price"})} class="form-control" id="confirmpassword" placeholder="Enter Max Price"/>
                                                        {errors.maxprice && <p className='text-danger'>{errors.maxprice.message}</p>}
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="revenue">Quantity of Item</label>
                                                        <input type="text" {...register('quantity',{required:"Enter Quantity"})} class="form-control" id="revenue" placeholder="Enter Quantity"/>
                                                        {errors.quantity && <p className='text-danger'>{errors.quantity.message}</p>}
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="revenue">Late Date</label>
                                                        <input type="date" {...register('lastdate',{required:"Mention Last Date"})} class="form-control" id="revenue" />
                                                        {errors.lastdate && <p className='text-danger'>{errors.lastdate.message}</p>}
                                                    </div>
                                                </div>
                                                
                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="Categories">Vendor</label>
                                                        <select  multiple {...register('vendor',{required:"Please Select at least One Vendor"})} defaultValue=""   >
                                                            
                                                            {venderlist && venderlist.map((vender)=>(
                                                                <option key={vender.user_id} value={vender.user_id}>{vender.name}</option>
                                                            ))}

                                                            {/* <option value="1">Software</option>
                                                            <option value="2">Hardware</option>
                                                            <option value="3">Office Furniture</option>
                                                            <option value="4">Stationery</option> */}
                                                        </select>
                                                        {errors.vendor && <p className='text-danger'>{errors.vendor.message}</p>}
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="Categories">Categories*</label>
                                                        <select  multiple {...register('category',{required:"Please Select at least One Category"})} defaultValue=""   >
                                                            
                                                            {categorylist && categorylist.map((category)=>(
                                                                <option key={category.id} value={category.id}>{category.name}</option>
                                                            ))}

                                                            {/* <option value="1">Software</option>
                                                            <option value="2">Hardware</option>
                                                            <option value="3">Office Furniture</option>
                                                            <option value="4">Stationery</option> */}
                                                        </select>
                                                        {errors.category && <p className='text-danger'>{errors.category.message}</p>}
                                                    </div>
                                                </div>

                                                <div class="p-2 mt-3">
                                                    <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    </>
}

export default AddRFP