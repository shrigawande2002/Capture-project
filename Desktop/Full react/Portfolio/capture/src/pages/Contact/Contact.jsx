import React from "react";
import { motion } from "framer-motion";
import { PageAnimation, titleAnim } from "../../Amimation";
import styled from "styled-components";

function Contact() {
  return (
    <ContactStyle
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit={"exit"}
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}> Get In Touch </motion.h2>
        </Hide>
      </Title>
      <div> 
      <Hide>
        <Social variants={titleAnim}> 
            <Circle/>  <h2> Send Us A Message </h2>
        </Social>
        </Hide>
      </div>
      <div> 
      <Hide>
        <Social variants={titleAnim}> 
            <Circle/>  <h2> Send Us A Message </h2>
        </Social>
        </Hide>
      </div>
      <div> 
      <Hide>
        <Social variants={titleAnim}> 
            <Circle/>  <h2> Send Us A Message </h2>
        </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  min-height: 90vh;
  color: #353535;
  padding: 3rem 15rem;
`;

const Title = styled.div`
  color: black;
  padding: 4rem;
  font-family: 'Robotor', sans-serif;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
    font-size: 3rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }
`;
const Circle = styled.div`
  background-color: #353535;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
export default Contact;
