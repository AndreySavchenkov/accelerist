import React, {FC, useState} from "react";
import styled from "styled-components";
import logo1 from "assets/img/logo01.png";
import logo2 from "assets/img/logo02.png";
import logo3 from "assets/img/logo03.png";
import logo4 from "assets/img/logo04.png";
import logo5 from "assets/img/logo05.png";


export const Structure:FC = () => {
    const [activeTitle, setActiveTitle] = useState('Similar')

    const onTitleClick = (title: string) => {
        setActiveTitle(title)
    }

    return (
        <>
            <Description>Structure</Description>
            <Text>Sole proprietorship</Text>
            <TitlesContainer>
                {(activeTitle === 'Similar') ? <ActiveTitle>Similar Companies</ActiveTitle> :
                    <Title onClick={() => onTitleClick('Similar')}>Similar Companies</Title>}
                {(activeTitle === 'Parent') ? <ActiveTitle>Parent Company</ActiveTitle> :
                    <Title onClick={() => onTitleClick('Parent')}>Parent Company</Title>}
                {(activeTitle === 'Subsidiaries') ? <ActiveTitle>Subsidiaries</ActiveTitle> :
                    <Title onClick={() => onTitleClick('Subsidiaries')}>Subsidiaries</Title>}
            </TitlesContainer>
            {(activeTitle === 'Similar') ?
                <ItemsContainer>
                    <Item src={logo1}/>
                    <Item src={logo2}/>
                </ItemsContainer>
                : (activeTitle === 'Parent') ?
                    <ItemsContainer>
                        <Item src={logo3}/>
                        <Item src={logo4}/>
                    </ItemsContainer>
                    :
                    <ItemsContainer>
                        <Item src={logo5}/>
                        <Item src={logo2}/>
                    </ItemsContainer>
            }

        </>
    )
}
const Item = styled.img`
  margin-right: 16px;
`
const ItemsContainer = styled.div`
  margin-top: 24px;
  display: flex;
`
const ActiveTitle = styled.span`
  margin-right: 32px;
  font-weight: 400;
  color: #2BAEE0;
  font-size: 16px;
  cursor: pointer;
`
const Title = styled.span`
  margin-right: 32px;
  font-weight: 400;
  font-size: 16px;
  color: #737373;
  cursor: pointer;
`
const TitlesContainer = styled.div`
  margin-top: 32px;
  display: flex;
`
const Text = styled.p`
  font-size: 16px;
  color: #122434;
  margin: 16px 0 0;
`
const Description = styled.span`
  margin-top: 24px;
  font-size: 16px;
  line-height: 145%;
  font-weight: 600;
  color: #122434;
`