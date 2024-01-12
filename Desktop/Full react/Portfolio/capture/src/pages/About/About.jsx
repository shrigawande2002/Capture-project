import React from "react";
import home1 from "../../img/home1.png";
import { Aboutst, Description, Hide, Image } from "../../components/Style";
import Service from "../../components/Service";
import Faq from "../../components/Faq";
import { motion } from "framer-motion";
import { PageAnimation, fade , titleAnim , imageAnimation} from "../../Amimation"
import Svg from "../../components/Svg";

function About() {
     
  return (
    <motion.div variants={PageAnimation} initial="hidden" animate="show" exit={"exit"}>
      <Aboutst>
        <Description>
          <div className="title">
            <Hide>
              <motion.h2 variants={titleAnim} > We Work To make</motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnim}  > Your <span>Dreams</span> comes
              </motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnim} > True.</motion.h2>
            </Hide>
          </div>
          <motion.p variants={ fade} >
          
            Contact Us for any photography or videography idea we have
            professional with amazing skills
          </motion.p>
          <motion.button variants={fade}>Contact us</motion.button>
        </Description>
        <Image>
          <motion.img variants={ imageAnimation}src={home1} alt="home image" />
        </Image>
        <Svg/>
      </Aboutst>

      <Service />
      <Faq/>
    </motion.div>
  );
}

export default About;
