import React from 'react'
import Button from './Button'

const Projects = () => {
  return (
    <section className='container'>
      <h2>Projects</h2>
      <p>A few personal projects. All works in progress.</p>
      <div className='projectsContainer'>
        <div className='projectCard'>
          <span className='projectIcon'>👹</span>
          <h3>D&D NFT</h3>
          <p>Mint a D&D 5e character!</p>
          <Button url="https://dndnft.netlify.app" text="Enter App" />
        </div>
        <div className='projectCard'>
          <span className='projectIcon'>✨</span>
          <h3>Web3 Msg Me</h3>
          <p>Send me a message via Web3!</p>
          <Button url="https://w3mm.netlify.app" text="Enter App" />
        </div>
        <div className='projectCard'>
          <span className='projectIcon'>😍</span>
          <h3>NFTinder</h3>
          <p>A dating-style NFT discovery app!</p>
          <Button url="https://nftinder.netlify.app" text="Enter App" />
        </div>
      </div>
    </section>
  )
}

export default Projects
