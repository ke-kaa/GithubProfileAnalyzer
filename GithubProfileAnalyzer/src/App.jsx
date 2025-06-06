import { useState } from 'react'

import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import WebInfo from './components/WebInfo/WebInfo';
import UserCard from './components/UserCard/UserCard';
import RepoList from './components/RepoList/RepoList';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <SearchBar />
      {/* <WebInfo /> */}
      <UserCard />
      <RepoList />
    </>
  )
}

export default App
