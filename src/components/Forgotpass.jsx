import React from 'react'
import { Link } from 'react-router-dom'

function Forgotpass() {
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
                                        <form class="form-horizontal" action="index.html">

                                            <div class="form-group">
                                                <label for="username">Email</label>
                                                <input type="text" class="form-control" id="email" placeholder="Enter Email" />
                                            </div>

                                            

                                            <div class="mt-3">
                                                <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Send OTP</button>
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

export default Forgotpass