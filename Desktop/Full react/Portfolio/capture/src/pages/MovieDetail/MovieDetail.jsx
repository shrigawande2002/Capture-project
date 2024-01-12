
import React from 'react'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { MovieState } from '../../MovieState';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import { PageAnimation } from '../../Amimation';


function MovieDetail() {

    const History = useLocation();
    const url = History.pathname;
   
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {

        const curruntMovie = movies.filter((stateMovies) => stateMovies.url === url);
        setMovie(curruntMovie[0]);
    }, [movies , url ])



    return (
        <>
        { movie  && ( 
       <Details variants={PageAnimation} initial="hidden" animate="show">    
                <Headline>
                     <h2> { movie.title }</h2>
                     <img src={movie.mainImg} alt="" />
                </Headline>
                <Awards>  
                {/* {movie.awards.map( (award)=> { 
                    // <Award title ={ award.title} description={award.description} key={award.title}/>
                })}
                     */}
                     { movie.awards.map( (award)=> ( <Award title={award.title} key={award.title} description={award.description}/>      ) )}
                </Awards>
                <ImageDisplay>  

                 <img src={ movie. secondaryImg} alt=" second image " />
                </ImageDisplay>
       </Details>
       )}
        </>
    )
}

const Details = styled(motion.div)` 
        color : white;
 ` ;

const Headline = styled.div`
 
        position :relative;
        padding-top : 20vh;
        min-height: 90vh;

        h2{
            position: absolute;
            top: 10%;
            left: 38%;
            transform: translate(-50% -10%)
        }
        img{
            width: 100% ;
            object-fit: cover;
            height: 90vh;
            padding-top: 6rem ;
        }

 `;

 const Awards = styled.div`

    display: flex;
    min-height: 80vh;
    align-items: center;
    justify-content: space-around;


 `;


const Award = ({ title , description })=> {
    return( 

        < AwardStyle>   
            <h3> {title} </h3>
            <div className="line"></div>
            <p>{description } </p>
        </ AwardStyle>


    );
} ;

const AwardStyle = styled.div`
    padding : 5rem ;
    h3{
        font-size: 2rem;
        padding-bottom: 1rem;
    }
    .line{
        height: 0.5rem;
        width: 100%;
    background-color:#23d997;
    }
 `;

 const ImageDisplay = styled.div`
    
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh ;
        object-fit:cover;
    }
 `

export default MovieDetail
