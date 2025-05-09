<template>
  <div class="product">
    <img :src="product.img" :alt="product.title" @click="showDetails">
    <h3 @click="showDetails">{{ product.title }}</h3>

    <p class="product-desc">
      {{ product.short_desc ? product.short_desc.substring(0, 100) + (product.short_desc.length > 100 ? '...' : '') : 'Короткий опис відсутній.' }}
    </p>
    <p class="price">{{ product.price > 0 ? product.price + ' грн.' : 'Безкоштовно' }}</p>
    <button
        @click="handleAddToCart"
        :disabled="isAddedState"
        :class="{ 'added-to-cart': isAddedState }"
    >
      <span v-if="!isAddedState">Додати в кошик</span>
      <span v-else>✓ В кошику</span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['show-details']);
const cartStore = useCartStore();

const isAddedState = computed(() => {

  if (!props.product || !props.product.id) return false;
  return !!cartStore.items.find(item => item.productId === props.product.id);
});

const handleAddToCart = () => {
  if (props.product && props.product.id && !isAddedState.value) {
    cartStore.addProductToCart(props.product.id);
  }
};

const showDetails = () => {

  if (props.product) {
    emit('show-details', props.product);
  }
};
</script>

<style scoped>
.product {
  background: #2e2e48;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product:hover {
  transform: translateY(-5px);
}
.product img, .product h3 {
  cursor: pointer;
}
.product img {
  max-width: 100%;
  height: 150px;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 10px;
}
.product h3 {
  font-size: 18px;
  margin: 0 0 10px 0;
  color: #ffeb3b;
  min-height: 44px;
}
.product-desc {
  font-size: 14px;
  color: #ccc;
  flex-grow: 1;
  margin-bottom: 10px;
  min-height: 56px;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
.price {
  font-size: 16px;
  color: #4caf50;
  font-weight: bold;
  margin-bottom: 10px;
}
.product button {
  width: 100%;
  margin-top: auto;
  padding: 10px 15px;
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;
}

.product button.added-to-cart {
  background-color: #4caf50;
  color: white;
}
.product button:disabled {
  opacity: 0.7;
  cursor: default;
}
</style>