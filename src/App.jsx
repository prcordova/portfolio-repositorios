import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/global.scss'
import { RepositoryList } from './components/RepositoryList'
 



function App() {


  return (
    <>
    <Header/>
      <RepositoryList />
      <Footer/>

    </>
  )
}

export default App
