import React from "react";
import styled from "styled-components";
import imgScoop from "assets/img/imgScoop.png"
import news1 from "assets/img/news1.png";
import news2 from "assets/img/news2.png";
import news3 from "assets/img/news3.png";
import news4 from "assets/img/news4.png";
import news5 from "assets/img/news5.png";
import news6 from "assets/img/news6.png";

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
            <NewsContainer>
                <NewsImage src={news1}/>
                <NewsInner>
                    <NewsTitle>The Decline of Clothing Retail Aprelas</NewsTitle>
                    <NewsSubTitle>The The apparel industry’s appeal has been dwindling for a while</NewsSubTitle>
                    <NewsDate>2 Sep 2020, 13:23</NewsDate>
                </NewsInner>
            </NewsContainer>
            <NewsLine> </NewsLine>
            <NewsContainer>
                <NewsImage src={news2}/>
                <NewsInner>
                    <NewsTitle>The Decline of Clothing Retail Aprelas</NewsTitle>
                    <NewsSubTitle>The The apparel industry’s appeal has been dwindling for a while</NewsSubTitle>
                    <NewsDate>2 Sep 2020, 13:23</NewsDate>
                </NewsInner>
            </NewsContainer>
            <NewsLine> </NewsLine>
            <NewsContainer>
                <NewsImage src={news3}/>
                <NewsInner>
                    <NewsTitle>The Decline of Clothing Retail Aprelas</NewsTitle>
                    <NewsSubTitle>The The apparel industry’s appeal has been dwindling for a while</NewsSubTitle>
                    <NewsDate>2 Sep 2020, 13:23</NewsDate>
                </NewsInner>
            </NewsContainer>
            <NewsLine> </NewsLine>
            <NewsContainer>
                <NewsImage src={news4}/>
                <NewsInner>
                    <NewsTitle>The Decline of Clothing Retail Aprelas</NewsTitle>
                    <NewsSubTitle>The The apparel industry’s appeal has been dwindling for a while</NewsSubTitle>
                    <NewsDate>2 Sep 2020, 13:23</NewsDate>
                </NewsInner>
            </NewsContainer>
            <NewsLine> </NewsLine>
            <NewsContainer>
                <NewsImage src={news5}/>
                <NewsInner>
                    <NewsTitle>The Decline of Clothing Retail Aprelas</NewsTitle>
                    <NewsSubTitle>The The apparel industry’s appeal has been dwindling for a while</NewsSubTitle>
                    <NewsDate>2 Sep 2020, 13:23</NewsDate>
                </NewsInner>
            </NewsContainer>
            <NewsLine> </NewsLine>
            <NewsContainer>
                <NewsImage src={news6}/>
                <NewsInner>
                    <NewsTitle>The Decline of Clothing Retail Aprelas</NewsTitle>
                    <NewsSubTitle>The The apparel industry’s appeal has been dwindling for a while</NewsSubTitle>
                    <NewsDate>2 Sep 2020, 13:23</NewsDate>
                </NewsInner>
            </NewsContainer>
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
const NewsDate = styled.span`
  margin-top: 12px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const NewsSubTitle = styled.span`
  margin-top: 8px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const NewsTitle = styled.span`
  font-size: 12px;
  line-height: 150%;
  font-weight: 600;
  color: #122434;
`
const NewsInner = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const NewsImage = styled.img`
  width: 72px;
  height: 110px;
  border-radius: 8px;
`
const NewsContainer = styled.div`
  margin-top: 16px;
  display: flex;
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
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
`