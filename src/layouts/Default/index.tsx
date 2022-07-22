import React from "react";
import {Outlet} from "react-router-dom";
import {FC} from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Default: FC = () => {
  return (
    <div className="page">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Default;