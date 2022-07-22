import React, {memo, SyntheticEvent} from "react";
import "./index.scss";

interface IInputFile {
  onChange: (ch: File) => void,
  className: string,
  file: File | null
}

const InputFile = memo<IInputFile>(({onChange, className, file}) => {

  return <>
    <div className={`input-file ${className}`}>
      <input
        className="input-file__input"
        accept=".jpg, .jpeg"
        type="file"
        onChange={(e:SyntheticEvent<EventTarget>) => onChange((e.target as HTMLFormElement).files[0])}/>
      <div className="input-file__button">Upload</div>
      <div className="input-file__name">
        {
          file
            ? file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name
            : " Upload your photo"
        }
      </div>
    </div>
  </>;
});

export default InputFile;