import React from "react";
import Banner from "../../Components/Banner/Banner";
import Content from "../../Components/Content/Content";
import ContentNav from "../../Components/ContentNav/ContentNav";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <ContentNav></ContentNav>
      <Content></Content>
    </>
  );
};

export default Home;
