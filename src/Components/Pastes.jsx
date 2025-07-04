import React, { useState } from 'react'
import './Pastes.css'
import { useSelector } from 'react-redux'

const Pastes = () => {
   
  const pastes = useSelector((state) => state.paste.pastes)
  console.log(pastes);
  const [searchTerm, setSearchTerm] = useState('')
  let filteredData = pastes.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
    <div className='mt-20 flex justify-center'>
      <input type="Search" 
      placeholder='Search Paste...'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className='bg-white text-black px-4 py-1 rounded w-[400px]'
      />
    </div>
    <div className='flex flex-col justify-center items-center mt-10 gap-5'>
      {
        filteredData.length >= 0 && filteredData.map((paste) => {
          return (
          <div className='border w-100 px-2 py-2'>
            <div>
          Title:  {paste.title}
            </div>
            <div className='mt-4'>
            Description:  {paste.content}
            </div>
            <div className='flex justify-between mt-2'>
              <button>
                Edit
              </button>
               <button>
                view
              </button>
               <button>
                delete
              </button>
               <button>
                copy
              </button>
               <button>
                share
              </button>
            </div>
            <div className='mt-4'>
            {paste.createdAt}
            </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Pastes