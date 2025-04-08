import React from 'react'

function Editvender() {
    return <>
            <div class="page-content">
                <div class="container-fluid">


                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0 font-size-18">Edit Vendor</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Vendors</a></li>
                                        <li class="breadcrumb-item active">Edit Vendor</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <form class="validateJs">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4">
                                                <div class="form-group">
                                                    <label for="FirstName">First Name<em>*</em></label>
                                                    <input type="text" class="form-control" id="FirstName" name="FirstName" placeholder="" data-rule-mandatory="true" />
                                                </div>
                                            </div>

                                            <div class="col-lg-4 col-md-4">
                                                <div class="form-group">
                                                    <label for="LastName">Last Name<em>*</em></label>
                                                    <input type="text" class="form-control" id="LastName" name="LastName" placeholder="" data-rule-mandatory="true" />
                                                </div>
                                            </div>

                                            <div class="col-lg-4 col-md-4">
                                                <div class="form-group">
                                                    <label for="Email">Email<em>*</em></label>
                                                    <input type="email" class="form-control" id="Email" name="Email" placeholder="" data-rule-mandatory="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="">Revenue (Last 3 Years in Lacks)<em>*</em></label>
                                                    <input type="text" class="form-control" id="" name="" placeholder="" data-rule-mandatory="true" />
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="">No of Employees<em>*</em></label>
                                                    <input type="text" class="form-control" id="" name="" placeholder="" data-rule-mandatory="true" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="">GST No<em>*</em></label>
                                                    <input type="text" class="form-control" id="" name="" placeholder="" data-rule-mandatory="true" />
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="">PAN No<em>*</em></label>
                                                    <input type="text" class="form-control" id="" name="" placeholder="" data-rule-mandatory="true" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="">Phone no<em>*</em></label>
                                                    <input type="text" class="form-control" id="" name="" placeholder="" data-rule-mandatory="true" />
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="">Categories<em>*</em></label>
                                                    <select class="form-control" multiple id="Categories" name="Categories">
                                                        <option value="">All Categories</option>
                                                        <option value="1">Software</option>
                                                        <option value="2">Hardware</option>
                                                        <option value="3">Office Furniture</option>
                                                        <option value="4">Stationery</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 mt-4 text-right">
                                                <button type="submit" class="btn btn-primary mb-2 mt-1">Submit</button>
                                                <button type="button" class="btn btn-secondary ml-2 mb-2 mt-1">Cancel</button>
                                            </div>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>





                </div >
            </div >
    </>
}

export default Editvender