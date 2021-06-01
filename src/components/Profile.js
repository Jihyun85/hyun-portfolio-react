import React from "react";
import styled from "styled-components";
import customMedia from "./CustomMedia";

const Container = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  ${customMedia.greaterThan("mdBreakpoint")`
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-width: 200px;
  `}

  ${customMedia.greaterThan("lgBreakpoint")`
    width: 250px;
    height: 250px;
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Profile = ({ profile }) => (
  <Container className="profile">
    <Image src={profile} alt="프로필 사진" />
  </Container>
);

export default Profile;
