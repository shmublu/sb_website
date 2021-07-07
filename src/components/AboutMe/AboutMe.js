import React from 'react'
import './AboutMe.css';
import pictureMe from './pictureMe.JPG'
import Typewriter from 'typewriter-effect';

export default function AboutMe() {
    return (
        <div className="AboutMe">
            <p>I'm currently in my second year studying at Columbia University's School of Engineered for a B.S in Computer Science. As a programmer by nature, I am constantly experimenting with a variety of programming languages and tools(some of which you can find on my GitHub above!) My research focuses on program synthesis, specifically SyGuS. I'm an avid hiker, runner, and reader— on average, I go through three books a week!</p>
            <div className="personalPicture"><img src={pictureMe}></img>
            <div className="Typewriter">
            <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Researcher').pauseFor(4500).deleteAll().typeString('Programmer').pauseFor(4500).deleteAll().typeString('Guitarist').pauseFor(4500).deleteAll().typeString('Student').pauseFor(4500).deleteAll().typeString('Shmuel Berman').start()
  }}
  options={{
      delay:50,
    deleteSpeed:50,
  }}
/>
</div>
            </div>
        </div>
    )
}
