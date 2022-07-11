


//use for handle side effect 
// Events: Add/remove envent listener 
// Observer pattern : Sucribe/unsubcribe
// Closure 
// Timers: setinterval, set timeout, clearInterval,clearTimeout
// userState 
// mounted/unmounted
// CallApi


// ===============//
// How to use useEffect 

// callback always call after the component mounted

// 1. useEffect[callback]
// - callback functions be called after component re-render

// 2. useEffect[callback,[]]
// Call only one time when the component mounted 
// 3. useEffect[callback,[dependency]]


import React from 'react';

import {  useState,useEffect  } from 'react'

function Content() {
    
    const [title,setTitle] = useState('')
    const [albums,setAlbums]  = useState([])
    const typeApi= ["posts","comments","albums","todos", "users"]
    const [type,setType] = useState("posts") 

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/${type}`
        fetch(url)
        .then(res => res.json())
        .then(data => {setAlbums(data)})
        .catch(e => console.log("Error"))
    },[type])


    return(
        <div>
            {typeApi.map(api => (
                <button key = {api} style = {api === type ? {
                    color: 'white',
                    backgroundColor: 'black'}:{}} onClick={() => {setType(api)}} >{api}</button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {albums.map(album => (
                    <li key={album.id}>{album.title || album.name}</li>
                ))}
            </ul>
        </div>

    )
}

export default Content