import React from "react"
import Typewriter from 'typewriter-effect';
import "./cssfiles/Static1.css"

const Static1 = () => {
    // return <div><h1>Static</h1><hr></hr><br></br></div>

    return <div className="type">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Typewriter onInit={(typewriter) => {
      typewriter.typeString('Welcome to <span style="color: brown;">The Wildlife Keep</span>.')
        .callFunction(() => {
          // console.log('String typed out!');
        })
        .pauseFor(2500)
        .deleteAll()
        .callFunction(() => {
          // console.log('All strings were deleted');
        })
        .start();
    }}
    options={{
      autoStart: true,
      loop: true,
    }}
  /></div>
}

export default Static1


