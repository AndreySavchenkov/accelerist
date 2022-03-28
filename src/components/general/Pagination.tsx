import React, {FC} from 'react';
import {LeftArrowIcon, RightArrowIcon} from "assets/svg";
import styled from "styled-components";

type Props = {
    endElement: number
    totalItems: number
    firstElement: number
    onLeftArrowClick?: () => void
    onRightArrowClick?: () => void
}

export const Pagination: FC<Props> = ({endElement, totalItems, firstElement, onLeftArrowClick, onRightArrowClick}) => {
    return (
        <Navigation>
            <LeftArrow onClick={onLeftArrowClick}>
                <LeftArrowIcon/>
            </LeftArrow>
            <TextNavigation>{firstElement} - {endElement} of {totalItems}</TextNavigation>
            <RightArrow onClick={onRightArrowClick}>
                <RightArrowIcon/>
            </RightArrow>
        </Navigation>
    )
}

const TextNavigation = styled.span`
  padding-top: 3px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`
const LeftArrow = styled.div`
  cursor: pointer;
`
const RightArrow = styled.div`
  cursor: pointer;
`
const Navigation = styled.div`
  display: flex;
  margin-right: 40px;
  @media (max-width: 730px) {
    margin-right: 16px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`