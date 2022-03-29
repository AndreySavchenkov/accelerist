import React, { FC } from 'react';

import styled from 'styled-components';

type Props = {
  text: string;
};

export const ButtonTimer: FC<Props> = ({ text }) => (
  <ButtonTimerBody type="submit">{text}</ButtonTimerBody>
);

const ButtonTimerBody = styled.button`
  padding: 12px 0;
  width: 100%;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  font-weight: 600;
  color: #2baee0;
  background: #ceedf9;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
