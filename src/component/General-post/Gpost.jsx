import React from "react";
import AdminNav from "../Admin/AdminNav";
import Posts from "./Posts";
import TrendingPostcard from "../General-post/TrendingPostcard";

const Gpost = () => {
  return (
    <>
      <TrendingPostcard />
      <Posts />
    </>
  );
};

export default Gpost;
