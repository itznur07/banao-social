import React, { useEffect, useState } from "react";
import { FaPenAlt, FaUniversity } from "react-icons/fa";
import FriendRequest from "../FriendReq/FriendRequest";
import Friends from "../Friends/Friends";
import GroupConversation from "../GroupConversation/GroupConversation";
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
          <div className='max-w-7xl mx-auto mt-10'>
            <div className='grid grid-cols-12 gap-20'>
              <div className="col-span-3">

              </div>
              <div className='col-span-5'>
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              <div className='col-span-4'>
                <FriendRequest></FriendRequest>
                <Friends></Friends>
                <GroupConversation></GroupConversation>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Content;
