import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <Swiper
    spaceBetween={20}
    slidesPerView={6}
    className='w-full mySwiper'
    loop={true}
    speed={2000}
    autoplay={{
        delay: 0
    }}
    modules={[Autoplay, Pagination, Navigation]}
    centeredSlides={true}
   >
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="/logos/image 17.png"
         alt="image"
         class="h-auto w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="/logos/image 18.png"
         alt="image"
         class="h-auto w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="/logos/image 21.png"
         alt="image"
         class="h-auto w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="/logos/image 22.png"
         alt="image"
         class="h-auto w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="/logos/image 23.png"
         alt="image"
         class="h-auto w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="/logos/image 24.png"
         alt="image"
         class="h-auto w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="/logos/image 25.png"
         alt="image"
         class="h-auto w-full"
       />
     </a>
     </SwiperSlide>
     <SwiperSlide>
     <a
       href="javascript:void(0)"
       class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
     >
       <img
         src="/logos/image 26.png"
         alt="image"
         class="h-auto w-full"
       />
     </a>
     </SwiperSlide>

     </Swiper>
  )
}

export default Carousel