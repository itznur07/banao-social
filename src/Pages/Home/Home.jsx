import React, { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import Content from "../../Components/Content/Content";
import PostPopup from "../../Components/ShowPopup/ShowPopup";
import { AuthContext } from "../../Provider/AuthContext";

const Home = () => {
  const { showPopup } = useContext(AuthContext);

  return (
    <>
      <Banner></Banner>
      {showPopup ? <PostPopup ></PostPopup> : ""}
      <Content></Content>
    </>
  );
};

export default Home;
