/** @format */

import { useState } from 'react';
import Todos from './Todo';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Todos></Todos>
    </>
  );
}

export default App;
