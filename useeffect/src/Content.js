
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
// - callback functions be called after copontne re-render

// 2. useEffect[callback,[]]
// 3. useEffect[callback,[dependency]]


import React from 'react';

import {  useState,useEffect  } from 'react'

function Content() {
    
    const [title,setTitle] = useState('')
    console.log(title);

    useEffect(() =>{
        console.log('Mounted');
    })


    return(
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}

export default Content