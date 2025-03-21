import React from 'react'
import Navlink from '../Navlink'

const SideBar = () => {
  const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>

  return (
    <div className='min-h-screen p-6 bg-[#e5e5ff] border-r-2 border-b-2 border-solid border-gray-300'>
      <h2 className="text-3xl font-bold mb-4">Resources</h2>
        <div className='flex flex-col items-start gap-y-4 text-xl font-semibold' >
          <Navlink icon={icon} name=' Health' route='/resources-health'  />
          <Navlink icon={icon}  name=' Education' route='/resources-education' />
          <Navlink icon={icon} name=' Challenges' route='/resources-challenges'/>
          <Navlink icon={icon} name=' Gender Equality' route='/resources-gender-equality' />
          <Navlink icon={icon} name=' Child & Adult' route="/resources-child-and-adult"/>
        </div>
    </div>
  )
}

export default SideBar
