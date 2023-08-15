import { USER_SIGNIN_API } from "../constants/Cyberbugs/Cyberbugs";

export const singinCyberbugAction = (email, password) => {
  return {
    type: USER_SIGNIN_API,
    userLogin: {
      email: email, // Đã sửa ở đây
      password: password // Đã sửa ở đây
    }
  };
};
