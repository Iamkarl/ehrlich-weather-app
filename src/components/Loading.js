import React from "react";
import loading from "../assets/icons/loading.svg";

import styled from 'styled-components'

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`

const Loading = () => (
  <StyledContainer>
    <img src={loading} alt="Loading" />
  </StyledContainer>
);

export default Loading;