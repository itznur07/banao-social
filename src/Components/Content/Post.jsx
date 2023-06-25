import React, { useState } from "react";
import { FaComment, FaEllipsisH, FaShare, FaThumbsUp } from "react-icons/fa";

const PostCard = ({ post }) => {
  const [comment, setComment] = useState("");
  const [editDrop, setEditDrop] = useState(false);
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments((prevComments) => [...prevComments, comment]);
      setComment("");
    }
  };

  const { image, title, personImg, personName } = post;

  return (
    <div className='border border-gray-300 rounded-md p-4 mb-4'>
      <div className='flex justify-between items-center'>
        <div className='flex  items-center'>
          <img
            src={personImg}
            alt='Profile Image'
            className='w-10 h-10 object-cover rounded-full mr-3'
          />
          <div>
            <h3 className='text-lg font-semibold'>{personName}</h3>
            <p className='text-gray-500'>Posted 2 hours ago</p>
          </div>
        </div>
        <div>
          <div onClick={() => setEditDrop(!editDrop)} className='relative'>
            <span className='cursor-pointer px-2 py-1 rounded-md'>
              <FaEllipsisH size={20} />
            </span>
            {editDrop ? (
              <div className='absolute top-10  border space-y-1 right-4 w-44  bg-white shadow-lg p-5 rounded-md'>
                <h1 className='cursor-pointer hover:text-indigo-400'>Edit</h1>
                <h1 className='cursor-pointer hover:text-indigo-400'>Report</h1>
                <h1 className='cursor-pointer hover:text-indigo-400'>
                  Option 3
                </h1>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-gray-800'>{title}</p>
        <img src={image} alt='Post Image' className='mt-4 rounded-lg' />
      </div>
      <div className='border-b border-t border-gray-300 mt-4 flex items-center justify-around'>
        <button className=' text-[#8A8C90] rounded-md px-4 py-2 flex items-center mr-2'>
          <FaThumbsUp className='mr-2' /> Like
        </button>
        <button className=' text-[#8A8C90]  rounded-md px-4 py-2 flex items-center mr-2'>
          <FaComment className='mr-2' /> Comment
        </button>
        <button className=' text-[#8A8C90]  rounded-md px-4 py-2 flex items-center'>
          <FaShare className='mr-2' /> Share
        </button>
      </div>
      <div className='mt-4'>
        <h4 className='text-lg font-semibold mb-2'>Comments</h4>
        <div className='border-t border-gray-300 pt-4'>
          {/* ...existing comments code... */}
          {comments.map((comment, index) => (
            <div key={index} className='flex items-start mb-4'>
              <img
                src='profile-image.jpg'
                alt='Profile Image'
                className='w-8 h-8 rounded-full mr-3'
              />
              <div>
                <p className='text-gray-800 mb-1'>User</p>
                <p className='text-gray-600'>{comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form className='mt-4' onSubmit={handleSubmitComment}>
        <h4 className='text-lg font-semibold mb-2'>Add a Comment</h4>
        <div className='flex'>
          <img
            src={personImg}
            alt='Profile Image'
            className='w-8 h-8 object-cover rounded-full mr-3'
          />
          <input
            type='text'
            value={comment}
            onChange={handleCommentChange}
            placeholder='Write your comment...'
            className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow'
          />
          <button
            type='submit'
            className='bg-blue-500 text-white rounded-md px-4 py-2 ml-2'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCard;
