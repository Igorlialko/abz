import React, {FC, useEffect, useRef} from "react";
import "./index.scss";
import gsap from "gsap";

interface PButton {
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  children?: React.ReactChild | React.ReactNode
}

const Button: FC<PButton> =
  ({className, disabled = true, onClick, children, ...args}) => {
    const but: any = useRef(null);

    useEffect(() => {
      gsap.fromTo(
        but.current,
        {opacity: 0},
        {duration: 1, opacity: 1});
    }, []);

    return (
      <button
        ref={but}
        className={`button ${!disabled && "disabled"} ${className}`}
        onClick={onClick}
        {...args}>
        {children}
      </button>
    );
  };

export default Button;