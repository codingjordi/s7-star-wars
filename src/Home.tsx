import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="star-wars-intro ">
        <p className="intro-text">
          A few days ago, during...
        </p>
        <h2 className="main-logo">
          <img src="./src/assets/star-wars-red-logo.png" />
        </h2>
        <div className="main-content">
          <div className="title-content">
            <p className="content-header font-black underline">EPISODES IV-VI<br />A Movie Marathon</p>
            <br />
            <p className="content-body">
              After years of galactic silence, civilization is on the brink of a new Star Wars release. Now, with the Force preparing to awaken, the people of Earth seek solace in films of old. With nowhere to turn, they gather in great numbers and watch the original trilogy without rest. Three films. 6 hours. 24 minutes. Popcorn. Slushies. Total elation.
            </p>
            <NavLink to='/starships'>
              <a href="" className="space-button">Check The Starships Now!</a>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}