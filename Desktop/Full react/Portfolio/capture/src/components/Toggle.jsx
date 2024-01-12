import React, { Children, useState } from 'react'
import {motion} from 'framer-motion'
import { AnimateSharedLayout } from 'framer-motion';


function Toggle( {children, title}) {

    const [toggle , setToggle] = useState(false);
   
  return (
    <motion.div layout className='question' onClick={ ()=> setToggle(!toggle)}>
         <motion.h4 > {title}</motion.h4>
      { toggle ? children : " "}
    </motion.div>
   
  )
 
}

export default Toggle ;
