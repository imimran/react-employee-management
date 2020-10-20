import { CREATE_ORGANIZATION } from "../types";

export const createOrganization = (name, email, phone, address) => {
  return async (dispatch) => {
    const response = await fetch("https://localhost:4000/api/company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong creating user !");
    }

    const resData = await response.json();

    //console.log(resData)

    dispatch({
      type: CREATE_ORGANIZATION,
      organizationData: {
        id: resData.name,
        name,
        email,
        phone,
        address
      },
    });
  };
};
