import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
import { useEffect } from 'react';

const ViewPastes = () => {

  const {id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0]
  console.log('paste', paste)

  

  return (
    <div>
        <div className='mt-10 flex justify-center'>
        <input
         type="text"
         placeholder='enter your titile'
         value={paste.title}
         disabled
        onChange={(e) => setTitle(e.target.value)}
         className='bg-white text-black border-black px-3 py-1 w-80'
        /> 
      </div>

      <div className='flex justify-center mt-8 rounded'>
     <textarea
     value={paste.content}
     placeholder='enter your text here'
     disabled
     onChange={(e) => setValue(e.target.value)}
     className='bg-white w-80 text-black px-3 py-2'
     rows={20}
     />
      </div>
    </div>
  )
}

export default ViewPastes