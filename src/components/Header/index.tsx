import React, {useEffect, useRef} from "react";
import "./index.scss";
import {Link} from "react-router-dom";

import Button from "../../sharedComponents/Button";
import doScroll from "../../helpers/functions/doScroll";
import {loadPage} from "../../helpers/functions/gsap";
import LogoText from "../../assets/images/LogoText";
import Logo from "../../assets/images/Logo";
import {signUpBlock, usersBlock} from "../../helpers/constants/blocks";

const Header = () => {
  const toUsersUp = () => doScroll(usersBlock(), 1500);
  const toSignUp = () => doScroll(signUpBlock(), 2000);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const texRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    loadPage(svgRef, buttonsRef, texRef);
  }, []);

  return (
    <header className="header">
      <div className="header__container _container">
        <Link to={"/"} className="header__logo">
          <div className="logo">
            <Logo className="svg-logo" ref={svgRef}/>
          </div>
          <LogoText className="text-header" ref={texRef}/>
        </Link>
        <div ref={buttonsRef} className="header__buttons">
          <Button onClick={toUsersUp}>
            Users
          </Button>
          <Button onClick={toSignUp}>
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
