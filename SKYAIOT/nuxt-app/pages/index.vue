<script setup>
const layout = ref("home")
</script>
<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage/>
    </NuxtLayout> 
  </div>
</template>
<style scoped></style>