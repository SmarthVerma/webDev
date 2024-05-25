import  React from 'react'
import { useState, useEffect } from 'react'

const Navbar = ({place}) => {
  //case: render every time
    useEffect(()=>{
        alert("naving this bitch up(running on every render")
    })
    // case: render only one time
    useEffect(()=>{
        alert("phela nasha (will run on first render")
    }, [])
    //case: render when change occour
    useEffect(()=>{
        alert("color change krne ko manga")
    }, [place])
    //case: cleanup function

    useEffect(()=>{
      alert("dasda as das ")
      return ()=>{
        alert("component was removed")
      }
    },[])
  return (
    <div>
      I am smarth of {place}juit
    </div>
  )
}

export default Navbar
