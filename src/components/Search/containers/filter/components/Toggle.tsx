import React, { FC } from 'react';

import styled from 'styled-components';

import { useToggle } from 'hooks/useToggle';

type toggleItemProps = {
  isToggle: boolean;
};

type Props = {
  firstItemTitle: string;
  secondItemTitle: string;
  widthContainer: string;
};

export const Toggle: FC<Props> = ({
  firstItemTitle,
  secondItemTitle,
  widthContainer,
}) => {
  const [isFirst, isSecond, onToggleItemClick] = useToggle();

  return (
    <ToggleContainer style={{ width: `${widthContainer}%` }}>
      <ToggleItem onClick={onToggleItemClick} isToggle={isFirst}>
        {firstItemTitle}
      </ToggleItem>
      <ToggleItem onClick={onToggleItemClick} isToggle={isSecond}>
        {secondItemTitle}
      </ToggleItem>
    </ToggleContainer>
  );
};

export const ToggleContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
  background: #f8f8f8;
`;
export const ToggleItem = styled.div<toggleItemProps>`
  background-color: ${props => (props.isToggle ? '#CAF0FF' : '')};
  color: ${props => (props.isToggle ? '#122434' : '#737373')};
  border-radius: ${props => (props.isToggle ? '6px' : '')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  cursor: pointer;

  &:hover {
    color: ${props => (props.isToggle ? '#122434' : '#122434')};
  }

  &:disabled {
    background-color: ${props => (props.isToggle ? '#DCF5FF' : '')};
    color: ${props => (props.isToggle ? '#A8BED2' : '#BFBFBF')};
  }
`;
