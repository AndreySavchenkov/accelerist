import React from "react";
import styled from "styled-components";

export const ErrorIcon = () => {
    return (
        <Container>
            <svg width={36} height={36} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 33c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C9.716 3 3 9.716 3 18c0 8.284 6.716 15 15 15Z"
                    fill="#F05658"
                />
                <path
                    d="m22.5 13.5-9 9M13.5 13.5l9 9"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Container>
    )
}
const Container = styled.div`
  margin: 16px;
`