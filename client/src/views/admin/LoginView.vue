<script setup>
import admin_nav from "../../components/general/admin/admin_nav.vue";
</script>
<template>
  <div class="bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        src="https://images.unsplash.com/photo-1526634140919-468dc3ae3870?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Login</h1>
      <form action="#" method="POST">
        <!-- Username Input -->
        <div class="mb-4">
          <label for="username" class="block">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            class="w-full border border-primary rounded-md py-2 px-3 focus:outline-none focus:border-success"
            autocomplete="off"
          />
        </div>
        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full border border-primary rounded-md py-2 px-3 focus:outline-none focus:border-success"
            autocomplete="off"
          />
        </div>
        <!-- Login Button -->
        <button
          type="submit"
          class="bg-success hover:bg-danger text-second font-semibold rounded-md py-2 px-4 w-full"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
