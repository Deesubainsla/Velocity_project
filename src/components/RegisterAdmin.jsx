import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function RegisterAdmin() {
 const {register, handleSubmit, formState:{errors}} = useForm();
 const navigate = useNavigate();
 const onregisteradmin = async(data)=>{
    if(data.password != data.cnfrmpassword){
        toast.error('Password and Confirm Password Mismatched');
    }
    else{
        try {
            const res = await axios.post('https://rfpdemo.velsof.com/api/registeradmin',{
                firstname: data.firstname,
                lastname : data.lastname,
                email: data.email,
                mobile: data.phnno,
                password : data.password
            })

            console.log(res);
            navigate('/');
            toast.success("Admin Registered");
        } catch (error) {
            toast.error(error.message);
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
                                                <p>Regsiter as Admin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body pt-0">
                                    <div class="p-4">
                                        <form class="form-horizontal" onSubmit={handleSubmit(onregisteradmin)}>
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
                                                        <label for="revenue">Phone No*</label>
                                                        <input type="text" {...register('phnno',{required:"Enter Your Phone Number"})} class="form-control" id="revenue" placeholder="Enter Phone No"/>
                                                        {errors.phnno && <p className='text-danger'>{errors.phnno.message}</p>}
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

export default RegisterAdmin