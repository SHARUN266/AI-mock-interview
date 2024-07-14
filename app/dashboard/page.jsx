import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import Interviewlist from './_components/Interviewlist'

function Dashboard() {
  return (
    <div>
      <h2 className='font-bold text-2xl'>Dashboard</h2>
      <h2 className='text-gray-500'>Create and Start AI Mockup Interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-2'>
        <AddNewInterview/>
      </div>
      {/* Previous Interview list */}
      <Interviewlist/>
    </div>
  )
}

export default Dashboard