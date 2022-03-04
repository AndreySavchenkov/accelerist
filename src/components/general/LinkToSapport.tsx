import React, {FC} from "react";
import styled from "styled-components";

export const LinkToSupport: FC = () => {
    return (
        <LinkToSupportBody type="submit">Contact Support</LinkToSupportBody>
    )
}

const LinkToSupportBody = styled.button`
  padding: 10px 24px;
  margin-top: 32px;
  width: 145px;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  font-weight: 600;
  color: #FFFFFF;
  background: rgba(18, 36, 52, 0.15);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #122434;
  }
`