"use client";

import React, { useState } from "react";
import { signupUser } from "@/utils/ApiHelper"; 

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await signupUser(formData);

      if (response.success) {
        alert("Signup successful!");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert(response.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
      console.error("Submit error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
    <div className="max-w-md mx-auto mt-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
    </div>
  );
}
