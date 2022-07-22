import React, {FC} from "react";

interface IErrorText {
  error?: any,
  text?: string
}

const styleText: any = {color: "var(--error)", textAlign: "center", margin: "10px 0"};

const ErrorText: FC<IErrorText> = ({error, text}) => {
  return (<>
    {error && <p style={{color: "var(--error)",}}>{error.data?.message}</p>}
    {text && <p style={styleText}>{text}</p>}
  </>);
};

export default ErrorText;