"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare API URL
      const apiUrl = `http://myomsapi.globaltechsolution.com.np:802/api/User/MobileLoginUser?username=${formData.email}&password=${formData.password}`;

      const res = await fetch(apiUrl);
      const data = await res.json();

      if (data.status_code === 200) {
        alert(data.message || "Login Successfully");

        // Optionally store data in localStorage/sessionStorage
        localStorage.setItem("userData", JSON.stringify(data.data[0]));

        router.push("/dashboard");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Login Account</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-sm"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email / Username
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors "
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          
          <h1 className=" text-black text-2xl text-bold py-2 px-4 rounded w-full cursor-text">I'M NEW CUSTOMER</h1>  <ber/> <p className=" text-black py-2 px-4 rounded w-full cursor-text">By creating an account with our store, you will be able to move through the checkout process faster, store shipping addresses, view and track your orders in your account and more.</p>
          
           <button
            
            className=" bg-gray-200 hover:bg-blue-600  text-black py-2 px-4 rounded w-full"
          >
            <a href="/account/signup" className=" hover:text-white text-black hover:underline-offset-0 cursor-pointer w-full"> Create Account </a>
          </button>
        </form>
      </div>
    </div>
  );
}
