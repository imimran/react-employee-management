import {CREATE_USER} from "../types"

export const createUser = (username, email, password) => {
  return async (dispatch) => {
    const response = await fetch("https://localhost:4000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong creating user !");
    }

    const resData = await response.json();

    //console.log(resData)

    dispatch({
      type: CREATE_USER,
      userData: {
        id: resData.name,
        username,
        email,
        password
      },
    });
  };
};