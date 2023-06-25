import React, { useEffect, useState } from "react";
import {
  FaExclamationCircle,
  FaMapMarkerAlt,
  FaPenAlt,
  FaPencilAlt,
  FaRegWindowClose,
  FaThumbsUp,
  FaUniversity,
} from "react-icons/fa";
import PostCard from "./Post";

const Content = ({ join }) => {
  const [locationEdit, setLocationEdit] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /** POST DATA */
  const [posts] = useState([
    {
      id: 0,
      image:
        "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1103&q=80",
      icon: <FaPenAlt />,
      tag: "Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      personImg:
        " https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      personName: "Sarthak Kamra",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      icon: <FaUniversity />,
      tag: "Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      personImg:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      personName: "Sarah West",
    },
  ]);

  return (
    <>
      {isMobile ? (
        <div className='mt-14  mx-auto p-5 absolute flex flex-col justify-center'>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <>
          {" "}
          <div className='mx-auto mt-10' style={{ width: "1040px" }}>
            <div className='grid grid-cols-12 gap-20'>
              <div className='col-span-8'>
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              <div className='col-span-4'>
                <div className='flex items-center justify-between border-b pb-3 border-[#E0E0E0]'>
                  <div className='flex items-center space-x-2 cursor-pointer'>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    {locationEdit ? (
                      <input
                        type='text'
                        className='border-b p-1 outline-none'
                        placeholder='Enter your location'
                      />
                    ) : (
                      <span>Noida, India</span>
                    )}
                  </div>
                  <div
                    onClick={() => setLocationEdit(!locationEdit)}
                    className='cursor-pointer'
                  >
                    {locationEdit ? <FaRegWindowClose /> : <FaPencilAlt />}
                  </div>
                </div>
                <div className='flex items-center space-x-3 mt-5 text-sm text-slate-500 '>
                  <span>
                    <FaExclamationCircle />
                  </span>
                  <p className=''>
                    Your location will help us serve better and extend a
                    personalised experience.
                  </p>
                </div>
                {join ? (
                  <div>
                    <div className='flex items-center space-x-2 text-lg font-medium mt-8 text-[#6A6A6B]'>
                      <span>
                        <FaThumbsUp />
                      </span>
                      <span className='uppercase'>Recommended Groups</span>
                    </div>
                    <div className='mt-5'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center space-x-2'>
                          <img
                            src='https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
                            className='w-11 h-11 rounded-full object-cover'
                            alt=''
                          />{" "}
                          <span className='font-medium'>Leisure</span>
                        </div>
                        <button className='bg-slate-300 p-1.5 font-medium px-3 rounded-md'>
                          Follow
                        </button>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center space-x-2'>
                          <img
                            src='https://images.unsplash.com/photo-1601932151223-b66cde61b081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
                            className='w-11 h-11 rounded-full object-cover'
                            alt=''
                          />{" "}
                          <span className='font-medium'>Activism</span>
                        </div>
                        <button className='bg-slate-300 p-1.5 font-medium px-3 rounded-md'>
                          Follow
                        </button>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center space-x-2'>
                          <img
                            src='https://images.unsplash.com/photo-1652950157010-47eac43b7297?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                            className='w-11 h-11 rounded-full object-cover'
                            alt=''
                          />{" "}
                          <span className='font-medium'>MBA</span>
                        </div>
                        <button className='bg-slate-300 p-1.5 font-medium px-3 rounded-md'>
                          Follow
                        </button>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center space-x-2'>
                          <img
                            src='https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
                            className='w-11 h-11 rounded-full object-cover'
                            alt=''
                          />{" "}
                          <span className='font-medium'>Philosophy</span>
                        </div>
                        <button className='bg-slate-300 p-1.5 font-medium px-3 rounded-md'>
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Content;
