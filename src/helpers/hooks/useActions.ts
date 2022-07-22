import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";

import {userActions} from "../../store/reducers/homeReducer";
import {AppDispatch} from "../../store/store";

const actions = {
  ...userActions
};

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actions, dispatch);
};