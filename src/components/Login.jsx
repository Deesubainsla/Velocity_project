import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'
import { useContext } from 'react'
import { mycontext } from '../contextapi/context'


function Login() {
    const {setuser, setrole} = useContext(mycontext);
    const navigate = useNavigate();

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onlogin = async(data)=>{
        
            const res = await axios.post('https://rfpdemo.velsof.com/api/login',{
                'email':data.email,
                'password': data.password
            })

            if(res.data.error){
                toast.error(res.data.error);
            }
            else{
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('role', res.data.type);
                localStorage.setItem('userid', res.data.user_id);
                setuser(res.data.token);
                setrole(res.data.type);
                navigate(`/${res.data.type}`);
                toast.success(`${res.data.name} Logged in Successfully`);
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
                                                <p>Sign in to continue</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body pt-0"> 
                                    <div class="p-2">
                                        <form class="form-horizontal" onSubmit={handleSubmit(onlogin)}>
            
                                            <div class="form-group">
                                                <label for="username">Email</label>
                                                <input type="text" {...register('email',{required:"Please provide Email"})} class="form-control" id="email" placeholder="Enter Email"/>
                                            </div>
                                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    
                                            <div class="form-group">
                                                <label for="userpassword">Password</label>
                                                <input type="password" {...register("password",{required:"Please provide password"})} class="form-control" id="userpassword" placeholder="Enter password"/>
                                            </div>
                                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                    
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customControlInline"/>
                                                <label class="custom-control-label" for="customControlInline">Remember me</label>
                                            </div>
                                            
                                            <div class="mt-3">
                                                <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
                                            </div>
                

                                            <div class="mt-4 text-center">
                                                <h5 class="font-size-14 mb-3">Sign in with</h5>
                
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a href="javascript::void()" class="social-list-item bg-primary text-white border-primary">
                                                            <i class="mdi mdi-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript::void()" class="social-list-item bg-info text-white border-info">
                                                            <i class="mdi mdi-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript::void()" class="social-list-item bg-danger text-white border-danger">
                                                            <i class="mdi mdi-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="mt-4 text-center">
                                                <Link to='/registervender' >Register as Vendor</Link>
                                                {/* <a href="register.html" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Register as Vendor</a> */}
                                            </div>
                                            <div class="mt-4 text-center">
                                                <Link to='/registeradmin' >Register as Admin</Link>
                                                {/* <a href="register.html" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Register as Vendor</a> */}
                                            </div>
                                            <div class="mt-4 text-center">
                                                <Link to='/forgotpass' >Forgot your password?</Link>
                                                {/* <a href="#" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Forgot your password?</a> */}
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

export default Login