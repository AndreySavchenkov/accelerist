import React, {useState} from "react";
import styled from "styled-components";
import {Header} from "../general/Header";
import {SearchPanel} from "./components/SearchPanel";
import {Outlet} from "react-router-dom";



export const SearchPage = () => {
    // const successful = useSelector((state:RootState)=>state.notifications.successful);
    const [isShowMenu, setShowMenu] = useState(false);

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
            {/*{successful ? <AllerSuccessful text={'Login was successful. Please reload app'}/> : null}*/}
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