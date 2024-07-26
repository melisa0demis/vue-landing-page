<script setup></script>

<template>
  <!-- Hero Section Start -->
  <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
    <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center">
      <div class="lg:w-5/6 order-2 lg:order-none">
        <h1
          class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left"
        >
          Mehmet Kemal Gürer
        </h1>
        <p
          class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left"
        >
          Güvenilir Ellerde Sağlıklı Gülüşler
        </p>
        <div class="flex justify-center lg:justify-start mt-10">
          <LinkButton btn-type="primary" link="#download-section"
            >Hakkımda</LinkButton
          >
        </div>
      </div>
      <div class="image-container">
        <img class="image" src="https://i.hizliresim.com/dfon08y.jpg" />
      </div>
    </section>
  </div>
  <!-- Hero Section End -->
</template>
<style>
.image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.image {
  right: 0;
  top: 0;
  height: 100%;
  max-width: fit-content;
  width: 100%;
  object-fit: cover; /* Görüntünün kırpılmadan sığmasını sağlar */
  z-index: 10;
}
</style>
