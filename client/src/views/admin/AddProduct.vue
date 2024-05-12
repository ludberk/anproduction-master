<script setup>
import admin_nav from "../../components/general/admin/admin_nav.vue";
</script>
<template>
  <div class="flex flex-col overflow-hidden h-[60vh] justify-between">
    <!-- Main -->
    <main class="max-w-full h-full flex relative overflow-hidden">
      <!-- Container -->
      <div
        class="h-full w-full overflow-hidden m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll"
      >
        <!-- Container -->
        <div
          class="w-full h-60 m-5 rounded-lg flex flex-center flex-shrink-0 flex-grow bg-gray-400"
        >
          <div class="w-full max-w-[600px] m-5 p-5 shadow-lg">
            <div class="w-full text-center">
              <h1 class="font-bold text-2xl m-3 p-5">Məhsul Əlavə Et</h1>
            </div>
            <div class="w-full">
              <div>
                <label for="foto" class="text-xl font-bold">
                  Şəkil Əlavə Et:
                </label>
              </div>

              <div>
                <input
                  class="m-2 p-2"
                  type="file"
                  name="foto"
                  value="Şəkli Secin"
                />
              </div>
              <div>
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-gray-600"
                  /><span class="ml-2 text-text">Mebel</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-gray-600"
                  /><span class="ml-2 text-gray-700">Dəmir İşçiliyi</span>
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="p-2 m-2 w-[190px] border border-2 font-bold h-[8vh]"
              >
                Məhsulu Əlavə Et
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!--Kategoriyalar-->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
      <h1
        class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900"
      >
        Məhsullar
      </h1>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center"
      >
        <div>
          <img
            class="object-center object-cover h-auto w-full"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="photo"
          />
        </div>
        <div class="text-center py-8 sm:py-6">
          <div>
            <button
              type="submit"
              class="p-2 m-2 w-[70px] h-[5vh] bg-danger text-second flex flex-center font-bold rounded-md"
            >
              Sil
            </button>
          </div>
        </div>
      </div>

      <div
        class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center"
      >
        <div>
          <img
            class="object-center object-cover h-auto w-full"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            alt="photo"
          />
        </div>
        <div class="text-center py-8 sm:py-6">
          <div>
            <button
              type="submit"
              class="p-2 m-2 w-[70px] h-[5vh] bg-danger text-second flex flex-center font-bold rounded-md"
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- app admin navigation -->
  <admin_nav />
</template>

<style lang="less">
@import "../../assets/less/base";
</style>
