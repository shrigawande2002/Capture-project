import React, { useEffect } from 'react'
import clock from '../img/clock.svg'
import teamwork from '../img/teamwork.svg'
import money from '../img/money.svg'
import diaphragm from '../img/diaphragm.svg'
import home2 from '../img/home2.png'
import { Aboutst, Description, Image } from './Style'
import styled from 'styled-components'

import { Scrollreviel } from '../Amimation'
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";



function Service() {

//     const controls = useAnimation();
//     const [element, view] = useInView({ threshold: 0.5 });
//    useEffect( ()=>{
//     if (view) {
//         controls.start("show ");
//       } else {
//         controls.start("hidden");
//       }
//    })
   

    return (

        <Services variants={Scrollreviel} animate= "show" initial="hidden" >
            <Description>
                <h2>High <span>Quality</span>Service</h2>
                < Cards>
                    <Card >
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficiency</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card >
                        <div className="icon">
                            <img src={money} />
                            <h3>Afordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card >
                        <div className="icon">
                            <img src={diaphragm} />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card >
                        <div className="icon">
                            <img src={teamwork} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </ Cards>
            </Description>
            <Image>
                <img src={home2} alt="" />
            </Image>
        </Services>

    )
}

const Services = styled(Aboutst)`
h2{
    padding-bottom:5rem;

}

p{
  width:70%;
  padding: 2rem 0rem 4rem 0rem  ;
} `;

const Cards = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;

`;

const Card = styled.div`
flex-basis:20rem;
.icon{
    display:flex;
    align-items:center;

    h3{
        padding:1rem;
        color:black;
        background:white;
        margin-left:1rem;
    }
}

`;


export default Service
