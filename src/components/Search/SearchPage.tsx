import React from "react";
import styled from "styled-components";
import {SearchHeader} from "./SearchHeader";
import {SearchPanel} from "./SearchPanel";
import {SearchFoundPanel} from "./find/SearchFoundPanel";


export const SearchPage = () => {
    return(
        <div>
            <SearchHeader/>
            <SearchPanel/>
            <SearchFoundPanel/>
        </div>
    )
}

const Container = styled.div`
  
`