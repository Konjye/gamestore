<template>
  <div id="app-wrapper">
    <header class="app-header">
      <nav>
        <div class="nav-logo"><strong>ГеймХата</strong></div>
        <div class="nav-links">
          <RouterLink to="/">Головна</RouterLink>
          <RouterLink to="/catalog">Каталог</RouterLink>
          <RouterLink to="/cart">Кошик ({{ cartStore.cartItemCount }})</RouterLink>
        </div>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer id="contacts" class="app-footer">
      <strong>Контакти:</strong><br>
      📧 Email: support@gamekhata.com.ua <br>
      📞 Телефон: +380 (XX) XXX-XX-XX <br>
      🕒 Графік роботи: Пн–Пт з 9:00 до 18:00<br>
      <p>© {{ new Date().getFullYear() }} ГеймХата. Усі права захищено.</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<style scoped>
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex-grow: 1;
}
.app-header {
  background-color: #12122a;
  color: white;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  position: sticky;
  top: 0;
  z-index: 1000;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}
.nav-logo strong {
  font-size: 1.5em;
  color: #ffeb3b;
}
.nav-links a {
  margin: 0 15px;
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}
.nav-links a:hover,
.nav-links .router-link-exact-active {
  color: #fff;
}

.app-footer {
  background: #12122a;
  color: #aaa;
  text-align: center;
  padding: 25px;
  margin-top: 40px;
  font-size: 14px;
  line-height: 1.6;
}
.app-footer strong {
  color: #ddd;
}
.app-footer p {
  margin-top: 10px;
  font-size: 0.9em;
}
</style>
