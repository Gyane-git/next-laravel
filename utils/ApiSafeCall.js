import {baseUrl} from './config';

export const apiRequest = async (url, tokenReq = true, options = {}) => {
  url = `${baseUrl}${url}`;
  const token = localStorage.getItem("token");

  const headers = {
    ...(tokenReq && token && { Authorization: `Bearer ${token}` }),
    ...(options.method !== "GET" && { "Content-Type": "application/json" }),
    ...options.headers,
  };

  let response;
  try {
    response = await fetch(url, { ...options, headers });
  } catch (err) {
    console.log("Network error:", err);
    console.warn(err);
    return {
      success: false,
      message: "Network error or server unreachable.",
    };
  }

  let data;
  try {
    data = await response.json();
  } catch (e) {
    console.log("Invalid JSON from server:", e);
    console.warn(e);
    return {
      success: false,
      message: "Server sent invalid JSON.",
    };
  }

  if (data.success || response.ok) {
    return data;
  } else {
    // Log detailed error
    console.log("API error response:", data);
    console.warn(data);
    return data;
  }
};

export const apiPostRequest = async (url, data, tokenReq = true) =>
  apiRequest(url, tokenReq, { method: "POST", body: JSON.stringify(data) });
