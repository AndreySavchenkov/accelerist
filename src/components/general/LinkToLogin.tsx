import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkToLogin: FC = () => (
  <LinkToLoginBody type="submit">
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      Return to Login
    </Link>
  </LinkToLoginBody>
);

const LinkToLoginBody = styled.button`
  position: absolute;
  bottom: 28px;
  padding: 10px 24px;
  width: 140px;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  font-weight: 600;
  color: #ffffff;
  background: rgba(18, 36, 52, 0.15);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #122434;
  }
`;
