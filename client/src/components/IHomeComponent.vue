<script setup>
import INavigationItem from "@/components/general/INavigationItem.vue";
import WhatsappItem from "@/components/general/WhatsappItem.vue";
import FooterItem from "@/components/general/FooterItem.vue";
import ISwiperItem from "@/components/general/ISwiperItem.vue";
</script>
<template>
  <!-- whatsapp start  -->
  <WhatsappItem />
  <!-- whatsapp end  -->
  <!-- header start  -->
  <INavigationItem />
  <!-- header end  -->
  <ISwiperItem />
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

  <div>
    <div
      class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto"
    >
      <!-- start category components -->
      <div class="category">
        <a href="#" class="item">
          <span class="title">Meydança</span>
          <span class="link" href="/">Məhsullar</span>
          <img
            class="img"
            src="https://imgs.search.brave.com/vU_zvQcIgG-svjh2cZYgegvVIopn4ksIZphDq8eeSKQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYmV0dHlibG9j/a3MuY29tLzg4MTQz/MTU1NjU4OTRiZDA5/ZWJkZDdmYmE4YmU3/ZGI2Xzc3MzJmZTI5/N2ZjMjQ3MWE4NWUy/ZjhhNDViNTRhY2Y1/LzYwNTc5L2Z1bGxf/d2lkdGhfaGVhZGVy/X3N0YWRpb25fYmlu/bmVuLmpwZw"
            alt=""
          />
        </a>
        <a href="#" class="item">
          <span class="title">Həyət</span>
          <span class="link" href="#">Məhsullar</span>
          <img
            class="img"
            src="https://imgs.search.brave.com/EpXHcu2avAWCoW3ALjfnWZmuXRUrsTifoTTIAfk0MVM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bmV3dG9uZm9yZ2Uu/Y28udWsvdGhlbWUt/Y29udGVudC91cGxv/YWRzLzIwMjAvMDEv/c3B5ZS1wYXJrLXNj/YWxlZC1lMTU5MDA3/NTk2NjM4Ny05NjB4/NjAwLmpwZw"
            alt=""
          />
        </a>
        <a href="#" class="item">
          <span class="title">Pilləkən</span>
          <span class="link" href="#">Məhsullar</span>
          <img
            class="img"
            src="https://imgs.search.brave.com/hz-TmH4L19CMS0G2nTfRVTnqRoRSGIXsNSTwwTleq-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzgzLzQ5LzMw/LzM2MF9GXzE4MzQ5/MzA1MV8zVEVJWmxH/bXF1WmN6WlVTMVk0/a3dTRnRmUGc2VHhQ/Ti5qcGc"
            alt=""
          />
        </a>
        <a href="#" class="item">
          <span class="title">Tent</span>
          <span class="link" href="#">Məhsullar</span>
          <img
            class="img"
            src="https://i.pinimg.com/originals/44/8c/8c/448c8cd0bc61be1adfa09eae11a3f8ae.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>

  <!-- hr start  -->
  <div class="w-full flex flex-center">
    <div class="w-96 h-1 bg-transparan"></div>
    <div class="w-1/2">
      <h1 class="text-2xl font-bold text-center">Məhsullar</h1>
    </div>
    <div class="w-96 h-1 bg-transparan"></div>
  </div>
  <!-- hr end  -->
  <!-- Home Gallery start -->
  <br />
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/K7ItwIAnZESvSY_bjKbEdiOcouFdVq2Eg9U6pOpyh44/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/OC8yMi8xMy81MS9z/dGFpcmNhc2UtOTAw/NzI1XzY0MC5qcGc"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/yTa8hlR8-v7--6eZUqP1BOUFb0Vf3YFuU7OdMgkO3vQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMzIyNjMz/My85NTg4L2kvNDUw/L2RlcG9zaXRwaG90/b3NfOTU4ODk2OTQt/c3RvY2stcGhvdG8t/d3JvdWdodC1pcm9u/LWZlbmNlLmpwZw"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/o8_ltyne4wsUPt_XtfPJnZmJSMbCtU0HCvm3Mh1lGJs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/am1pcm9ud29ya3Mu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAzL2ltZ18x/Mjk3LmpwZw"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/sOFtGQfPqYYMkUXM1j5-hHh53ECvzFOFxNClrUTrkyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAxMzQ1/My8xOTIyOS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE5MjI5NDkx/OC1zdG9jay1waG90/by10aGUtZnJhZ21l/bnQtb2YtZm9yZ2Vk/LW1ldGFsLmpwZw"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/NZtkDLkSEbVy8khyHPJwDBqe75QhIYi0ENNPrjmIiEI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly94dHJl/bWVpcm9ud29yay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDYveHRyZW1l/LWlyb24td29yay1j/b3JlbWVkaWEtcGhv/dG9ncmFwaHlfd2Vi/LXJhaWwtaXJvbi1p/bnRlcmlvci1iYWxj/b255LmpwZw"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/00Id-GNMSXrEdZ50Sk9JJHC7uxB_JZ3rMez2spsjD7o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jYWNj/aW9sYWlyb24uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzExLzEyMy5qcGc"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/CwnLvRPIR9UyHB9oScMBjQREy6x4GVHkrHn8jZD62qc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU5LzY2/LzVkLzU5NjY1ZDcy/YmVjOTg2NGEzMDZl/NTA3YTQ4MjZkM2Uw/LmpwZw"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/xgrHEK6KXPlQmo9ZGnUWCRoXOVTcnwV-TcWFdBnRnPw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maW5l/aXJvbi5jby51ay93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/My9NZXRhbC1Qb3Jj/aC5qcGc"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/ejNaneWStdHJsnvUqghmMoNFqjuAC0vRSNR7OyKzEnI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maW5l/aXJvbi5jby51ay93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/NS92ZXJhbmRhc19v/cm5hbWVudGFsX2ly/b24tNi5qcGc"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/PR678Q96KWY8_jDSVXPeSKTAPWPLz9dDyqsg5Tq2QKc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pcm9u/Y3VzdG9td29ya3Mu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzA3L01ldGFs/YXduaW5nLTM1MHg1/MDAuanBn"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/FA-5eG7eY-WIudclwQPtBau3QaBij6y8eOuHs__yw2M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE3MTg1MDQxL3Iv/aWwvZDYwMTgxLzQy/NTY5MjE3ODkvaWxf/NjAweDYwMC40MjU2/OTIxNzg5XzlvYjIu/anBn"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://imgs.search.brave.com/NkW2owU3TEZzlWfmX5xuvqkm-QhycBFnMyUKuyUGnIs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NzgxNjg4My9waG90/by9pcm9ud29yay1t/ZXhpY28uanBnP2I9/MSZzPTE3MDY2N2Em/dz0wJms9MjAmYz1E/cW5WcS00alk3dEg0/ZFdhSWFNVTZ0TG5u/VjJFeTdXRktMVnNU/dG5aNTZrPQ"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Home Gallery end -->

  <!-- footer start  -->
  <FooterItem />
  <!-- footer end  -->
</template>

<style scoped>
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
