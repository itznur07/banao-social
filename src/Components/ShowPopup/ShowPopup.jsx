import React from "react";

const PostPopup = ({ onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-white w-96 p-4 rounded-lg shadow-lg'>
        <h2 className='text-xl font-semibold mb-4'>Create Post</h2>
        {/* Add your form inputs for creating a post */}
        <form>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='text-sm font-medium text-gray-700'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              className='border border-gray-300 rounded-md p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='content'
              className='text-sm font-medium text-gray-700'
            >
              Content
            </label>
            <textarea
              id='content'
              className='border border-gray-300 rounded-md p-2 w-full'
            />
          </div>
          {/* Add more form fields as needed */}
          <div className='flex justify-end'>
            <button
              type='button'
              className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'
            >
              Post
            </button>
            <button
              type='button'
              className='bg-gray-300 text-gray-700 px-4 py-2 rounded-md'
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPopup;
