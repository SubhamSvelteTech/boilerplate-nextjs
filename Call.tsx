"use client";

// import "@livekit/components-styles";
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer,
  formatChatMessageLinks,
  ControlBar,
} from "@livekit/components-react";
import { useEffect, useState } from "react";
// import axios, { all } from "axios";

// const serverUrl = "<wsURL>";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tSm9pbiI6dHJ1ZSwicm9vbSI6Im15Um9vbSJ9LCJpYXQiOjE2OTU4MzIyODEsIm5iZiI6MTY5NTgzMjI4MSwiZXhwIjoxNjk1ODUzODgxLCJpc3MiOiJBUElNc3BCNFJTUHNzaVoiLCJzdWIiOiJwcmluY2UiLCJqdGkiOiJwcmluY2UifQ.ymKhkp9veJCx9mQvWa3pJGvKS8CQiowHPrNF6jeeg9A";

export default function Call() {
  const [token, setToken] = useState("");
  const [allowed, setAllowed] = useState(false);
//   const getToken = async (name: string) => {
//     const resp = await axios.get(`http://localhost:3005/getToken?name=${name}`);
//     if (resp.status === 200) {
//       console.log(resp, "resp");
//       // callRoom(resp?.data);
//       setToken(resp?.data);
//     }
//   };

  useEffect(() => {
    navigator?.mediaDevices
      ?.getUserMedia({ audio: true, video: true })
      .then(function (stream)
 {
        // const name = localStorage.getItem("name");
        // if (name) {
        //   getToken(name);
        // }
        // getToken("prince")

        setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tSm9pbiI6dHJ1ZSwicm9vbSI6Im15Um9vbSJ9LCJpYXQiOjE3MTgxOTEzNjEsIm5iZiI6MTcxODE5MTM2MSwiZXhwIjoxNzE4MjEyOTYxLCJpc3MiOiJBUElNc3BCNFJTUHNzaVoiLCJzdWIiOiJzdW5ueSIsImp0aSI6InN1bm55In0.p0Sr9L3_4nfPGvKhQ92IsTK4pUK0Nl1_EBjFPJRngZ0")
        setAllowed(true);
        console.log("You let me use your mic!");
      })
      .catch(function (err) {
        console.log("No mic for you!");
      });

    return () => setToken("");
  }, []);
  useEffect(() => {}, []);
  const url = "wss://video-app-18or3v8b.livekit.cloud";
  if (!token) {
    return <h2>Getting Token ....</h2>;
  }
  if (allowed) {
    console.log(allowed, "allowed", token);
    return (
      <LiveKitRoom
        // video={true}
        // audio={true}
        token={token}
        // connectOptions={{ autoSubscribe: false }}
        serverUrl={url}
        // Use the default LiveKit theme for nice styles.
        data-lk-theme="default"
        style={{ height: "100vh" }}
      >
        
        <VideoConference />
      </LiveKitRoom>
    );
  }else {
    return (
      <div>

      </div>
    )
  }
}