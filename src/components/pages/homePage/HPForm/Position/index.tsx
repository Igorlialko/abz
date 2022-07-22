import React, {memo} from "react";

import RadioInput from "../../../../../sharedComponents/RadioInput";
import {useGetPositionsQuery} from "../../../../../store/api/usersApi";
import Preloader from "../../../../Preloader";
import ErrorText from "../../../../ErrorText";

interface IPosition{
    setPosition: (id: string)=> void
}

const Position = memo<IPosition>(({setPosition}) => {
  const {data, isLoading, error}:any = useGetPositionsQuery(null);
  return (
    <>
      <p className="hp-form__form-p">
                Select your position
      </p>
      {isLoading ? <Preloader/>
        : error ? <ErrorText error={error}/>
          : data.positions.map(({id, name}:{id: string, name: string}) =>
            <RadioInput
              key={id}
              onClick={() => setPosition(id)}
              className="hp-form__form-radio"
              name="rad"
              id={id}>
              {name}
            </RadioInput>
          )
      }
    </>
  );
});

export default Position;