import React, {FC} from "react";
import "./index.scss";

interface IRadioInput{
    id: string,
    name: string,
    className: string,
    children?: React.ReactChild | React.ReactNode,
    onClick: ()=>void
}

const RadioInput:FC<IRadioInput> = ({children,id,name,className,onClick}) => {
  return (
    <div className={`custom-radio ${className}`}>
      <input name={name} id={`radio${id}`} type="radio" onClick={onClick} />
      <label htmlFor={`radio${id}`} >
        {children}
      </label>
    </div>
  );
};

export default RadioInput;