import React, {useEffect, useState, useCallback} from "react";

import "./index.scss";

import Button from "../../../../sharedComponents/Button";
import Input from "../../../../sharedComponents/Input";
import InputFile from "../../../../sharedComponents/InputFile";
import {useCreateUserMutation} from "../../../../store/api/usersApi";
import ErrorText from "../../../ErrorText";
import doScroll from "../../../../helpers/functions/doScroll";
import Preloader from "../../../Preloader";
import {useCreateUser} from "../../../../hooks/useCreateUser";
import {useActions} from "../../../../helpers/hooks/useActions";
import {usersBlock} from "../../../../helpers/constants/blocks";

import Position from "./Position";

const HPForm = () => {
  const {nullPages, setDisabledUsersButton} = useActions();
  //работа с апи
  const [createUser, {data, isLoading, error}]: any = useCreateUserMutation();
  //привязка данных
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  //кнопочка(^^)
  const [disabled, setDisabled] = useState<boolean>(true);
  //ф-я файла
  const inputFile = useCallback((f: File) => {
    if (f) {
      setFile(f);
    } else {
      setFile(null);
    }
  }, []);

  //ф-я создания
  const {formErrors, handleCreateUser} = useCreateUser(name, email, phone, position, file, createUser, setDisabled);

  useEffect(() => {
    if (data) {// когда юзер создался

      setDisabledUsersButton(false);
      nullPages();
      setName("");
      setEmail("");
      setPhone("");
      setPosition("");
      setFile(null);
      doScroll(usersBlock(), 2000);
      setDisabled(false);
    }
  }, [data,nullPages,setDisabledUsersButton]);

  return (
    <section className="hp-form" >
      <div className="hp-form__container _container">
        <h1 className="hp-form__title">
          Working with POST request
        </h1>
        <form className="hp-form__form">
          <Input
            label={"Your name"}
            type="text"
            value={name}
            onChange={setName}
            valid={formErrors.name}
            className="hp-form__form-input"
          />
          <Input
            label={"Email"}
            type="email"
            value={email}
            onChange={setEmail}
            valid={formErrors.email}
            className="hp-form__form-input"
          />
          <Input
            label={"Phone"}
            helpertext={"+38 (XXX) XXX - XX - XX"}
            type={"number"}
            value={phone}
            onChange={setPhone}
            valid={formErrors.phone}
            className="hp-form__form-input"
          />

          <Position key={`${data}`} setPosition={setPosition}/>

          {formErrors.position
            && <ErrorText error={{data: {message: formErrors.position}}}/>}

          <InputFile
            file={file}
            className="hp-form__form-file"
            onChange={inputFile}/>

          {formErrors.file && <ErrorText error={{data: {message: formErrors.file}}}/>}

          {isLoading
            ? <Preloader/>
            : error &&
            Object.keys(error.data.fails).map((el) =>
              error.data.fails[el].map((text: string) =>
                <ErrorText text={text} key={el}/>
              )
            )
          }

        </form>

        <Button
          className="hp-form__button"
          disabled={disabled}
          onClick={handleCreateUser}
        >
          Sign up
        </Button>
      </div>
    </section>
  );
};

export default HPForm;