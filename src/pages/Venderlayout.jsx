import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Dashbord from '../components/Dashbord'
import Venderadmin from '../components/Vendoradmin'
import { mycontext } from '../contextapi/context'
import { useContext } from 'react'

function Venderlayout() {

    const {setuser, setrole} = useContext(mycontext);
    const handlelogout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setuser(null);
        setrole(null);
    }

  return <>
        <div id='layout-wrapper'>
                {/* header start */}
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">

                            <div className="navbar-brand-box">

                                <a href="index.html" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src="assets/images/velocity_logo.png" alt="" height="40" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src="assets/images/velocity_logo.png" alt="" height="" />
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="d-flex pr-2">
                            <div className="dropdown d-inline-block">
                                <span className="d-none d-xl-inline-block ml-1" key="t-henry">Welcome Henry</span>&nbsp;&nbsp;
                                <button className='rounded' onClick={handlelogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </header>
                {/* header end */}

                {/* menu start */}
                <div className="vertical-menu">

                    <div data-simplebar className="h-100">


                        <div id="sidebar-menu">

                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li>
                                    <NavLink to="/vender" className={({isActive})=>isActive?"text-danger":"text-secondary"} >Dashboard</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/vender/rfpquotes" className={({isActive})=>isActive?"text-danger":"text-secondary"} >RFP for Quotes</NavLink>
                                </li>
                                

                            </ul>

                        </div>
                    </div>
                </div>
                {/* menu end */}

                {/* main content start*/}
                <div className="main-content">


                    
                    <Routes>
                        <Route path='' element={<Dashbord/>} />
                        <Route path='rfpquotes' element={<Venderadmin/>} />
                    </Routes>
                    
                   


                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    2022 &copy; Copyright.
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-sm-right d-none d-sm-block">
                                        Support Email:<a href="#" target="_blank" className="text-muted"> support@velsof.com </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </footer>
                </div>
                {/* main content end*/}
        </div>
  </>
}

export default Venderlayout