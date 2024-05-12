<script setup>
import NavigationItem from "@/components/general/NavigationItem.vue";
import WhatsappItem from "@/components/general/WhatsappItem.vue";
import FooterItem from "@/components/general/FooterItem.vue";
</script>

<template>
  <div>
    <!-- WhatsApp Component -->
    <WhatsappItem />

    <!-- Navigation Component -->
    <NavigationItem />

    <!-- About Header -->
    <div
      class="w-full h-[45vh] flex items-center background-full justify-center shadow-md relative"
      id="about_header"
    >
      <div class="w-full h-full bg-transparan absolute"></div>
      <h1 class="text-4xl font-bold text-second z-10">Anproduction Haqqında</h1>
    </div>

    <!-- About Section -->
    <section class="relative pt-12 bg-second">
      <div class="flex flex-wrap items-center">
        <!-- Image -->
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            class="max-w-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
          />
        </div>

        <!-- Text Content -->
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <!-- Icon -->
            <div
              class="text-second p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full text-xl bg-primary mt-8"
            >
              <ion-icon name="construct"></ion-icon>
            </div>

            <!-- Heading and Description -->
            <h3 class="text-3xl font-semibold">Anproduction</h3>
            <p class="mt-4 text-lg leading-relaxed text-primary">
              Biz Anproduction Şirkəti Sizin Üçün İstədiyiniz Dizayn Və
              Materialda Metal Konstruksiyalar Və Ya Mebellər Hazırlayırıq.
            </p>

            <!-- List of Features -->
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <span
                    class="font-semibold inline-block py-1 px-2 uppercase rounded-full text-second bg-primary text-xl flex items-center mr-3"
                  >
                    <ion-icon name="checkmark"></ion-icon>
                  </span>
                  <h4 class="text-primary">Keyfiyyətli Material</h4>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <span
                    class="font-semibold inline-block py-1 px-2 uppercase rounded-full text-second bg-primary text-xl flex items-center mr-3"
                  >
                    <ion-icon name="checkmark"></ion-icon>
                  </span>
                  <h4 class="text-primary">Ustalıq</h4>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <span
                    class="font-semibold inline-block py-1 px-2 uppercase rounded-full text-second bg-primary text-xl flex items-center mr-3"
                  >
                    <ion-icon name="checkmark"></ion-icon>
                  </span>
                  <h4 class="text-primary">Zamanlı Çatdırılma</h4>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <span
                    class="font-semibold inline-block py-1 px-2 uppercase rounded-full text-second bg-primary text-xl flex items-center mr-3"
                  >
                    <ion-icon name="checkmark"></ion-icon>
                  </span>
                  <h4 class="text-primary">Texniki Dəstək</h4>
                </div>
              </li>
              <!-- Add similar list items for other features -->
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <FooterItem />
  </div>
</template>

<style lang="less">
@import "../assets/less/base";
#about_header {
  background-image: url("https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}
</style>
