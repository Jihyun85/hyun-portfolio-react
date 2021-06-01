import React from "react";
import styled from "styled-components";
import { FlexboxColumn } from "./styles/Flexbox";
import { TextStyle16, TextStyle20, TextStyle24 } from "./styles/TextStyle";
import CustomMedia from "./CustomMedia";

const Box = styled.div`
  ${FlexboxColumn};
`;

const Text = styled.h2`
  ${TextStyle16};
  color: ${({ theme }) => theme.colors.darkGray};

  margin-bottom: 5px;
  font-weight: bold;

  ${CustomMedia.greaterThan("mdBreakpoint")`
    ${TextStyle20};
    margin-bottom: 10px;
  `}

  ${CustomMedia.greaterThan("lgBreakpoint")`
    ${TextStyle24};
  `}
`;

const Divider = styled.div`
  width: 100px;
  height: 2px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};

  ${CustomMedia.greaterThan("mdBreakpoint")`
    width: 200px;
    height: 3px;
    margin-bottom: 40px;
  `};
`;

const Subtitle = ({ subtitle }) => (
  <Box className="subtitle">
    <Text className="subtitle-text">{subtitle}</Text>
    <Divider className="divider"></Divider>
  </Box>
);

export default Subtitle;
