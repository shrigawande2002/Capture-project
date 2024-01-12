import { createGlobalStyle } from "styled-components";

const Globle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:br;
}



body{
    background: #1b1b1b;
    }

    button{
        font-weight:bold;
        cursor: pointer;
        font-size:1.1rem;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background:transparent;
        transition:all 0.5s ease;
        color:white;

        &:hover{
            color:white;
            background-color:#23d997;
        }
         }

        h2{
            font-size:4rem;
            font-weight:lighter;
            line-height:150%;

        }
        h3{
            color:white;
        }
        h4{
            font-weight:bold;
            font-size: 2rem;
            

        }
        span{
             font-weight:bold;
            color:#23d997;
        }
        a{
            font-size:1.1rem;
        }
         p{
            padding:3rem 0rem;
            font-size:1.4rem;
            color:#ccc;
         }
   




`;
export default Globle;