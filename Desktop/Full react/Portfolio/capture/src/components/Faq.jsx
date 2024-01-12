import React, { useState } from "react";
import { Aboutst } from "./Style";
import styled from "styled-components";
import Toggle from "./Toggle";


function Faq() {

     const [tog , settog] = useState(false);
    const isVisible = ()=> {
        settog(true);
    }
  return (
    <Faqa>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      
    
      <Toggle title={"How Do I Started ?"}>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            modi.
          </p>
        </div>
      </Toggle>

      <div className="faq-line"></div>
      <Toggle title={"What type of product you offre"}>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            modi. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </Toggle>
      <div className="faq-line"></div>
      <Toggle title={"What Schedule"}>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            modi.
          </p>
        </div>
      </Toggle>
      <div className="faq-line"></div>
    </Faqa>
  );
}

const Faqa = styled(Aboutst)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    width: 100%;
    margin: 2rem 0rem;
    height: 0.2rem;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;
export default Faq;
