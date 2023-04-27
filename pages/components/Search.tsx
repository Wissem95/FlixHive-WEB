import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=db7ff1bedcfb63197436b09955f17eef";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=db7ff1bedcfb63197436b09955f17eef&query";


function Search() {
    const [movies, setMovies]=useState([]);
    const [query, setQuery]=useState('');

    useEffect(()=>{
        fetch(API_URL)
            .then((res)=>res.json())
            .then(data=>{
                console.log(data);
                setMovies(data.results);
            })
    }, [])

    // @ts-ignore
    const searchMovie = async(e)=>{
        e.preventDefault();
        console.log("Searching");
        try{
            const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);
            setMovies(data.results);
        }
        catch(e){
            console.log(e);
        }
    }


    const changeHandler= e =>{
        setQuery(e.target.value);
    }


    return(
        <div className="flex">
                <div className="flex-1">
                    <form className="d-flex" typeof="search" onSubmit={searchMovie}

                        placeholder="Movie Search"
                        aria-label="search"
                        name="query"
                        value={query} onChange={changeHandler}>

                    </form>
                </div>
        </div>
    )

}
export default Search