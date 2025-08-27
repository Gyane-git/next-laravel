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

    let data = res;
    try {
      // ensure it's JSON
      if (typeof res === "string") {
        data = JSON.parse(res);
      }
    } catch (err) {
      console.error("Invalid JSON from server:", res);
      return {
        success: false,
        message: "Server sent invalid response. Please try again later.",
      };
    }

    // Handle Laravel-style response
    if (data.success === false) {
      return { success: false, message: data.message || "Signup failed" };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Network Error:", error);
    return { success: false, message: "Network error or server unreachable." };
  }
};
