import React from "react"
import "./App.css"


const Static2vid = () => {
    // const videoSource = "https://cdn.videvo.net/videvo_files/video/free/2019-04/small_watermarked/190408_01_Alaska_Landscapes1_09_preview.webm"

    const videoSource = "https://player.vimeo.com/external/224857514.sd.mp4?s=e15c874a62ce416f9d62c45efac3d7f011dda5ac&profile_id=164"
    return (
        <div className="vidcontainer">
            <video autoPlay="autoplay" loop="loop" muted className="video">
                <source src={videoSource} type="video/mp4"/>
                Your browser does not support this video tag.
            </video>

            <div className="caption">
                <div className="captionsub">
                    <h1>The Wildlife Keep seeks to protect and serve nature's best by informing animal enthusiasts and connecting them to world resources.</h1>
                </div>
            </div>
        </div>
    )
}
export default Static2vid