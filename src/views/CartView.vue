<template>
  <div class="cart-view container">
    <h2>Ваш кошик</h2>
    <div v-if="cartStore.cartItemsDetailed.length > 0">
      <div class="cart-items-container">
        <div v-for="item in cartStore.cartItemsDetailed" :key="item.id" class="cart-item">
          <img :src="item.img" :alt="item.title" class="cart-item-image">
          <div class="cart-item-details">
            <h4>{{ item.title }}</h4>
            <p>Ціна: {{ item.price > 0 ? item.price + ' грн.' : 'Безкоштовно' }}</p>
            <div class="quantity-controls">
              К-сть:
              <button @click="updateQty(item.id, item.quantity - 1)" :disabled="item.quantity <= 1">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="updateQty(item.id, item.quantity + 1)">+</button>
            </div>
          </div>
          <div class="cart-item-summary">
            <p>Сума: {{ item.totalPrice }} грн.</p>
            <button class="remove-button" @click="cartStore.removeProductFromCart(item.id)">Видалити</button>
          </div>
        </div>
      </div>
      <div class="cart-summary">
        <h3>Разом: {{ cartStore.cartTotalPrice }} грн.</h3>
        <button class="clear-cart-button" @click="cartStore.clearCart()">Очистити кошик</button>
        <button class="checkout-button" @click="checkout">Оформити замовлення</button>
      </div>
    </div>
    <div v-else class="empty-cart-message">
      <p>Ваш кошик порожній.</p>
      <RouterLink to="/catalog" class="shop-link-button">Перейти до каталогу</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import { RouterLink } from 'vue-router';

const cartStore = useCartStore();

const updateQty = (productId, newQuantity) => {
  cartStore.updateProductQuantity(productId, newQuantity);
};

const checkout = () => {
  alert('Функція оформлення замовлення наразі в розробці!');
};
</script>

<style scoped>
.cart-view .container {
  background-color: #2a2a40;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #3e3e58;
  color: #ddd;
}
.cart-item:last-child {
  border-bottom: none;
}
.cart-item-image {
  width: 100px;
  height: 75px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
  flex-shrink: 0;
}
.cart-item-details {
  flex-grow: 1;
  min-width: 0;
}
.cart-item-details h4 {
  margin: 0 0 5px 0;
  color: #ffeb3b;
  word-break: break-word;
}
.quantity-controls button {
  padding: 2px 8px;
  margin: 0 5px;
  font-size: 14px;
}
.quantity-controls span {
  display: inline-block;
  width: 20px;
  text-align: center;
}
.cart-item-summary {
  text-align: right;
  min-width: 150px;
  flex-shrink: 0;
}
.cart-item-summary p {
  margin: 0 0 10px 0;
}
.remove-button {
  background-color: #d32f2f;
}
.remove-button:hover {
  background-color: #e57373;
}
.cart-summary {
  margin-top: 30px;
  text-align: right;
  padding-top: 20px;
  border-top: 1px solid #3e3e58;
}
.cart-summary h3 {
  color: #ffeb3b;
  margin-bottom: 15px;
}
.cart-summary button {
  padding: 12px 20px;
  font-size: 16px;
  margin-left: 10px;
}
.clear-cart-button {
  background: #f44336;
}
.clear-cart-button:hover {
  background: #e57373;
}
.checkout-button {
  background: #4caf50;
}
.checkout-button:hover {
  background: #81c784;
}
.empty-cart-message {
  text-align: center;
  font-size: 18px;
  color: #aaa;
  padding: 40px 20px;
}
.shop-link-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #673ab7;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}
.shop-link-button:hover {
  background-color: #9575cd;
}

@media (max-width: 600px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .cart-item-image {
    width: 80px;
    height: 60px;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .cart-item-summary {
    text-align: left;
    width: 100%;
  }
  .cart-item-summary button {
    display: block;
    width: 100%;
    margin-top: 5px;
  }
}
</style>