<script setup>
import { onMounted, watch } from 'vue';
import { useProductStore } from '@/stores/product';

import { formatDescription, formatPrice, formatTitle } from '@/helpers/format';

const props = defineProps(['category_id']);
const productStore = useProductStore();

async function getProducts() {
  if (props.category_id) {
    await productStore.getProductsByCategory(props.category_id);
  } else {
    await productStore.getProducts();
  }
}

watch(
  () => props.category_id,
  async () => {
    await getProducts();
  },
);

onMounted(async () => {
  await getProducts();
});
</script>

<template>
  <p>qdddd</p>
</template>

<style scoped>
.icon {
  background-color: #0a2668;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  position: fixed;
  bottom: 12rem;
  right: 20px;
}

.icon:hover {
  background-color: #bac9e8;
  color: #0a2668;
}

.icon i {
  font-size: 2rem;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
}

.product-card {
  width: 225px;
  font-family: 'Belleza', sans-serif;
}

.product-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 0.5rem;
  padding-top: 20px;
  margin-bottom: 1rem;
  background-color: #eeeeee;
  height: 201px;
}

.product-img-wrapper img {
  width: 153px;
  height: 170px;
  object-fit: cover;
}

.product-title-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.product-title-price p {
  font-weight: bold;
  font-size: 16px;
  color: #010101;
}

.product-description-stars {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.product-description-stars p {
  font-size: 12px;
  color: #535050;
}
</style>
