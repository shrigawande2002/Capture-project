import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Nav() {
    return (
        <StyleNav>
            <Link to="/">   <h1 id='logo'>Cptuere</h1></Link>
            <ul>
                <motion.li> <Link to="/" >  About us </Link></motion.li>
                <motion.li> <Link to="work">  My Work </Link></motion.li>
                <motion.li> <Link to="contact">  Contact us</Link > </motion.li>
            </ul>

        </StyleNav >
    )
}

const StyleNav = styled.nav`

    min-height:10vh;
    margin:auto;
    justify-content:space-between;
    display:flex;
    align-items: center;
    padding: 1rem 10rem;
    background:#282828;
   
    a{
        color: white;
        text-decoration:none;   
    }
    ul{
        display: flex;
    }
    #logo{
        font-family: 'Lobster', cursive;
        font-weight: lighter;
        font-size:1.5rem;
    }

    li{
        padding-left:10rem;
        position: relative;
        list-style:none;
        
    }
`;


export default Nav
