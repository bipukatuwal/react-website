import React from 'react'
import web from '../src/img/1.jpg' ; 
import {NavLink} from 'react-router-dom'
import Combined from './Combined'
const Home =()=>{

return <Combined name='Welcome to tech world' 
        imgsrc={web}
        visit ='/service' 
        btname = 'Get Started' />
}

export default Home;