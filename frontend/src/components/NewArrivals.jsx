import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { products } from '../assets/data'
import SingleProduct from './../pages/products/SingleProduct';
import Title from './../pages/products/Title';



function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const data = products.slice(0, 10);
  
    setNewArrivals(data)
  }, [products])
  return (
    <section className="max-padd-container pt-16 pb-6 bg-primary">
      <Title title1={'New'} title2={"Arrivals"} titleStyles={'pb-10'} paraStyles={'!block'} />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-auto sm:h-[411px] md:h-[488px]"
      >
      {newArrivals.map((newArrival)=>(
        <SwiperSlide key={newArrival._id}>
          <SingleProduct product={newArrival} />
        </SwiperSlide>
      ))}
      </Swiper>

    </section>
  );
}

export default NewArrivals;
