"use client";
import { useState } from "react";
import Counter from "../Hook/usestate/page"; // Adjust the import path as necessary
import ProfessionalSimpleCategoriesMenu from "./Sidebar"; // Adjust the import path as necessar
import ProductListingPage from "@/components/Productlist"; // Adjust the import path as necessary
import ImageSlider from "@/components/sliderImage"; // Adjust the import path as necessary
import LatestProducts from "@/components/latestProductt"; // Adjust the import path as necessary
import RelatedProductsPage from "@/components/Weekly"; // Adjust the import path as necessary
import GlobalBrandsSlider from "@//components/GlobalBrand";
import ProductShowcase from "@/components/specialproduct"


export default function DashboardBody() {
  const [stats] = useState([
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      color: "text-green-600",
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "+8%",
      color: "text-green-600",
    },
    { title: "Orders", value: "892", change: "-3%", color: "text-red-600" },
    { title: "Growth", value: "23.5%", change: "+5%", color: "text-green-600" },
  ]);

  const [recentActivity] = useState([
    {
      id: 1,
      action: "New user registered",
      time: "2 minutes ago",
      type: "user",
    },
    {
      id: 2,
      action: "Payment received",
      time: "15 minutes ago",
      type: "payment",
    },
    { id: 3, action: "Order completed", time: "1 hour ago", type: "order" },
    {
      id: 4,
      action: "New message received",
      time: "2 hours ago",
      type: "message",
    },
    {
      id: 5,
      action: "System backup completed",
      time: "3 hours ago",
      type: "system",
    },
  ]);

  const getActivityIcon = (type) => {
    switch (type) {
      case "user":
        return "👤";
      case "payment":
        return "💳";
      case "order":
        return "📦";
      case "message":
        return "💬";
      case "system":
        return "⚙️";
      default:
        return "📋";
    }
  };

  return (
    <main className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-blue-200 overflow-y-auto mt-[70px]">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className={`text-sm font-medium ${stat.color}`}>
                {stat.change}
                <Counter />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[20%_80%] gap-6 mt-5 relative">
        {/* Col1 - Sidebar */}
        <div className="flex min-h-screen  rounded-lg bg-white shadow">
          <ProfessionalSimpleCategoriesMenu />
        </div>

        {/* Col2 - Product Content */}
        <div className="min-h-screen rounded-lg bg-white shadow p-6">
          <ProductListingPage />
        </div>
      </div>
      <div className="mt-8">
        <ImageSlider />
      </div>
      <div className="mt-8">
        <LatestProducts />
      </div>
      <div className="mt-8">
        <RelatedProductsPage />
      </div>
     <div className="mt-8">
      <GlobalBrandsSlider/>
     </div>
     <div className="mt-8">
      <ProductShowcase/>
     </div>

    </main>
  );
}
