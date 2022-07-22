import React, {FC} from "react";
import {useNavigate} from "react-router-dom";

import "./index.scss";
import Button from "../../sharedComponents/Button";

const ErrorPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="error _container">
      <h1 className="error__title">
                404
      </h1>
      <Button className="error__button" onClick={() => navigate("/")}>
                back to home
      </Button>
    </div>
  );
};

export default ErrorPage;