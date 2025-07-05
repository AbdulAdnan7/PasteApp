import React, { useState } from 'react'
import './Pastes.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeToPaste } from '../redux/pasteSlice'
import toast from 'react-hot-toast'

const Pastes = () => {
  const [isSharing, setIsSharing] = useState(false);

   
  const pastes = useSelector((state) => state.paste.pastes)
  console.log(pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('')
  let filteredData = pastes.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleDelete = (pasteId) => {
   dispatch(removeToPaste(pasteId))
  }


const handleShare = async (paste) => {
    const url = `${window.location.origin}/pastes/${paste._id}`;

    if (isSharing) {
      toast.error('Please wait, sharing already in progress...');
      return;
    }

    if (!paste._Id || !paste.title || !paste.content) {
      toast.error('Invalid paste data');
      return;
    }

    if (navigator.share) {
      try {
        setIsSharing(true);
        await navigator.share({
          title: paste.title,
          text: paste.content.slice(0, 100),
          url,
        });
        toast.success('Shared successfully');
      } catch (err) {
        console.error('Share failed:', err);
        toast.error('Sharing failed');
      } finally {
        setIsSharing(false);
      }
    } else {
      navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!');
    }
  };

  return (
    <>
    <div className='mt-20 flex justify-center' >
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
          <div key={paste._id} className='border w-100 px-2 py-2'>
            <div>
          Title:  {paste.title}
            </div>
            <div className='mt-4'>
            Description:  {paste.content}
            </div>
            <div className='flex justify-between mt-2'>
              <button>
                <a href={`/?pasteId=${paste?._id}`}>
                Edit
                </a>
              </button>
               <button>
                <a href={`/pastes/${paste?._id}`}>
                  view
                </a>
              </button>
               <button onClick={() => handleDelete(paste?._id)}>
                delete
              </button>
               <button onClick={() => {
                navigator.clipboard.writeText(paste.content)
                toast.success('copied to clipboard')
               }}>
                copy
              </button>
               <button onClick={() => handleShare(paste)}>
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