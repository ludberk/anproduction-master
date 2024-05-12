<script setup>
import admin_nav from "../../components/general/admin/admin_nav.vue";
</script>
<template>
  <div>
    <ul class="flex flex-center w-full h-10vh">
      <li class="flex flex-center">
        <RouterLink
          to="/admin/inbox/oxundu"
          class="underline m-2 p-2 font-bold text-2xl"
          >Oxundu -></RouterLink
        >
      </li>
    </ul>
  </div>
  <table class="min-w-full border-collapse block md:table">
    <thead class="block md:table-header-group">
      <tr
        class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative"
      >
        <th
          class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
        >
          Ad
        </th>
        <th
          class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
        >
          Soyad
        </th>
        <th
          class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
        >
          Mesaj
        </th>
        <th
          class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
        >
          Nömrə
        </th>
        <th
          class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
        >
          Control
        </th>
      </tr>
    </thead>
    <tbody class="block md:table-row-group">
      <tr
        class="bg-white border border-grey-500 md:border-none block md:table-row"
      >
        <td
          class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
        >
          <span class="inline-block w-1/3 md:hidden font-bold">Ad</span>Erwin
          Campbell
        </td>
        <td
          class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
        >
          <span class="inline-block w-1/3 md:hidden font-bold">Soyad</span
          >ecampbell088
        </td>
        <td
          class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
        >
          <span class="inline-block w-1/3 md:hidden font-bold">Mesaj</span
          >ecampbell088@hotmail.com
        </td>
        <td
          class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
        >
          <span class="inline-block w-1/3 md:hidden font-bold">Nömrə</span
          >318-685-X414
        </td>
        <td
          class="p-2 md:border md:border-grey-500 flex text-left block md:table-cell"
        >
          <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
          <button
            class="bg-second border-2 flex flex-center hover:bg-success hover:text-second font-bold m-2 py-1 px-2 border border-blue-500 rounded"
          >
            <ion-icon name="eye-off"></ion-icon>
          </button>
          <button
            class="bg-second border-2 hover:bg-danger flex flex-center hover:text-second font-bold py-1 m-2 px-2 border border-red-500 rounded"
          >
            <ion-icon name="trash-bin"></ion-icon>
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <admin_nav />
</template>
