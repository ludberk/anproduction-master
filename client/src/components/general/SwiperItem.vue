<script>
// swiper components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// autoplay slider options
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      swiperItems: [
        {
          slideImg: `https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          text: "Anproduction",
        },
        {
          slideImg: `https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          text: "Dayanıqlı Materiallar",
        },
        {
          slideImg: `https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          text: "Ən Yaxşı İşçilik",
        },
      ],
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<template>
  <div class="w-100 sm:h-[100vh] h-[80vh] bg-center" id="slider_container">
    <div class="w-full sm:h-[100vh] h-[80vh]">
      <swiper
        class="max-w-full blur-sm rounded-lg sm:h-[100vh] h-[80vh] relative"
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide
          id="slide_content"
          v-for="swiperItem in swiperItems"
          :key="swiperItem"
          :style="{ backgroundImage: `url('${swiperItem.slideImg}')` }"
          class="shadow-sxl bg-center text-center text-xl rounded-lg bg-second flex flex-center"
        >
        </swiper-slide>
      </swiper>
      <div class="absolute"></div>
      <swiper
        class="max-w-[800px] rounded-lg h-[50vh] sm:h-[70vh] top-[-75%] relative"
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide
          id="slide_content"
          v-for="swiperItem in swiperItems"
          :key="swiperItem"
          :style="{ backgroundImage: `url('${swiperItem.slideImg}')` }"
          class="shadow-sxl bg-center text-center text-xl rounded-lg bg-second flex flex-center"
        >
          <div class="w-full flex flex-center h-full">
            <h1 class="text-4xl text-second shadow-lg font-extrabold">
              {{ swiperItem.text }}
            </h1>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
