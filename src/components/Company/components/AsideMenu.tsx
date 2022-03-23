import React from "react";
import styled from "styled-components";
import imgScoop from "assets/img/imgScoop.png"
import news1 from "assets/img/news1.png";
import news2 from "assets/img/news2.png";
import news3 from "assets/img/news3.png";
import news4 from "assets/img/news4.png";
import news5 from "assets/img/news5.png";
import news6 from "assets/img/news6.png";
import {News} from "./News";

export const AsideMenu = () => {

    return (
        <Container>
            <Title>Scoop</Title>
            <ImageScoop src={imgScoop}/>
            <TextContainer>
                <Text>Technology</Text>
                <Circle> </Circle>
                <Text>Microsoft</Text>
                <Circle> </Circle>
                <Text>Awards</Text>
            </TextContainer>
            <Title style={{marginTop: '16px'}}>The Decline of Clothing Retail</Title>
            <Subtitle>The apparel industry’s appeal has been dwindling for a while: “In 1977, clothing industry’s
                appeal </Subtitle>
            <Date>2 Sep 2020, 13:23</Date>
            <Title style={{marginTop: '24px'}}>News</Title>
            <News url={news1}/>
            <NewsLine> </NewsLine>
            <News url={news2}/>
            <NewsLine> </NewsLine>
            <News url={news3}/>
            <NewsLine> </NewsLine>
            <News url={news4}/>
            <NewsLine> </NewsLine>
            <News url={news5}/>
            <NewsLine> </NewsLine>
            <News url={news6}/>
        </Container>
    )
}

const NewsLine = styled.div`
  margin-top: 16px;
  margin-left: 82px;
  width: 220px;
  height: 1px;
  background: #E8E8E8;
`
const Date = styled.span`
  margin-top: 8px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const Subtitle = styled.p`
  margin: 0;
  margin-top: 4px;
  font-size: 12px;
  color: #122434;
  line-height: 150%;
`
const Circle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #E8E8E8;
`
const Text = styled.span`
  padding-left: 8px;
  padding-right: 8px;
  font-size: 12px;
  color: #E8E8E8;
`
const TextContainer = styled.div`
  position: absolute;
  top: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ImageScoop = styled.img`
  margin-top: 16px;
`
const Title = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #122434;
`
const Container = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
`