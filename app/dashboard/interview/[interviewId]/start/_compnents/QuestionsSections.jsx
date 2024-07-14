import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSections({activeQuestionIndex,mockInterViewQuestion}) {
    
   const textToSpeach=(text)=>{
    if('speechSynthesis' in window){
      const speech= new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }else{
      alert('Sorry, Your browser does not sport text to speech (recommended browser Chrome)')
    }

   }
  return mockInterViewQuestion&&(
    <div className='p-5 border rounded-lg my-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center'>
            {mockInterViewQuestion&&mockInterViewQuestion?.map((question,index)=>(
                 <h2 key={index+1} className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex==index&&'!bg-primary text-white'}`}>Question #{index+1}</h2>
            ))}
        </div>
        <h2 className='my-5 text-sm md:text-lg'>
          <strong>Q.</strong>  {mockInterViewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume2 className='cursor-pointer' onClick={()=>textToSpeach(mockInterViewQuestion[activeQuestionIndex]?.question)} />
        <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
            <h2 className='flex gap-2 items-center text-blue-700'>
                <Lightbulb/>
                <strong>Note:</strong>
            </h2>
            <h2 className='my-2 text-sm text-blue-700'>
                {process.env.NEXT_PUBLIC_QUESTION_NOTE}
            </h2>
        </div>
    </div>
  )
}

export default QuestionsSections