

import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { PiFilesFill } from 'react-icons/pi';
import { ImCross } from 'react-icons/im';

const Card = ({ taskContent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(taskContent);
  const [isCardVisible, setIsCardVisible] = useState(true);

    const handleDelete = () => {
     setIsCardVisible(false);
   };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return isCardVisible ? (
    <div className='relative w-60 h-60 mt-10 ml-10 rounded-[20px] bg-zinc-200 p-5 overflow-hidden'>
      <div className='flex justify-between items-center py-1'>
      <PiFilesFill />
      <ImCross class="cursor-pointer" onClick={handleDelete}/>
      </div>

      {isEditing ? (
        <textarea
          className='border-lg leading-tight'
          value={content}
          onChange={handleContentChange}
        />
      ) : (
        <p className='text-sm mt-3 leading-tight'>{content}</p>
      )}

      <div className='footer absolute bottom-0 bg-slate-500 w-full left-0 h-10 px-8'>
        <div className='flex justify-between items-center py-2'>
          <h6>**</h6>
          <FaEdit className='cursor-pointer' onClick={handleEdit} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Card;


