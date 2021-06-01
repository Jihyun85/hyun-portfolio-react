import { css } from "styled-components";

const getFlexValue = (key) => {
  switch (key) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    case "evenly":
      return "space-evenly";
    case "stretch":
      return "stretch";
    default:
      return "center";
  }
};

export const Flexbox = (jc = "center", ai = "center") => css`
  display: flex;
  justify-content: ${getFlexValue(jc)};
  align-items: ${getFlexValue(ai)};
`;

export const FlexboxColumn = (jc = "center", ai = "center") => css`
  display: flex;
  flex-direction: column;
  justify-content: ${getFlexValue(jc)};
  align-items: ${getFlexValue(ai)};
`;

export const InlineFlexbox = (jc = "center", ai = "center") => css`
  display: inline-flex;
  justify-content: ${getFlexValue(jc)};
  align-items: ${getFlexValue(ai)};
`;
