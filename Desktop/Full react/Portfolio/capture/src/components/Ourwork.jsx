
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import athlete from '../img/athlete-small.png'
import Racer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import {motion} from 'framer-motion'
import { PageAnimation , fade, imageAnimation, lineAnim , Frameanim, slidercontainer } from '../Amimation';


function Ourwork() {
    return (
        <Work variants={PageAnimation} initial="hidden" animate="show" exit={"exit"}>
            <motion.div variants={slidercontainer}>
            <Frame1 variants={Frameanim}></Frame1>
            <Frame2 variants={Frameanim}></Frame2>
            <Frame3 variants={Frameanim}></Frame3>
            <Frame4 variants={Frameanim}></Frame4>
            <Frame5 variants={Frameanim}></Frame5>
            <Frame6 variants={Frameanim}></Frame6>
            <Frame7 variants={Frameanim}></Frame7>
           
            


            </motion.div>
            <Movie>
                <motion.h2 variants={fade}> The Athlete </motion.h2>
                <motion.div variants={lineAnim} className="line ">  </motion.div>
                <Link to="/work/the-athlete"> <Hide>  <motion.img  variants={imageAnimation} src={athlete} alt="athelere" /> </Hide> </Link>
            </Movie>

            <Movie>
                <motion.h2> The Racer </motion.h2>
                <div className="line ">  </div>
                <Link to="/work/the-racer">  <Hide>  <motion.img variants={imageAnimation} src={Racer} alt="athelere" />  </Hide> </Link>
            </Movie>
            <Movie>
                <h2> Good Time  </h2>
                <div className="line ">  </div>
                <Link to="/work/goodtimes" > <img src={goodtimes} alt="athelere" /></Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height:100vh;
    padding: 2rem 10rem;
    overflow: hidden ;
    h2{
        padding: 1rem 0rem;
    }
    
`;

const Movie = styled.div`
    padding-bottom : 10rem;

    h2{
        color:white;
    }

    .line{
        margin-bottom : 3rem;
        background: #0ba340;
        height: 0.5rem;
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit:cover;
    }
`;

 const Hide = styled(motion.div)`

    overflow: hidden;
 `;

 const Frame1 =styled(motion.div)`
    z-index: 2;
    position: fixed;
    left:0%;
    top:10%;
    width: 100%;
    height:100vh;
    background:#fffebf;
 `;
    const Frame2 = styled(Frame1)`
    background: #ff8efb`;

    const Frame3 = styled(Frame1)`
    background: #8ed2ff`;

    const Frame4 = styled(Frame1)`
    background: #FDFFAE`;

 
    const Frame5 = styled(Frame1)`
    background: #E9FFC2`;

 
    const Frame6 = styled(Frame1)`
    background: #C3EDC0`;

 
    const Frame7 = styled(Frame1)`
    background: #AAC8A7`;

 
export default Ourwork
