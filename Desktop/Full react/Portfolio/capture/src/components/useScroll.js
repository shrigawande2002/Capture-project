// import React from "react";
// import { useInView } from "react-intersection-observer";
// import { useAnimation } from "framer-motion";
// import { useEffect } from "react";

// export const useScroll = () => {
//   const control = useAnimation();
//   const [element, view] = useInView({ threshold: 0.5 });
//   console.log(view)

//   useEffect(() => {
//     if (view) {
//       control.start("show ");
//     } else {
//       control.start("hidden");
//     }

//   }, [control, view]);

//   // Return any values you want to expose from the hook
//   return [control , view]
//   return [element, view];
// };
