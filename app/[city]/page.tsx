"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "../components/weatherCard";
import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";

//css for the page that shows the weather info
const WeatherContentWrapper = styled.main`
    width: 80vw;
    margin: auto;
    background-color: deepskyblue;
    height: 100vh;
    border: gold 10px solid;
    
`;
const CityName = styled.h1`
    color: black;
    margin-top: 10%;
    justify-content: center;
    text-align: center;
    
`;
const WeatherCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-right: 3%;
    margin-left: 3%;
    background-color: lightyellow;
    border-radius: 25px;
    justify-content: center;
`;

export default function CityPage() {
    const params = useParams();
    //This makes sure that the city is a single string
    const cityParam = Array.isArray(params.city) ? params.city[0] : params.city;
    //takes away the %20 where spaces are in city names
    const cityName =  decodeURIComponent(cityParam);
    // Fetch weather data with SWR
    const { data, error } = useSWR(`/api/getWeatherData?city=${params.city}`, (url) =>
        fetch(url).then((res) => res.json())
    );

    // Handle error and loading states
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    // If there is data, get the days otherwise an empty array.
    const days = data?.days || [];
    return (
        //html for the page the displays the cities
        <WeatherContentWrapper>
            <CityName>{cityName}</CityName>
            <WeatherCardsContainer>
                {days.map((weather: Weather, i: number) => (
                    <WeatherCard
                        key={i}
                        datetime={weather.datetime}
                        conditions={weather.conditions}
                        description={weather.description}
                        tempmin={weather.tempmin}
                        tempmax={weather.tempmax}
                    />
                ))}
            </WeatherCardsContainer>
        </WeatherContentWrapper>
    );
}
