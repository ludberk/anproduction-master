<script setup>
import FNavigationItem from "@/components/general/FNavigationItem.vue";
import WhatsappItem from "@/components/general/WhatsappItem.vue";
import FooterItem from "@/components/general/FooterItem.vue";
import SwiperItem from "@/components/general/SwiperItem.vue";
</script>
<template>
  <div class="w-full h-full">
    <!--  whatsapp start -->
    <WhatsappItem />
    <!--  whatsapp end -->
    <!-- header start -->
    <FNavigationItem />
    <!-- header end -->
    <!-- slide start -->
    <SwiperItem />
    <!-- slide end -->
    <br />
    <br />
    <!-- hr start  -->
    <div class="w-full flex flex-center">
      <div class="w-96 h-1 bg-transparan"></div>
      <div class="w-1/2">
        <h1 class="text-2xl font-bold text-center">Kategoriyalar</h1>
      </div>
      <div class="w-96 h-1 bg-transparan"></div>
    </div>
    <!-- hr end  -->
    <!--sevice category start-->
    <div>
      <div
        class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto"
      >
        <!-- start category components -->
        <div class="category">
          <a href="#" class="item">
            <span class="title">Mətbəx</span>
            <span class="link" href="/">Məhsullar</span>
            <img
              class="img"
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </a>
          <a href="#" class="item">
            <span class="title">Qonaq Otaği</span>
            <span class="link" href="#">Məhsullar</span>
            <img
              class="img"
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </a>
          <a href="#" class="item">
            <span class="title">Yataq Otaği</span>
            <span class="link" href="#">Məhsullar</span>
            <img
              class="img"
              src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </a>
          <a href="#" class="item">
            <span class="title">Hamam</span>
            <span class="link" href="#">Məhsullar</span>
            <img
              class="img"
              src="https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </a>
          <a href="#" class="item">
            <span class="title">Uşaq</span>
            <span class="link" href="#">Məhsullar</span>
            <img
              class="img"
              src="https://images.unsplash.com/photo-1505692795793-20f543407193?q=80&w=1439&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </a>
          <a href="#" class="item">
            <span class="title">Studio</span>
            <span class="link" href="#">Məhsullar</span>
            <img
              class="img"
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </a>
        </div>
        <!-- end category components -->
        <div class="lg:flex items-stretch md:mt-12 mt-8">
          <div class="lg:w-1/2">
            <div
              class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6"
            >
              <div class="sm:w-1/2 relative">
                <div>
                  <p
                    class="p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0"
                  >
                    Anproduction
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-second">
                      The Decorated Ways
                    </h2>
                    <p class="text-base leading-4 text-second mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/DYxtCJq/img-1.png"
                  class="w-full"
                  alt="chair"
                />
              </div>
              <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
                <div>
                  <p
                    class="p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0"
                  >
                    Anproduction
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-second">
                      The Decorated Ways
                    </h2>
                    <p class="text-base leading-4 text-second mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/3C5HvxC/img-2.png"
                  class="w-full"
                  alt="wall design"
                />
              </div>
            </div>
            <div class="relative">
              <div>
                <p
                  class="md:p-10 p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0"
                >
                  Anproduction
                </p>
                <div class="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 class="text-xl font-semibold 5 text-second">
                    The Decorated Ways
                  </h2>
                  <p class="text-base leading-4 text-second mt-2">
                    Dive into minimalism
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src="https://i.ibb.co/Ms4qyXp/img-3.png"
                alt="sitting place"
                class="w-full mt-8 md:mt-6 hidden sm:block"
              />
              <img
                class="w-full mt-4 sm:hidden"
                src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                alt="sitting place"
              />
            </div>
          </div>
          <div
            class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between"
          >
            <div class="relative">
              <div>
                <p
                  class="md:p-10 p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0"
                >
                  Anproduction
                </p>
                <div class="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 class="text-xl font-semibold 5 text-second">
                    The Decorated Ways
                  </h2>
                  <p class="text-base leading-4 text-second mt-2">
                    Dive into minimalism
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src="https://i.ibb.co/6Wfjf2w/img-4.png"
                alt="sitting place"
                class="w-full sm:block hidden"
              />
              <img
                class="w-full sm:hidden"
                src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                alt="sitting place"
              />
            </div>
            <div
              class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4"
            >
              <div class="relative w-full">
                <div>
                  <p
                    class="p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0"
                  >
                    Anproduction
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-second">
                      The Decorated Ways
                    </h2>
                    <p class="text-base leading-4 text-second mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/3yvZBpm/img-5.png"
                  class="w-full"
                  alt="chair"
                />
              </div>
              <div class="relative w-full sm:mt-0 mt-4">
                <div>
                  <p
                    class="p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0"
                  >
                    12 April 2021
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-second">
                      The Decorated Ways
                    </h2>
                    <p class="text-base leading-4 text-second mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/gDdnJb5/img-6.png"
                  class="w-full"
                  alt="wall design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--sevice category end-->
    <div class="w-full flex flex-center">
      <div class="w-96 h-1 bg-transparan"></div>
      <div class="w-1/2">
        <h1 class="text-2xl font-bold text-center">Məhsullar</h1>
      </div>
      <div class="w-96 h-1 bg-transparan"></div>
    </div>
    <!-- Home Gallery start -->
    <br />
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1670950413335-80e8a2d6bb19?q=80&w=1525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1595515106883-5d5da3043540?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1519961655809-34fa156820ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Home Gallery end -->
    <!-- footer start -->
    <!-- Foooter -->
    <FooterItem />
    <!-- footer end  -->
  </div>
</template>
<style lang="less">
// base
@import "../assets/less/base";
// slider
#slider_container {
  background-image: @sliderBack;
}
.category {
  max-width: 1170px;
  /*   display: flex; */
  /*   flex-wrap: wrap; */
  /*   justify-content: center; */
  gap: 20px;
  /*   row-gap: 20px; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  width: 100%;
}

.item {
  position: relative;
  /*   min-width: 370px; */
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  text-decoration: none;
  transition: 0.5s;
  z-index: 0;
}

.item:hover {
  border: 1px solid #fff0;
  box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
  border-radius: 3px;
}

.item .title {
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 28px;
  /* Основной текст */
  color: #2f3035;
  padding-left: 20px;
  padding-top: 20px;
}

.item:hover > .title {
  color: #1c62cd;
}

.item .link {
  font-size: 14px;
  padding-left: 20px;
  padding-bottom: 14px;
  /* светло серый текст */
  color: #c4c4c4;
}

.item .link::after {
  content: url("data:image/svg+xml,%3Csvg width='6' height='9' viewBox='0 0 6 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.228824 7.88793C-0.0650262 8.13366 -0.0762933 8.54196 0.203658 8.79989C0.48361 9.05782 0.948767 9.06771 1.24262 8.82198C1.24262 8.82198 5.77719 4.97116 5.78955 4.95998C6.07934 4.69388 6.06851 4.27195 5.76535 4.01758L1.24266 0.178763C0.949277 -0.067399 0.484101 -0.0581918 0.203658 0.199327C-0.0767845 0.456847 -0.0662956 0.865161 0.227086 1.11132L3.71295 4.12125C3.94389 4.32066 3.94393 4.67861 3.71304 4.87807L0.228824 7.88793Z' fill='%23C4C4C4'/%3E%3C/svg%3E%0A");
  margin-left: 3px;
  transition: 0.5s;
}

.item:hover > .link::after {
  margin-left: 8px;
}

.item .img {
  position: absolute;
  right: 37px;
  top: 22px;
  width: 100%;
  max-width: 150px;
  z-index: -1;
}
</style>
