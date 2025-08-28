"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const brands = [
  {
    id: 1,
    image: "/car.jpg", // replace with your image path
    title: "Hottest Pairs",
    offer: "MIN. 30% OFF",
    logo: "Dorothy Perkins | Boohoo",
  },
  {
    id: 2,
    image: "/phone.jpg",
    title: "Stunning Footwear",
    offer: "UP TO 60% OFF",
    logo: "Mango",
  },
  {
    id: 3,
    image: "/home.jpg",
    title: "Sneakers & More",
    offer: "MIN. 40% OFF",
    logo: "ALDO",
  },
  {
    id: 4,
    image: "/dresss.jpg",
    title: "Must-Have Collection",
    offer: "UP TO 50% OFF",
    logo: "Calvin Klein",
  },
  {
    id: 5,
    image: "/food.jpg",
    title: "Laid-Back Styles",
    offer: "MIN. 30% OFF",
    logo: "GANT",
  },
];

export default function GlobalBrandsSlider() {
  return (
    <div className="w-full py-10 bg-white">
    
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white">
              <Image
                src={brand.image}
                alt={brand.title}
                width={500}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500">{brand.logo}</p>
                <h3 className="text-lg font-semibold">{brand.title}</h3>
                <p className="text-red-500 font-bold">{brand.offer}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
