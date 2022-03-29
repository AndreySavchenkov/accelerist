import React, { FC } from 'react';

import styled from 'styled-components';

type Props = {
  onClick?: () => void;
};

export const FavoriteIcon: FC<Props> = ({ onClick }) => (
  <Container onClick={onClick}>
    <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.612 13.415a4.731 4.731 0 0 0-1.537-1.047 4.659 4.659 0 0 0-3.626 0 4.732 4.732 0 0 0-1.536 1.046l-.913.93-.913-.93a4.693 4.693 0 0 0-3.35-1.413 4.693 4.693 0 0 0-3.35 1.414A4.875 4.875 0 0 0 11 16.828c0 1.28.5 2.509 1.387 3.414l.913.93L20 28l6.7-6.828.912-.93c.44-.448.79-.98 1.027-1.566a4.908 4.908 0 0 0 0-3.695 4.833 4.833 0 0 0-1.027-1.566Z"
        fill="#F05658"
      />
      <rect x={0.5} y={0.5} width={39} height={39} rx={5.5} stroke="#EAEAEA" />
    </svg>
  </Container>
);

const Container = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
