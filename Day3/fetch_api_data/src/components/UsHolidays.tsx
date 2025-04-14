// import React from "react";
import { useState, useEffect } from "react";
import { apiLink } from "../api_links";
import styled from "styled-components";
import axios from "axios";

interface apiProps{
    name:string;
    date:string;
    countryCode:string;
}

const UsHolidays =()=>{

    const [apiData, setApiData] = useState<apiProps[]>();

    // *Fetching the api data using async await
    // const fetchDataApi = async() =>{
    //     try{
    //         const response = await fetch(apiLink);
    //         const data = await response.json();
    //         setApiData(data);
    //         // console.log(data);
    //     }catch(error){
    //         console.error("Something Went Wrong Please Try again",error);
    //     }

    // }

    // *Fetching API data using Axios
    const fetchDataApi = () =>{
        axios.get(apiLink)
        .then((response) =>{
            const data = response.data;
            setApiData(data)
        })
        .catch((error) => {
            console.error("Something Went Wrong", error);
        })
    }


    //* Fetching Api Data using Promises
    // const fetchDataApi = () =>{
    //     fetch(apiLink)
    //     .then((response) =>{
    //         if(!response.ok){
    //             throw new Error("No Response from the server")
    //         }
    //         return response.json();  
    //     })
    //     .then((fetchedData) =>{
    //         setApiData(fetchedData)
    //     }) 
    //     .catch((error) =>{
    //       console.error("No data found",error)  
    //     });
    // };

    useEffect(()=>{
        fetchDataApi();

    },[])

    // Function to change date format
    function changeDateFormat(dateString : string | number | Date){
        const options ={
            year :"numeric",
            month:"short",
            day :"numeric"  
        } as Intl.DateTimeFormatOptions;

        const date = new Date(dateString);
        return date.toLocaleDateString("en-UK", options)
    }

    return(
        <HolidaysWrapper>
            {apiData && apiData.length > 0 && (
                <h1>Public Holidays {apiData[0].countryCode}</h1>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Holiday Type</th>
                    </tr>
                </thead>

                <tbody>
                    {apiData && apiData.map((data, index)=>(
                        <tr key={index}>
                            <td>{data.date}</td>
                            <td>{data.name}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </HolidaysWrapper>

    )

}
export default UsHolidays;

const HolidaysWrapper = styled.div`
    font-size : 1.2rem;
    h1{
        margin-top : 3rem;
        text-align : center;
    }
    table{
    border-collapse :collapse;
    margin:auto;
    width : 100%
    }
    th{
    background-color :#f2f2f2;
    border : 1px solid red;
    padding : 8px;
    
    }
    td{
    border : 1px solid #dddddd;
    text-align : center;
    padding : 8px;
    }
`;



