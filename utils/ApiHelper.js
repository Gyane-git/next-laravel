// apihelper.js

import { apiPostRequest } from "@/utils/ApiSafeCall";
import { apiRequest } from "./ApiSafeCall";

// export const signupUser = async (formData) => {
//   // format data for Laravel
//   const payload = {
//     name: `${formData.firstName} ${formData.lastName}`,
//     email: formData.email,
//     password: formData.password,
//   };

//   const response = await apiPostRequest("/signup", payload, false); // false = no token required

//   return response;
// };


export const signupUser = async (formData) => {
  try {
    const res = await apiRequest("/signup", false, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
//use status not ok to handle errors
    if (!res.ok) {
      const errorData = await res.json();
      return { success: false, message: errorData.message || "Signup failed" };
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("Network Error:", error);
    return { success: false, message: "Network error or server unreachable." };
  }
};
