import React, {useState} from 'react';
import './App.css';
import Parent from './parent.js';
import counterContext from './counterContext.js';
function App() {

 let [count, setCount]=useState(28);

  return (
 <counterContext.Provider value={count}>
    <div>
      <Parent name="abdul moiz khanzada"/>
    </div>
     </counterContext.Provider>
  );
}

export default App;
