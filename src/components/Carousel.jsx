import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    className='w-full mySwiper'
    loop={true}
    speed={3000}
    autoplay={{
        delay: 1000
    }}
    modules={[Autoplay, Pagination, Navigation]}
   >
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
         alt="image"
         class="h-10 w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/lineicons.svg"
         alt="image"
         class="h-10 w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
         alt="image"
         class="h-10 w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
         alt="image"
         class="h-10 w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
         alt="image"
         class="h-10 w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
         alt="image"
         class="h-10 w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
         alt="image"
         class="h-10 w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
         alt="image"
         class="h-10 w-full"
       />
     </a>
     </SwiperSlide>

     </Swiper>
  )
}

export default Carousel