<script setup>
import information from "../data/information";
</script>

<template>
  <!-- Information Section Start -->
  <div id="information-section" class="container mx-auto px-5 md:w-4/5">
    <section class="py-16 pt-18">
      <div class="w-4/5 md:w-3/5 mx-auto">
        <h2
          class="text-3xl md:text-4xl font-theme-heading font-medium text-center"
        >
          Tedavi Hizmetlerimiz
        </h2>
        <p
          class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7"
        >
          Aşağıda sunduğumuz tedavi hizmetlerini bulabilirsiniz. Detaylı bilgi
          için kartlara tıklayınız.
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div
          v-for="(info, index) in information"
          :key="info.id"
          :class="[
            // Kartların index'ine göre stilleri döngüsel olarak tekrar et
            index % 3 === 0 ? 'lg:mb-10' : '',
            index % 3 === 1 ? 'lg:mt-10' : '',
            index % 3 === 2 ? 'lg:mt-20 lg:-mb-10' : '',
          ]"
          class="shadow-lg rounded-lg"
        >
          <div class="flex justify-center mt-12">
            <img :src="info.icon" alt="Service Icon" class="standard-size" />
          </div>
          <h3 class="text-2xl font-theme-heading font-medium text-center mt-6">
            {{ info.title }}
          </h3>
          <p
            class="text-md font-theme-content text-theme-grayish-blue text-center mt-3"
          >
            {{ info.description }}
          </p>
          <div class="my-7">
            <img
              class="w-full"
              src="/images/bg-dots.svg"
              alt="Dot Background"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Information Section End -->
</template>

<style scoped>
.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.rounded-lg {
  border-radius: 1rem;
}
.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
.text-center {
  text-align: center;
}
.text-2xl {
  font-size: 1.5rem;
}
.font-theme-heading {
  font-family: "YourHeadingFont", sans-serif;
}
.font-theme-content {
  font-family: "YourContentFont", sans-serif;
}
.text-theme-grayish-blue {
  color: #6c757d;
}
.mt-12 {
  margin-top: 3rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.pt-18 {
  padding-top: 4.5rem;
}
.py-16 {
  padding: 4rem 0;
}
.standard-size {
  max-width: 200px;
  max-height: 200px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
