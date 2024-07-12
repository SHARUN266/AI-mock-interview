import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (

    <div>
      <Header/>
      {children}
      
    </div>
  )
}

export default DashboardLayout