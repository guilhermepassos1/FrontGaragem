<script setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const showMenu = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>

<template>
    <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
    <RouterLink to="/">
      <i class="mdi mdi-home-outline" />
      Home
    </RouterLink>
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

    <RouterLink to="/login">
      <i class="mdi mdi-account" />
      Login
    </RouterLink>
  </div>
  <div class="icons">
    <RouterLink to="/">
      <i class="mdi mdi-home-outline" />
      Home
    </RouterLink>
    <div class="hamburger" @click="showMenu = !showMenu">
<i class="mdi mdi-menu"></i> Menu
    </div>
  </div>
</template>
<style scoped>
#footerMenu {
    position: fixed;
    bottom: 15%;
    right: 0;

    width: 20%;
    border-top:#072041 1px solid;
    background-color:#072041;
    display: block;
    padding: 1rem;
}

#footerMenu a {
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    transition: color 0.3s;
}


.icons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.icons a,
.icons .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    transition: color 0.3s;
}

.hamburger:hover {
    cursor: pointer;
}
#bottom{
  background-color:#072041;
}
</style>