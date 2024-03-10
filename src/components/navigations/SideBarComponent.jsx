import { Clock3, GraduationCap, Home, MessageSquareShare, Settings, Users } from 'lucide-react'
import React from 'react'


const SideBarComponent = () => {
  return (
    <div className='w-full flex flex-col gap-y-7 items-center mt-16'>
     <Home />
     <Users />
     <MessageSquareShare />
     <GraduationCap />
     <Clock3 />
     <Settings />
    </div>
  )
}

export default SideBarComponent