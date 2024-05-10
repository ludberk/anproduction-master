<script>
export default {
  data() {
    return {
      appItems: [
        { page: "Ev", icons: "home", link: "/admin/home" },
        { page: "Kategoriya", icons: "albums", link: "/admin/category/add" },
        { page: "Məhsul", icons: "basket", link: "/admin/products/add" },
        { page: "Galereya", icons: "images", link: "/admin/gallery/add" },
        { page: "Inbox", icons: "archive", link: "/admin/inbox" },
      ],
    };
  },
};
</script>

<template>
  <div
    class="w-full h-[12vh] bg-second fixed bottom-0 flex flex-center"
    id="appMenu"
  >
    <div
      class="max-w-[400px] z-50 bg-primary rounded-lg h-[10vh] m-2 p-2 flex flex-center"
    >
      <ul class="flex flex-center">
        <li
          class="flex text-second flex-center"
          v-for="appItem in appItems"
          :key="appItem"
        >
          <RouterLink
            class="m-2 p-1 text-center border-0 rounded-md hover:bg-danger hover:text-second"
            :to="appItem.link"
          >
            <ion-icon :name="appItem.icons"></ion-icon> {{ appItem.page }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
