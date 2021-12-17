import React from 'react'
import {Pfp} from './Pfp';

const Header = () => {
  return (
    <header className='header'>
      <Pfp />
      <title>
        <span>☠️</span>
        <h1 className='gradient-text'>Greetings</h1>
      </title>
      <p>
        I'm Adam, a self-taught Web3 student and enthusiast. My developer quest started not long ago out of personal interest. Prior to that I founded a successful e-commerce business, which I continue to operate. I'm based in Los Angeles, CA, and like to surf, skate, and play chess.
      </p>
      <div className='icons'>
        <a href="https://github.com/difooldev" target="_blank" rel="noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/difool0x" target="_blank" rel="noreferrer">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="mailto:difool0x@gmail.com" target="_blank" rel="noreferrer">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </header>
  )
}

export default Header
