<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/font-awesome.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
    },

    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/brands.min.css",
    },
  ],
});
</script>

<template>
  <div>
    <header>
      <HomeHeader />
      <HomeBanner />
    </header>
    <main></main>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

<style scoped></style>
