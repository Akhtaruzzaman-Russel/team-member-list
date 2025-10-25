import React from 'react'
import MembersProfile from './components/MembersProfile'



const members = [
    {
      id: 1,
      name: "Jordan Walke",
      role: "React Js Developer",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 2,
      name: "Ryan Dahl",
      role: "Node Js Developer",
      image: "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
      id: 3,
      name: "Guillermo Rauch",
      role: "Next Js Developer",
      image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
      id: 4,
      name: "Adam Wathan",
      role: "Tailwindcss Developer",
      image: "https://randomuser.me/api/portraits/men/78.jpg"
    },
    {
      id: 5,
      name: "TJ Holowaychuk",
      role: "Express Js Developer",
      image: "https://randomuser.me/api/portraits/men/77.jpg"
    },
    {
      id: 6,
      name: "Jordan Walke",
      role: "MongoDB Developer",
      image: "https://randomuser.me/api/portraits/men/61.jpg"
    },
    {
      id: 7,
      name: "Jordan Walke",
      role: "MongoDB Developer",
      image: "https://randomuser.me/api/portraits/women/0.jpg"
    },
    {
      id: 8,
      name: "Jordan Walke",
      role: "MongoDB Developer",
      image: "https://randomuser.me/api/portraits/women/74.jpg"
    },
    {
      id: 8,
      name: "Jordan Walke",
      role: "MongoDB Developer",
      image: "https://randomuser.me/api/portraits/women/64.jpg"
    },
]

const App = () => {
  return (
    <div className='min-h-screen p-6 max-w-screen-xl mx-auto'>
      
      <h1 className='text-3xl font-bold text-center text-blue-600 mb-6'>Team members List</h1>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {
                    members.map( member => (
                         <MembersProfile  key={member.id} name={member.name} role={member.role} image={member.image}/>
                    ))
                  }
                   {/* Profile Card  */}
                   
              </div>
       </div>
  )
}

export default App