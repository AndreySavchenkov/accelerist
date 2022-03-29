import React, { FC, memo } from 'react';

import styled from 'styled-components';

type Props = {
  text: string;
  clickHandler?: () => void;
};

export const Button: FC<Props> = memo(({ text, clickHandler }) => (
  <ButtonBody onClick={clickHandler} type="submit">
    {text}
  </ButtonBody>
));

const ButtonBody = styled.button`
  padding: 12px 0;
  width: 100%;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  font-weight: 600;
  color: #ffffff;
  background: #2baee0;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #51c2ee;
  }

  &:focus {
    background: #1da7dc;
  }

  &:disabled {
    background: #ceedf9;
    color: #2baee0;
  }
`;
