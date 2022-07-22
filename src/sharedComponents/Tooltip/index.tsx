import React, {FC} from "react";
import "./index.scss";

interface ITooltip {
    content: string,
    children?: React.ReactChild | React.ReactNode
}

const Tooltip: FC<ITooltip> = ({children, content}) => {

  return (
    <div className="tooltip">
      <div className="tooltip__content">
        <span>{content}</span>
      </div>
      <div className="tooltip__target">
        {children}
      </div>
    </div>
  );
};

export default Tooltip;