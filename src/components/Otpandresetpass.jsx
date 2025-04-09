import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'

function Otpandresetpass() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    const resetpassword = async(data)=>{
        try {

            if(data.password != data.cnfrmpassword){
                toast.error("Password and Confrm Password Mismatched");
            }
            else{
                const res = await axios.post('https://rfpdemo.velsof.com/api/confirmotpresetPassword',{
                    email:data.email,
                    otp:parseInt(data.otp),
                    new_password: data.password
                })

                if(res.data.error){
                    toast.error('Error in Changing password');
                }
                else{
                    navigate('/');
                    toast.success("Password has changed successfully");
                }
            }
            
        } catch (error) {
            toast.error(error.message);
        }
    }

    return <>
        <div>
            <div class="home-btn d-none d-sm-block">
                <a href="index.html" class="text-dark"><i class="fas fa-home h2"></i></a>
            </div>
            <div class="account-pages my-5 pt-sm-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-5">
                            <div class="card overflow-hidden">
                                <div class="bg-soft-primary">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="text-primary p-4">
                                                <h5 class="text-primary">Welcome to RFP System!</h5>
                                                <p>Forgot Password</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body pt-0">
                                    <div class="p-2">
                                        <form class="form-horizontal" onSubmit={handleSubmit(resetpassword)}>

                                            <div class="form-group">
                                                <label for="username">Email</label>
                                                <input {...register('email', { required: "Please Provide Registered Email" })} type="text" class="form-control" id="email" placeholder="Enter Registered Email" />
                                                {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                                            </div>

                                            <div class="form-group">
                                                <label for="username">OTP</label>
                                                <input {...register('otp', { required: "Please Provide Registered Email" })} type="text" class="form-control" id="email" placeholder="Enter OTP" />
                                                {errors.otp && <span className='text-danger'>{errors.otp.message}</span>}
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



                                            <div class="mt-3">
                                                <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Change Password</button>
                                            </div>



                                            <div class="mt-4 text-center">
                                                <Link className='text-primary' to='/registervender'>Register as Vendor</Link>
                                                {/* <a href="register.html" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Register as Vendor</a> */}
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
        </div>
    </>
}

export default Otpandresetpass