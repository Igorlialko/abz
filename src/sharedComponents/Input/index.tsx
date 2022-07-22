import React, {memo} from "react";
import "./index.scss";

interface IInput{
    label: string,
    helpertext?: string,
    type: string,
    value: string,
    valid: string,
    onChange: (c: string)=>void,
    className: string
}

const Input = memo<IInput>(({label, helpertext, type, value, valid,onChange,className}) => {
  return (
    <div className={`global-input ${valid && "validation"} ${className}`}>
      <input value={value}
        type={type}
        onChange={(e)=>onChange(e.target.value)}
        className="global-input__input" />
      <label data-label={label} data-helpertext={valid?valid:helpertext}
        className={`global-input__label ${value&&"value"}`}
      />
    </div>
  );
});

export default Input;

