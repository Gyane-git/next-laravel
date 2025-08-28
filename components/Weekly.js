"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Scheu Bioplast Xtreme Kit Blue",
    brand: "SCHEU",
    price: "Rs. 2,880.00",
    image: "/laptop.jpg",
    sale: true,
  },
  {
    id: 2,
    title: "Scheu Bioplast Xtreme Kit RED",
    brand: "SCHEU",
    price: "Rs. 2,880.00",
    image: "/headphones.jpg",
    sale: true,
  },
  {
    id: 3,
    title: "BIOPLAST® Color SET",
    brand: "SCHEU",
    price: "Rs. 1.00",
    image: "/mouse.jpg",
    sale: true,
  },
  {
    id: 4,
    title: "BIOSTAR Machine- 230 V",
    brand: "SCHEU",
    price: "Rs. 8,50,000.00",
    image: "/printer.jpg",
    sale: true,
  },
  {
    id: 5,
    title: "Scheu Blue Blokker LC Resin",
    brand: "SCHEU",
    price: "Rs. 1.00",
    image: "/smartwatch.jpg",
    sale: true,
  },
  {
    id: 6,
    title: "BIOSTAR Machine- 230 V",
    brand: "SCHEU",
    price: "Rs. 8,50,000.00",
    image: "/keyboard.jpg",
    sale: true,
  },
  {
    id: 7,
    title: "BIOSTAR Machine- 230 V",
    brand: "SCHEU",
    price: "Rs. 8,50,000.00",
    image: "/monitor.jpg",
    sale: true,
  },
  {
    id: 8,
    title: "BIOSTAR Machine- 230 V",
    brand: "SCHEU",
    price: "Rs. 8,50,000.00",
    image: "/cpu.jpg",
    sale: true,
  },
  {
    id: 9,
    title: "BIOSTAR Machine- 230 V",
    brand: "SCHEU",
    price: "Rs. 8,50,000.00",
    image: "/images4.jpg",
    sale: true,
  },
];

export default function RelatedProductsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollContainer = (direction) => {
    const container = document.getElementById("product-scroll");
    if (container) {
      const scrollAmount = 250; // Adjust scroll distance
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-10">
        WEEKLY PRODUCTS
      </h2>

      <div className="relative max-w-9xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scrollContainer("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        {/* Products Row */}
        <div
          id="product-scroll"
          className="flex overflow-x-auto space-x-4 pb-4 hide-scrollbar px-10"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] max-w-[220px] bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={150}
                  className="mx-auto object-contain"
                />
                {product.sale && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
                <button className="absolute top-2 left-2 p-1 bg-white rounded-full shadow hover:bg-gray-100">
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500">{product.brand}</p>
                <h3 className="text-md font-medium">{product.title}</h3>
                <p className="text-red-600 font-bold mt-2">{product.price}</p>
                <button className="mt-3 flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg">
                  <ShoppingCart size={16} /> ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollContainer("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
