import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='container-fluid nav-bg'>
                <div className='row'>
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar_brand" href="#" >BiTech</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item ">
                                        <NavLink activeClassName="menu_item" exact className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        < NavLink activeClassName="menu_item" exact className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        < NavLink activeClassName="menu_item" exact className="nav-link" to="/service">Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu_item" exact className="nav-link" to="/contact">Contact</NavLink>
                                    </li>


                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar;