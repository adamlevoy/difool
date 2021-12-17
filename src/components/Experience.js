import React from 'react'
import JS from '../assets/javascript.png';
import react from '../assets/react.png';
import css from '../assets/css3.png';
import html from '../assets/html5.png';
import graphql from '../assets/graphql.png';
import TS from '../assets/typescript.png';
import solidity from '../assets/solidity.png';
import truffle from '../assets/truffle.png';
import hardhat from '../assets/hardhat.png';

const Experience = () => {
  return (
    <section className='container'>
      <h2>Experience</h2>
      <p>An evolving list of technologies with which I'm familiar.</p>
      <div className='logosContainer'>
        <img className='logo' src={JS} alt="javascript" />
        <img className='logo' src={react} alt="react" />
        <img className='logo' src={solidity} alt="solidity" />
        <img className='logo' src={html} alt="html" />
        <img className='logo' src={css} alt="css" />
        <img className='logo' src={TS} alt="typescript" />
        <img className='logo' src={graphql} alt="graphql" />
        <img className='logo' src={truffle} alt="truffle suite" />
        <img className='logo' src={hardhat} alt="hardhat" />
      </div>

    </section>
  )
}

export default Experience
