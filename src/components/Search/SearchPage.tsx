import React, {FC, useState} from "react";
import styled from "styled-components";
import {Header} from "../general/Header";
import {SearchPanel} from "./components/SearchPanel";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {AllerSuccessful} from "../general/AllerSuccessful";
import {getSuccessful} from "../../selectors/selectors";


export const SearchPage: FC = () => {
    const [isShowMenu, setShowMenu] = useState(false);
    const successful = useSelector(getSuccessful);

    return (
        <>
            <div>
                <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu}/>
                <SearchPanel isShowMenu={isShowMenu}/>
                {!isShowMenu ?
                    <Container>
                        <InnerContainer>
                            <SearchContainer>
                                <Outlet/>
                            </SearchContainer>
                        </InnerContainer>
                    </Container> : null}
            </div>
            {successful ? <AllerSuccessful text={'Login process was successful.'}/> : null}
        </>

    )
}

const Container = styled.div`
  display: flex;
  background: #F9F9F9;
`
const InnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1440px;
`
const SearchContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
`