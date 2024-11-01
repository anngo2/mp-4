"use client";

import styled from "styled-components";

import {useState} from "react";
import Link from "next/link";
//css for the home page
const StyledDiv = styled.div`
    //the css for the home page
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: plum;
    height: 65vh;
    border: 10px solid gold;
    margin:auto;
    padding-top: 20%;
    width: 80%;
`;

export default function Home() {

    const [city, setCity] = useState("");

    return (
        //this is the html for home page where users enter the city name
        <StyledDiv>
            <h1>Find the weather in any city!</h1>
            <p>Enter a city name below to get the current weather</p>
            <input type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)}/>
            <Link href={`/${city}`}>Get Weather</Link>
        </StyledDiv>
    );
}
