import {useState} from "react";


export const useValidation = (name: string, email: string, phone: string, position: string, file: Blob,) => {
  const [formErrors, setFormErrors] = useState<{ [x: string]: string }>({
    name: "",
    email: "",
    phone: "",
    position: "",
    file: ""
  });
  const validation = () => {
    const errors = {
      name: "",
      email: "",
      phone: "",
      position: "",
      file: ""
    };
    /* eslint-disable */
    const regexEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
    const regexPhone = /^[\+]{0,1}380([0-9]{9})$/i;
    /* eslint-enable */
    if (!name) {
      errors.name = "Cannot be blank";
    } else if (name.length < 2 || name.length > 60) {
      errors.name = "Username should contain 2-60 characters";
    }

    if (!email) {
      errors.email = "Cannot be blank";
    } else if (!regexEmail.test(email)) {
      errors.email = "User email, must be a valid email according to RFC2822";
    }

    if (!phone) {
      errors.phone = "Cannot be blank";
    } else if (!regexPhone.test(phone)) {
      errors.phone = " Number should start with code of Ukraine +380";
    }

    if (!position) {
      errors.position = "Please click your position";
    }

    if (!file) {
      errors.file = "Please select photo";
    } else if (file.type !== "image/jpeg") {
      errors.file = "The photo format must be jpeg/jpg type";
    } else if (file.size > 5000000) {
      errors.file = "The photo size must not be greater than 5 Mb.";
    }
    setFormErrors(errors);
  };
  return {
    formErrors,
    validation
  };
};