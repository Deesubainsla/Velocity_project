import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import toast from 'react-hot-toast';


function Registervender() {

    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onregister = async(data)=>{
        const employeeno = parseInt(data.employeecount);
        const normaldata = {
                    'firstname': data.firstname,
                    'lastname': data.lastname,
                    'email': data.email,
                    'password': data.password,
                    'revenue': data.revenue,
                    'no_of_employes': employeeno,
                    'category': data.category,
                    'pancard_no': data.panno,
                    'gst_no': data.gstno,
                    'mobile': data.phnno
                }
        // console.log('data: ',newdata);
        
        const newdata = new FormData();
        newdata.append('firstname', data.firstname);
        newdata.append('lastname',data.lastname);
        newdata.append('email',data.email);
        newdata.append('password',data.password);
        newdata.append('revenue', data.revenue);
        newdata.append('no_of_employes', employeeno);
        newdata.append('category', data.category);
        newdata.append('pancard_no', data.panno);
        newdata.append('gst_no', data.gstno);
        newdata.append('mobile', data.phnno);

        console.log('newdata: ',normaldata);
        if(data.password != data.cnfrmpassword){
            toast.error("Password and Confirm Password Mismatched")
        }
        else{

            try {
                const res = await axios.post('https://rfpdemo.velsof.com/api/registervendor',newdata,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                });
    
                console.log('res: ',res);
    
                if(res.data.error){
                    res.data.error.forEach((err)=>{
                        toast.error(err);
                    })
                }
                else{
                    navigate('/');
                    toast.success(`${res.data.firstname} has Registered Successfully`);
                }
            } catch (error) {
                console.log(error.message);
            }

        }
        
    }

    return <>
            <div class="home-btn d-none d-sm-block">
                <a href="index.html" class="text-dark"><i class="fas fa-home h2"></i></a>
            </div>
            <div class="account-pages my-5 pt-sm-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-8">
                            <div class="card overflow-hidden">
                                <div class="bg-soft-primary">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="text-primary p-4">
                                                <h5 class="text-primary">Welcome to RFP System!</h5>
                                                <p>Regsiter as Vendor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body pt-0">
                                    <div class="p-4">
                                        <form class="form-horizontal" onSubmit={handleSubmit(onregister)}>
                                            <div class="row">
                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="firstname">First name*</label>
                                                        <input type="text" {...register('firstname',{required:"Enter Your First Name"})} class="form-control" id="firstname" placeholder="Enter Firstname" />
                                                        {errors.firstname && <p className='text-danger'>{errors.firstname.message}</p>}
                                                    </div>
                                                    
                                                </div>
                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="lastname">Last Name<em>*</em></label>
                                                        <input type="text" {...register('lastname',{required:"Enter Your Last Name"})} class="form-control" id="lastname" placeholder="Enter Lastname"/>
                                                        {errors.lastname && <p className='text-danger'>{errors.lastname.message}</p>}
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="email">Email*</label>
                                                        <input type="text" {...register('email',{required:"Enter Your Email"})} class="form-control" id="email" placeholder="Enter Email"/>
                                                        {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="password">Password*</label>
                                                        <input type="password" {...register('password',{required:"Enter Your Password"})} class="form-control" id="password" placeholder="Enter Password"/>
                                                        {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="password">Confirm Password*</label>
                                                        <input type="password" {...register('cnfrmpassword',{required:"Enter Confirm Password"})} class="form-control" id="confirmpassword" placeholder="Enter Confirm Password"/>
                                                        {errors.cnfrmpassword && <p className='text-danger'>{errors.cnfrmpassword.message}</p>}
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="revenue">Revenue (Last 3 Years in Lacks)*</label>
                                                        <input type="text" {...register('revenue',{required:"Enter Your Revenue"})} class="form-control" id="revenue" placeholder="Enter Revenue"/>
                                                        {errors.revenue && <p className='text-danger'>{errors.revenue.message}</p>}
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="noofemployees">No of Employees*</label>
                                                        <input type="text" {...register('employeecount',{required:"Enter Your Employee Count"})} class="form-control" id="noofemployees" placeholder="No of Employees"/>
                                                        {errors.employeecount && <p className='text-danger'>{errors.employeecount.message}</p>}
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="gstno">GST No*</label>
                                                        <input type="text" {...register('gstno',{required:"Enter Your GST No."})} class="form-control" id="gstno" placeholder="Enter GST No"/>
                                                        {errors.gstno && <p className='text-danger'>{errors.gstno.message}</p>}
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="panno">PAN No*</label>
                                                        <input type="text" {...register('panno',{required:"Enter Your PAN Card No."})} class="form-control" id="panno" placeholder="Enter PAN No"/>
                                                        {errors.panno && <p className='text-danger'>{errors.panno.message}</p>}
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="revenue">Phone No*</label>
                                                        <input type="text" {...register('phnno',{required:"Enter Your Phone Number"})} class="form-control" id="revenue" placeholder="Enter Phone No"/>
                                                        {errors.phnno && <p className='text-danger'>{errors.phnno.message}</p>}
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-lg-6 col-xl-6">
                                                    <div class="form-group">
                                                        <label for="Categories">Categories*</label>
                                                        <select  multiple {...register('category',{required:"Please Select at least One Category"})} defaultValue=""   >
                                                            
                                                            <option value="1">Software</option>
                                                            <option value="2">Hardware</option>
                                                            <option value="3">Office Furniture</option>
                                                            <option value="4">Stationery</option>
                                                        </select>
                                                        {errors.category && <p className='text-danger'>{errors.category.message}</p>}
                                                    </div>
                                                </div>

                                                <div class="p-2 mt-3">
                                                    <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Register</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                                <div>
                                    <p>&copy; Copyright <i class="mdi mdi-heart text-danger"></i> RFP System</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
}

export default Registervender