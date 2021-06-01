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

export const Flexbox = css`
  display: flex;
  justify-content: ${(props) => getFlexValue(props.jc) || "center"};
  align-items: ${(props) => getFlexValue(props.ai) || "center"};
`;

export const FlexboxColumn = css`
  ${Flexbox};
  flex-direction: column;
`;

export const InlineFlexbox = css`
  display: inline-flex;
  justify-content: ${(props) => getFlexValue(props.jc)};
  align-items: ${(props) => getFlexValue(props.ai)};
`;
