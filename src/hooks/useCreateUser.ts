import {useEffect, useState} from "react";

import {useGetTokenQuery} from "../store/api/usersApi";

import {useValidation} from "./useValidation";

export const useCreateUser = (
  name: string,
  email: string,
  phone: string,
  position: string,
  file: any,
  createUser: any,
  setDisabled: any,
) => {
  const {validation, formErrors} = useValidation(name, email, phone, position, file);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {data: tokenData} = useGetTokenQuery(null);

  const handleCreateUser = () => {
    if (tokenData?.token) {
      validation();
      setIsSubmitting(true);
    } else {
      alert("У вас нет прав для создания пользователя");
    }
  };

  useEffect(() => {// когда прошла валидация
    let st = "";
    for (var k in formErrors) {
      st += formErrors[k]
    }
    if (!st && isSubmitting) {
      var formData = new FormData();
      formData.append("position_id", position);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", "+" + phone);
      formData.append("photo", file);
      createUser({user: formData, token: tokenData?.token});
      setDisabled(true);
    } else {
      setDisabled(false);
    }/* eslint-disable */
  }, [formErrors]);

  return {formErrors, handleCreateUser}
}