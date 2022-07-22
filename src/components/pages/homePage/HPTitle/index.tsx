import React, { useEffect, useRef} from "react";
import "./index.scss";

import Button from "../../../../sharedComponents/Button";
import doScroll from "../../../../helpers/functions/doScroll";
import {headerText, paragraphArray, paragraphArrayMin} from "../../../../helpers/constants";
import {loadTitle} from "../../../../helpers/functions/gsap";
import {signUpBlock} from "../../../../helpers/constants/blocks";

const HPTitle = () => {
  const toSignUp = () => doScroll(signUpBlock(), 2000);

  //gsap refs
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    loadTitle(headerRef, paragraphRef, buttonRef, titleRef);
  }, []);

  return (
    <section ref={titleRef} className="hp-title">
      <div className="hp-title__bg"></div>
      <div className="hp-title__container _container">
        <h1 className="hp-title__h1" ref={headerRef}>
          {headerText.split("").map((el, idx) => {
            return <span key={idx + el} style={{position: "relative"}}>{el}</span>;
          })}
        </h1>
        <div className="hp-title__p" ref={paragraphRef}>
          {window.innerWidth < 770
            ?
            paragraphArrayMin.map((el, idx) => {
              return <p key={(idx + 20) + el}>{el}</p>;
            })
            :
            paragraphArray.map((el, idx) => {
              return <p key={(idx + 20) + el}>{el}</p>;
            })}
        </div>
        <div ref={buttonRef}>
          <Button
            className="hp-title__button"
            onClick={toSignUp}
          >
                        Sign up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HPTitle;