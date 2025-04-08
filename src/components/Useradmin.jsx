import React from 'react'

function Useradmin() {
    return <>
            <div class="page-content">
                <div class="container-fluid">

                    
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0 font-size-18">User List</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                        <li class="breadcrumb-item active">Users</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title mb-4">Filter</h5>

                                    <form class="">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4">

                                                <label class="sr-only" for="inlineFormSearchl2">Search</label>
                                                <div class="input-group mb-2 mr-sm-3">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="mdi mdi-magnify"></i></div>
                                                    </div>
                                                    <input type="text" class="form-control" id="inlineFormSearchl2" placeholder="Search"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4">
                                                <select class="form-control" id="userstatus" name="userstatus">
                                                    <option value="">Select Status</option>
                                                    <option value="1">Active</option>
                                                    <option value="2">Inactive</option>
                                                </select>
                                            </div>

                                            <div class="col-lg-4 col-md-4 text-right">
                                                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                                                <button type="submit" class="btn btn-secondary ml-2 mb-2">Reset</button>
                                            </div>
                                        </div>

                                    </form>
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
                                                <h4 class="card-title">Users</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table mb-0 listingData dt-responsive" id="datatable">
                                            <thead>
                                                <tr>
                                                    <th>S. No.</th>
                                                    <th>First name</th>
                                                    <th>Last Name</th>
                                                    <th>Email</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Aman</td>
                                                    <td>Sharma</td>
                                                    <td>aman@gmail.com</td>
                                                    <td><span class="badge badge-pill badge-success">Active</span></td>
                                                    <td>
                                                        <a href="edituser.html" class="text-primary mr-2"><i class="mdi mdi-pencil"></i></a>
                                                        <a href="#" class="text-danger"><i class="mdi mdi-circle-off-outline"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Gagan</td>
                                                    <td>Kumar</td>
                                                    <td>gagan456@gmail.com</td>
                                                    <td><span class="badge badge-pill badge-success">Active</span></td>
                                                    <td>
                                                        <a href="edituser.html" class="text-primary mr-2"><i class="mdi mdi-pencil"></i></a>
                                                        <a href="#" class="text-danger"><i class="mdi mdi-circle-off-outline"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Vinay</td>
                                                    <td>Singh</td>
                                                    <td>vinay009@gmail.com</td>
                                                    <td><span class="badge badge-pill badge-success">Active</span></td>
                                                    <td>
                                                        <a href="edituser.html" class="text-primary mr-2"><i class="mdi mdi-pencil"></i></a>
                                                        <a href="#" class="text-danger"><i class="mdi mdi-circle-off-outline"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Ravi</td>
                                                    <td>Raj</td>
                                                    <td>ravi@gmail.com</td>
                                                    <td><span class="badge badge-pill badge-danger">Inactive</span></td>
                                                    <td>
                                                        <a href="edituser.html" class="text-primary mr-2"><i class="mdi mdi-pencil"></i></a>
                                                        <a href="#" class="text-danger"><i class="mdi mdi-circle-off-outline"></i></a>
                                                    </td>
                                                </tr>

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

export default Useradmin