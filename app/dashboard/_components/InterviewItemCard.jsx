import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interviewInfo}) {
   const router=useRouter()
    const onStart=()=>{
        console.log("first")
       router.push(`/dashboard/interview/${interviewInfo?.mockId}`)
    }
    const onFeedback=()=>{
        router.push(`/dashboard/interview/${interviewInfo.mockId}/feedback`)
    }
  return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-primary'>{interviewInfo?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interviewInfo?.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-500'>Created At: {interviewInfo.createdAt}</h2>
        <div className='flex justify-between mt-2 gap-5'>
           
            <Button size="sm" variant="outline"  className="w-full" onClick={onFeedback}>Feedback</Button>
        
            <Button size="sm" className="w-full" onClick={onStart}>Start</Button>
        </div>
    </div>
  )
}

export default InterviewItemCard