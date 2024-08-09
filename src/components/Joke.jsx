import { useState } from "react"
import React from "react";
import Button from "./Button";
import './Joke.css';



export default function Joke(){
  const[joke,setjoke]= useState("");

function fetchAPI(){
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then(function(res){
     return res.json;
    } )
    .then(function(data){
      setjoke(data.joke);
    })
  }
  
  return (
    <div className="joke">
      <Button callapi={fetchAPI}/>
      <p>{joke}</p>
    </div>
    )
  
}