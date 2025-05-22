import { useState } from 'react'

import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import WebInfo from './components/WebInfo/WebInfo';
import UserCard from './components/UserCard/UserCard';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <SearchBar />
      <WebInfo />
    </>
  )
}

export default App
