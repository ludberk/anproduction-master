<script setup>
import NavigationItem from "@/components/general/NavigationItem.vue";
import WhatsappItem from "@/components/general/WhatsappItem.vue";
import FooterItem from "@/components/general/FooterItem.vue";
</script>

<template>
  <!--  whatsapp start -->
  <WhatsappItem />
  <!--  whatsapp end -->
  <!-- header start -->
  <NavigationItem />
  <!-- header end -->
  <!--  contact header start -->
  <div
    class="w-full h-[45vh] flex flex-center bg-center shadow-md"
    id="contact_header"
  >
    <div id="overlay" class="w-full h-[45vh] bg-transparan absolute"></div>
    <h1 class="text-4xl font-bold text-second z-10">Anproduction'la Əlaqə</h1>
  </div>
  <!--  contact header end -->
  <!--  contact section start -->
  <section class="text-dark body-font relative">
    <div class="absolute inset-0 bg-primary">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style=""
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-second rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-dark text-lg mb-1 font-medium title-font">Feedback</h2>
        <p class="leading-relaxed mb-5 text-dark">
          Sifariş və ya istəklər üçün məlumatlarınızı daxil edin.
        </p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-dark">Ad *</label>
          <input
            type="text"
            id="email"
            placeholder="Ad Soyad *"
            name="name"
            class="w-full bg-second rounded border border-success focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div class="relative mb-4">
          <label for="surname" class="leading-7 text-sm text-dark">Ad *</label>
          <input
            type="text"
            id="email"
            placeholder="Soyad *"
            name="surname"
            class="w-full bg-second rounded border border-success focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="number" class="leading-7 text-sm text-dark"
            >Əlaqə Nömrəsi *</label
          >
          <input
            type="number"
            id="email"
            placeholder="Monil Nömrənizi Daxil Edin *"
            name="number"
            inputmode="numeric"
            class="w-full bg-second rounded border border-success focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-dark"
            >Mesaj *</label
          >
          <textarea
            id="message"
            name="message"
            class="w-full bg-second rounded border border-success focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-dark py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            placeholder="Mesaj yazın..."
          ></textarea>
        </div>
        <button
          class="text-second bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-second hover:text-primary hover:border hover:border-transparan transition-all duration-200 rounded text-lg"
        >
          Göndər
        </button>
        <p class="text-xs text-success mt-3">
          Mesajı Göndərdikdən Qısa Bir Zaman Ərzində Sizinlə Əlaqə Saxlayacağıq.
        </p>
      </div>
    </div>
  </section>
  <!--  contact section end -->
  <!-- footer start -->
  <FooterItem />
  <!-- footer end  -->
</template>
<style lang="less">
@import "../assets/less/base";
#contact_header {
  background-image: url("https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}
</style>
