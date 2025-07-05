import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
import { useEffect } from 'react';

const Home = () => {
  //for title to add and update using input
    const [title, setTitle] = useState('');
    //for value of textare
    const [value, setValue] = useState('');
    //for searching paste
    const [searchParams, setSearchParams] = useSearchParams();
    //pasteId
    const pasteId = searchParams.get('pasteId');
    //using useDispach for adding,updating and deleting from pasteSlice
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes)

  useEffect(() => {
       if(pasteId) {
        const paste = allPastes.find((p) => p._Id === pasteId);
        setTitle(paste.title);
        setValue(paste.content)
       }
  }, [pasteId])

    function createPaste() {
      const paste = {
        title: title,
        content: value,
        _id: pasteId ||  Date.now().toString(35),
      createdAt: new Date().toISOString(),
      }
       console.log("Saving paste:", paste); 
      
    if(pasteId) {
    dispatch(updateToPaste(paste))
    } else {
     dispatch(addToPaste(paste))
    }
   
    setTitle('');
    setValue('');
    searchParams({})
    }
  return (
    <div>
      
      <div className='mt-10 flex justify-center'>
        <input
         type="text"
         placeholder='enter your titile'
         value={title}
        onChange={(e) => setTitle(e.target.value)}
         className='bg-white text-black border-black px-3 py-1'
        /> <button onClick={createPaste} className='bg-cyan-500 hover:bg-cyan-600 px-2 py-1 ml-2 rounded'>{
            pasteId ? 'update paste' : 'create paste'
        }</button>
      </div>

      <div className='flex justify-center mt-8 rounded'>
     <textarea
     value={value}
     placeholder='enter your text here'
     onChange={(e) => setValue(e.target.value)}
     className='bg-white w-80 text-black px-3 py-2'
     rows={20}
     />
      </div>
    </div>
  )
}

export default Home
