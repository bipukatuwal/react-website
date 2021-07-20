import React from 'react'
import web from '../src/img/1.jpg' ; 
import {NavLink} from 'react-router-dom'
const Combined =(props)=>{

return (
    <section id='header' className="d-flex align-items-center">
         <div className='container-fluid nav-bg'>
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div class="row">
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                            <h1> {props.name} <strong className="brand_name">BiTech</strong></h1>
                            <h2 className="my-3">Join the team soon</h2>
                            <div className='mt-3'>
                                <NavLink to={props.visit} className="btn_get_started">{props.btname}</NavLink></div></div>
                                
                                <div className="col-lg-6 order-1 order-lg-2 header_img d-flex align-items-center"/>
                                <img src={props.imgsrc} width="500px" className="img_fluid animated d-flex align-items-center mt-5" alt='home img'  />
                                </div>
                                </div></div></div>
    </section>
)
}

export default Combined;