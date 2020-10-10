import React, {Component} from "react"
import Typewriter from 'typewriter-effect';

const AboutPage = () => {
    return (
        <div>
            <img className="aboutpic" src="https://cdn.pixabay.com/photo/2020/05/29/17/29/ant-5235935__480.jpg"/>

            <h3>The WildLife Keep was designed by software engineer and wildlife lover Fifi LaRoux. LaRoux, along with her team of specialists, scientists, biologists, and environmentalists teamed together to share ideas and form a platform to educate the public on the crucial need to save animals around the world. The Keep headquarters are based on a remote island off the eastern African coast.</h3>

               <h3> The Wildlife Keep is committed not only to the preservation of diverse animals, but are passionate about diversity and inclusion on their team. Slated for 2024, a sister organization, The Habitat Keep will be launched with a team of solely minority scientists, biologists, and environmentalists--changing the landscape of science and tech.</h3>

               {/* <p> The WildLife Keep team welcomes you and thanks you for your dedication to wildllife preservation.
            </p> */}
            <Typewriter onInit={(typewriter) => {
      typewriter.typeString('<h3><span style="color: brown;">The WildLife Keep team welcomes you and thanks you for your dedication to wildllife preservation.</span></h3>')
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
  />
        </div>
    )
}

export default AboutPage