import React, { FC, useState } from 'react';

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { AllertSuccessful, SearchPanel, Header } from 'components';
import { EMPTY_STRING } from 'constance';
import { getSuccessful } from 'selectors/selectors';

export const SearchPage: FC = () => {
  const [isShowMenu, setShowMenu] = useState(false);

  const successful = useSelector(getSuccessful);

  return (
    <>
      <div>
        <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu} />
        <SearchPanel isShowMenu={isShowMenu} />
        {!isShowMenu ? (
          <Container>
            <InnerContainer>
              <SearchContainer>
                <Outlet />
              </SearchContainer>
            </InnerContainer>
          </Container>
        ) : (
          EMPTY_STRING
        )}
      </div>
      {successful ? (
        <AllertSuccessful text="Login process was successful." />
      ) : (
        EMPTY_STRING
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  background: #f9f9f9;
`;
const InnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1440px;
`;
const SearchContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
`;
