import React, {FC} from "react";
import styled from "styled-components";

type Props = {
    text: string
    onSubmit: () => void
}

export const Button: FC<Props> = ({text,onSubmit}) => {
    return (
        <>
            <ButtonBody onClick={onSubmit} type="submit">{text}</ButtonBody>
        </>
    )
}

const ButtonBody = styled.button`
  padding: 12px 0;
  width: 100%;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  font-weight: 600;
  color: #FFFFFF;
  background: #2BAEE0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #51C2EE;
  }
  &:focus {
    background: #1DA7DC;
  }
  &:disabled{
    background: #CEEDF9;
    color: #2BAEE0;
  }
`