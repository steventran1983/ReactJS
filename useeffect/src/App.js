import './App.css';

import Content from './Content';

import { useState } from 'react'
import { useEffect } from 'react'


function App() {
  const [show,setShow] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Click Me</button>
      {show && <Content/>}
    </div>
  );
}

export default App;
