
import React, {FC, useEffect, useState} from "react";

import Card from "../../assets/images/Card";


interface IImage {
    src: string,
    alt: string
}

const Image: FC<IImage> = ({src, alt}) => {
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    fetch(src).then(response => {
      if (response.ok) {
        setLink(src);
      } else {
        setLink("");
      }
    }).catch(() => {
      setLink("");
    });
  }, [src]);

  if (!link) {
    return <Card/>;
  }

  return (
    <img src={link} alt={alt} />
  );

};
export default Image;