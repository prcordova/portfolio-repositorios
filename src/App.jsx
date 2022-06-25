import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/global.scss'
import CoverLetter from './components/CoverLetter'
import { RepositoryList } from './components/RepositoryList'
import SocialMedia from './components/SocialMedia'



function App() {
  const userData = {
    name: 'Pedro Ricardo Oliveira Cordova',
    role: 'Web Developer',
    graduation: 'Graduated at Uniasselvi university in System and analysis development - 2021 + years of experience with web development',
    hobbies: 'I love to play Guitar, Games, Read some Books, and walk on the Nature.'
  }

  return (
    <>
      <Header />
      <SocialMedia />
      <div className="userInfo">
        <h1>{userData.name}</h1>
        <p>{userData.role}</p>
        <p>{userData.graduation}</p>
        <p>{userData.hobbies}</p>
      </div>
      <RepositoryList />
      <CoverLetter />
      <Footer />

    </>
  )
}

export default App
