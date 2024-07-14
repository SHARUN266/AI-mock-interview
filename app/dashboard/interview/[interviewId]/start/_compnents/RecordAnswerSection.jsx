"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from "lucide-react";

function RecordAnswerSection() {
  const [userAnswer,setUserAnswer]=useState('');
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });
  if (error) return <p>{error}‍</p>;

  useEffect(()=>{
       results.map((result)=>{
        setUserAnswer(prevAns=>prevAns+result?.transript)
       })
  },[results])

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: "50vh",
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button variant="outline" onClick={isRecording?stopSpeechToText:startSpeechToText} className="my-10">
        {isRecording?<h2 className="flex items-center justify-center text-red-600 gap-2">
          <Mic/>
          Recording...
        </h2> :'Record Answer'}
        
      </Button>

     
    </div>
  );
}

export default RecordAnswerSection;
