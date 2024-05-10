<script setup>
import admin_nav from "../../components/general/admin/admin_nav.vue";
</script>
<template>
  <!-- categoriyalar -->
  <div class="border border-2 border-primary">
    <h1>1. Kategoriya Bölməsi</h1>
    <p>
      Admin panelin kategoriyalar bölməsində boş xanaları doldurub check
      boxlardan birini işarətlədikdən sonra Kategoriya əlavə et düyməsinə
      basanda məlumatlara uyğun olarag ("/", "/ironwork" və "/furniture") bu
      səhifələrdə kategoria əlavə olunsun və şəkillərdəki sil düyməsinə basanda
      məlumatlar silinsin
    </p>
  </div>
  <!-- galereya -->
  <div class="border border-2 border-primary">
    <h1>2. Galereya Bölməsi</h1>
    <p>
      Admin panelin Galereya bölməsində boş xanaları doldurduqdan sonra
      Galereyaya əlavə et düyməsinə basdıqda məlumatlara uyğun olarag
      ("/gallery") bu səhifədə əlavə olunsun və şəkillərdəki sil düyməsinə
      basanda məlumatlar silinsin
    </p>
  </div>
  <!-- Products -->
  <div class="border border-2 border-primary">
    <h1>3. Product Bölməsi</h1>
    <p>
      Admin panelin Product bölməsində boş xanaları doldurub, checkbox lardan
      birini işarətlədikdən sonra əlavə et düyməsinə basdıqda məlumatlara uyğun
      olarag ("/furniture", "/ironwork") bu səhifələrdə əlavə olunsun və
      şəkillərdəki sil düyməsinə basanda məlumatlar silinsin
    </p>
  </div>
  <!-- Products -->
  <div class="border border-2 border-primary">
    <h1>4. Contact Bölməsi</h1>
    <p>
      Client Tərəf contact bölməsində boş xanaları doldurduqdan sonra gələn
      məlumat admin paneldə inbox səhifəsində yığılsın əgər mesajın oxunanlar
      səhifəsinə göndərmək istəyiriksə göz iconuna basırıq və mesajı silmək
      istəyiriksədə zibil qutusuna basaraq mesajı silirik
    </p>
  </div>
  <!-- Products -->
  <div class="border border-2 border-primary">
    <h1>5. Admin Giriş Səhifəsi</h1>
    <p>Giriş Sistemi</p>
  </div>
  <admin_nav />
</template>
