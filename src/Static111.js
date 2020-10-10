import React from "react"
import "./App.css"


const Static111 = () => {
    const videoSource = "https://player.vimeo.com/external/153661858.sd.mp4?s=dc3c9958f8f3d5975ce7fb77555ecc72c7bce5ee&profile_id=112"

    // const videoSource = "https://player.vimeo.com/external/135711658.mobile.mp4?s=f46400b871d4e61e6b08e745969b9cef695a6ded&profile_id=116"

    // const videoSource = "https://player.vimeo.com/external/373726378.sd.mp4?s=50634dd00373643db4095f5fc27ff5a06887ec22&profile_id=139&oauth2_token_id=57447761"
    return (
        <div className="vidcontainer">
            <video autoPlay="autoplay" loop="loop" muted className="video">
                <source src={videoSource} type="video/mp4"/>
                Your browser does not support this video tag.
            </video>

            <div className="caption1">
                <div className="captionsub1">
                    <h1>The Wildlife Keep seeks to protect and serve nature's best by informing animal enthusiasts and connecting them to world resources.</h1>
                </div>
            </div>
        </div>
    )
}
export default Static111
