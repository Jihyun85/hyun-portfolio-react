import { css } from "styled-components";

export const PosCenterX = (type = "absolute") => css`
  position: ${type};
  left: 50%;
  transform: translateX(-50%);
`;

export const PosCenterY = (type = "absolute") => css`
  position: ${type};
  top: 50%;
  transform: translateY(-50%);
`;

export const PosCenter = (type = "absolute") => css`
  position: ${type};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
