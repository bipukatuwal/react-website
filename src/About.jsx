import React from 'react'
import web from '../src/img/1.jpg' ; 
import {NavLink} from 'react-router-dom'
import Combined from './Combined';

const About =()=>{

    return <Combined name='Welcome to About page' 
            imgsrc={web}
            visit ='/contact' 
            btname = 'Contact' />
}

export default About;