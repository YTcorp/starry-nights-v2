// export const WIDTH_ELEMENT = window.innerWidth;

// export const checkWidth = (width) => {
//   return {
//     type: WIDTH_ELEMENT,
//     payload: { width },
//   };
// };

import { createAction } from "@reduxjs/toolkit";

export const windowWidth = createAction(window.innerWidth);
