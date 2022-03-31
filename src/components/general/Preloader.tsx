import React, { FC } from 'react';

import styled from 'styled-components';

import preloader from 'assets/gif/preloader.gif';

export const Preloader: FC = () => (
  <Container>
    <Image src={preloader} alt="preloader" />
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  max-width: 600px;
  width: 100%;
`;
