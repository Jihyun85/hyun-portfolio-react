import { css } from "styled-components";
import customMedia from "../CustomMedia";

export const Container = css`
  width: 100%;
  padding: 0 ${({ theme }) => theme.padding.smPadding};
  margin: 0 auto;

  ${customMedia.greaterThan("mdBreakpoint")} {
    max-width: 100%;
    padding: 0 ${({ theme }) => theme.padding.mdPadding};
  }

  ${customMedia.greaterThan("lgBreakpoint")} {
    max-width: 1140px;
    padding: 0;
  }
`;
