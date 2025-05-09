<template>
  <div class="catalog-view container">
    <h2>Каталог Ігор</h2>
    <div class="filters">
      <div class="filter-item">
        <label for="searchQuery">Пошук за назвою:</label>
        <input type="text" id="searchQuery" v-model="searchQuery" placeholder="Введіть назву гри...">
      </div>
      <div class="filter-item">
        <label for="categoryFilter">Жанр:</label>
        <select id="categoryFilter" v-model="selectedCategory">
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat === 'all' ? 'Всі жанри' : categoryDisplayNames[cat] || cat.toUpperCase() }}
          </option>
        </select>
      </div>
    </div>

    <transition-group name="product-list-transition" tag="div" class="product-grid">
      <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @show-details="openDetailModal"
      />
    </transition-group>

    <p v-if="filteredProducts.length === 0 && !isLoading" class="no-products">
      На жаль, ігор за вашими фільтрами не знайдено.
    </p>
    <p v-if="isLoading" class="loading-products">
      Завантаження ігор...
    </p>

    <ProductDetailModal
        :product="selectedProductForDetail"
        @close="handleCloseDetailModal"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useProductsStore } from '@/stores/products';
import ProductCard from '@/components/ProductCard.vue';
import ProductDetailModal from '@/components/ProductDetailModal.vue';

const productsStore = useProductsStore();
const categories = productsStore.categories;
const selectedCategory = ref('all');
const searchQuery = ref('');
const isLoading = ref(false);



const categoryDisplayNames = {
  'rpg': 'Рольові (RPG)',
  'action': 'Екшен',
  'strategy': 'Стратегії',
  'sport': 'Спорт',
};

const filteredProducts = computed(() => {
  let products = productsStore.allProducts.value;

  if (selectedCategory.value !== 'all') {
    products = products.filter(product => product.category === selectedCategory.value);
  }

  if (searchQuery.value.trim() !== '') {
    const lowerSearchQuery = searchQuery.value.toLowerCase().trim();
    products = products.filter(product =>
        product.title.toLowerCase().includes(lowerSearchQuery) ||
        (product.short_desc && product.short_desc.toLowerCase().includes(lowerSearchQuery))
    );
  }
  return products;
});

watch([searchQuery, selectedCategory], () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});


const selectedProductForDetail = ref(null);

const openDetailModal = (product) => {
  selectedProductForDetail.value = product;
};

const handleCloseDetailModal = () => {
  selectedProductForDetail.value = null;
};
</script>

<style scoped>
.filters {
  background: #2a2a40;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filters label {
  color: #ccc;
  font-size: 16px;
}

.filters input[type="text"],
.filters select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #444;
  background-color: #1e1e2f;
  color: #fff;
  font-size: 15px;
  min-width: 200px;
}
.filters input[type="text"]::placeholder {
  color: #777;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 25px;
}

.no-products, .loading-products {
  text-align: center;
  margin-top: 40px;
  font-size: 18px;
  color: #aaa;
  padding: 20px;
}

.product-list-transition-enter-active,
.product-list-transition-leave-active {
  transition: all 0.5s ease;
}
.product-list-transition-enter-from,
.product-list-transition-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.product-list-transition-move {
  transition: transform 0.5s ease;
}
</style>