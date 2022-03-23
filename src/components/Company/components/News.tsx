import React, {FC, memo} from "react";
import styled from "styled-components";

type Props = {
    url: string
}

export const News:FC<Props> = memo(({url}) => {
    return(
        <NewsContainer>
            <NewsImage src={url}/>
            <NewsInner>
                <NewsTitle>The Decline of Clothing Retail Aprelas</NewsTitle>
                <NewsSubTitle>The The apparel industry’s appeal has been dwindling for a while</NewsSubTitle>
                <NewsDate>2 Sep 2020, 13:23</NewsDate>
            </NewsInner>
        </NewsContainer>
    )
})

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
const NewsContainer = styled.article`
  margin-top: 16px;
  display: flex;
`