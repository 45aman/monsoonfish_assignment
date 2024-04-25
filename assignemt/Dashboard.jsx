import React from 'react'
import Button from './src/Button'
import ProjectDetail from './src/Dashboard/ProjectDetail'

function Dashboard() {
  return (
    <>
    <div className="flex gap-2 justify-between px-20 pt-[0.75rem] w-full whitespace-nowrap leading-[120%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <div className="text-Black-Text-1 font-roboto font-bold text-xlg leading-relaxed tracking-wide pt-[1.25rem] mt-[0.75]">
      Dashboard
    </div>

    <Button />
    
  </div>
  <div className='px-20'>  <ProjectDetail />

  

</div>

  
  </>
  )
}

export default Dashboard