import React from "react";

import HPTitle from "../../components/pages/homePage/HPTitle";
import HPUsers from "../../components/pages/homePage/HPUsers";
import HPForm from "../../components/pages/homePage/HPForm";

const HomePage = () => {
  return (
    <main className="main">
      <HPTitle/>
      <HPUsers />
      <HPForm />
    </main>
  );
};

export default HomePage;