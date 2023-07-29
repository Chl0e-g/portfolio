import { CSSProp, css } from "styled-components";

import { BREAKPOINT_LG, BREAKPOINT_MD, BREAKPOINT_SM, BREAKPOINT_XS, BREAKPOINT_XXS } from "@/constants";

function screenStyles(breakpoint: number) {
  return function (styles: CSSProp) {
    return css`
      @media (max-width: ${breakpoint}px) {
        ${styles};
      }
    `;
  };
}

const mq = {
  mobileXSmall: screenStyles(BREAKPOINT_XXS),
  mobileSmall: screenStyles(BREAKPOINT_XS),
  mobile: screenStyles(BREAKPOINT_SM),
  tablet: screenStyles(BREAKPOINT_MD),
  desktopSmall: screenStyles(BREAKPOINT_LG),
};

export default mq;
