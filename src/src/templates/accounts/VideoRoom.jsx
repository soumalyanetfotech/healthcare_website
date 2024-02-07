import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage =() =>{
    const {roomId} = useParams();

    const myMeeting = async(element) =>{
        const appId = 1402392674;
        const serverSecret ="73530e7eb653b241d54aff332d4e9fa3";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId , serverSecret , roomId, Date.now().toString(),"Name");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            sharedLinks: [
                {
                    Name: "Copy Link",
                    url: `http://localhost:3000/room/${roomId}`,
                },
            ],
           scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton:true,
            showRoomTimer:true,
            maxUser:2,
            
          
        });


        
    };
    return <div>
        <div ref={myMeeting} style={{width: "100vw" , height: "100vh"}}/>
    </div>
};

export default RoomPage;