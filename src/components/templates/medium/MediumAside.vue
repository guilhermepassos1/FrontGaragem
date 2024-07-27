<script setup>
import LogoTitle from '@/components/templates/LogoTitle.vue';

</script>
<template>
  <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="divider" />
    <div class="menu">
      <router-link to="/">
        <i class="icon mdi mdi-home-outline" /> Home
      </router-link>
    </div>
    <div class="divider" />
    <div class="menu">
      <router-link to="/acessorio">
        <i class="icon mdi mdi-radio" /> Acessório
      </router-link>
      <router-link to="/categoria">
        <i class="icon mdi mdi-tag" /> Categoria
      </router-link>
      <router-link to="/cor">
        <i class="icon mdi mdi-format-color-fill" /> Cor
      </router-link>
      <router-link to="/marca">
        <i class="icon mdi mdi-car-back" /> Marca
      </router-link>
     
      <router-link to="/login">
        <i class="icon mdi mdi-account" /> Login
      </router-link>
    </div>
  </div>
  <logo-title />
</template>
<style scoped>
.mb-2 {
  margin-bottom: 1.5rem;
}

.icon {
  font-size: 2rem;
  margin-left: 15px;
}

.divider {
  margin-top: 1rem;
  border-top: 1px solid #3d3f3c;
}

.menu {
  padding: 3rem;
  background-color: #3d3f3c;
}

.menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  gap: 1rem;
  font-size: 1.3rem;
  margin-top: 2.2rem;
  background-color:  #fffbfb;
  border-radius: 30px;
}
</style>