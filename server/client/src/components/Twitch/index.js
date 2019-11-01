import React from "react";
import TwitchEmbedVideo from "react-twitch-embed-video"

function Twitch() {
    return (
        <TwitchEmbedVideo
            autoplay
            channel="riotgames"
            height="480"
            layout="video"
            muted={false}
            targetClass="twitch-embed"
            width="960"
        />

    );
}

export default Twitch;