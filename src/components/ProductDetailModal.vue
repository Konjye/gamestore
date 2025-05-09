<template>
  <div v-if="product" class="modal-overlay" @click.self="emitClose">
    <div class="modal-content">
      <button class="close-button" @click="triggerCloseEvent">×</button>
      <div class="modal-header">
        <img :src="product.img" :alt="product.title" class="detail-image">
        <div class="header-info">
          <h3>{{ product.title }}</h3>
          <p class="price-modal"><strong>Ціна: {{ product.price > 0 ? product.price + ' грн.' : 'Безкоштовно' }}</strong></p>
          <button
              @click="handleAddToCart"
              :disabled="isAddedState"
              :class="{ 'added-to-cart': isAddedState }"
              class="add-to-cart-modal-btn"

          >
            <span v-if="!isAddedState">Додати в кошик</span>
            <span v-else>✓ В кошику</span>
          </button>
        </div>
      </div>

      <div class="modal-body" ref="modalBodyContentRef">
        <h4>Опис:</h4>
        <p class="full-description">{{ product.full_desc || product.short_desc || "Детальний опис для цієї гри ще не додано." }}</p>

        <div v-if="product.os_supported && product.os_supported.length > 0" class="os-support">
          <h4>Підтримувані ОС:</h4>
          <ul class="os-list">
            <li v-for="os_name in product.os_supported" :key="os_name">{{ os_name }}</li>
          </ul>
        </div>

        <div v-if="product.system_requirements" class="system-requirements">
          <h4>Системні вимоги:</h4>
          <div class="requirements-columns">
            <div class="requirements-column" v-if="product.system_requirements.minimum">
              <h5>Мінімальні:</h5>
              <ul>
                <li v-if="product.system_requirements.minimum.os"><strong>ОС:</strong> {{ product.system_requirements.minimum.os }}</li>
                <li v-if="product.system_requirements.minimum.processor"><strong>Процесор:</strong> {{ product.system_requirements.minimum.processor }}</li>
                <li v-if="product.system_requirements.minimum.memory"><strong>Оперативна пам'ять:</strong> {{ product.system_requirements.minimum.memory }}</li>
                <li v-if="product.system_requirements.minimum.graphics"><strong>Відеокарта:</strong> {{ product.system_requirements.minimum.graphics }}</li>
                <li v-if="product.system_requirements.minimum.storage"><strong>Місце на диску:</strong> {{ product.system_requirements.minimum.storage }}</li>
              </ul>
            </div>
            <div v-if="product.system_requirements.recommended" class="requirements-column">
              <h5>Рекомендовані:</h5>
              <ul>
                <li v-if="product.system_requirements.recommended.os"><strong>ОС:</strong> {{ product.system_requirements.recommended.os }}</li>
                <li v-if="product.system_requirements.recommended.processor"><strong>Процесор:</strong> {{ product.system_requirements.recommended.processor }}</li>
                <li v-if="product.system_requirements.recommended.memory"><strong>Оперативна пам'ять:</strong> {{ product.system_requirements.recommended.memory }}</li>
                <li v-if="product.system_requirements.recommended.graphics"><strong>Відеокарта:</strong> {{ product.system_requirements.recommended.graphics }}</li>
                <li v-if="product.system_requirements.recommended.storage"><strong>Місце на диску:</strong> {{ product.system_requirements.recommended.storage }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div v-else-if="!product.system_requirements && product.id" class="no-requirements">
          <p>Системні вимоги для цієї гри не вказані.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  product: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['close']);
const cartStore = useCartStore();
const modalBodyContentRef = ref(null);
const triggerCloseEvent = () => {
  console.log('ProductDetailModal: Attempting to emit "close" event.');
  emit('close');
};

const isAddedState = computed(() => {
  if (!props.product) return false;
  return !!cartStore.items.find(item => item.productId === props.product.id);
});

const emitClose = () => {
  emit('close');
};

const handleAddToCart = () => {
  if (props.product && !isAddedState.value) {
    cartStore.addProductToCart(props.product.id);
  }
};

watch(() => props.product, (newProduct) => {
  if (newProduct && modalBodyContentRef.value) {
    modalBodyContentRef.value.scrollTop = 0;
  }
}, { immediate: true });
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  padding: 20px;
  box-sizing: border-box;
}
.modal-content {
  background: #2a2a40;
  padding: 25px;
  border-radius: 10px;
  width: 95%;
  max-width: 800px;
  position: relative;
  color: #e0e0e0;
  box-shadow: 0 8px 25px rgba(0,0,0,0.6);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}
.close-button {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  color: #aaa;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 10;
}
.close-button:hover {
  color: #fff;
}

.modal-header {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #3e3e58;
}
.detail-image {
  width: 250px;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #444;
  flex-shrink: 0;
}
.header-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.header-info h3 {
  color: #ffeb3b;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 24px;
  word-break: break-word;
}
.price-modal {
  font-size: 18px;
  color: #4caf50;
  margin-bottom: 15px;
}

.modal-body {
  overflow-y: auto;
  padding-right: 10px;
  flex-grow: 1;
  scrollbar-width: thin;
  scrollbar-color: #555 #2e2e48;
}
.modal-body::-webkit-scrollbar {
  width: 8px;
}
.modal-body::-webkit-scrollbar-track {
  background: #2e2e48;
  border-radius: 4px;
}
.modal-body::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 4px;
  border: 2px solid #2e2e48;
}
.modal-body::-webkit-scrollbar-thumb:hover {
  background-color: #777;
}


.modal-body h4 {
  color: #ffeb3b;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  border-bottom: 1px solid #3e3e58;
  padding-bottom: 5px;
}
.modal-body h4:first-child {
  margin-top: 0;
}

.full-description {
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 20px;
  word-break: break-word;
}

.os-support ul, .system-requirements ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 15px;
}
.os-support li, .system-requirements li {
  padding: 4px 0;
  font-size: 15px;
  color: #bbb;
  word-break: break-word;
}
.system-requirements strong {
  color: #ddd;
}

.requirements-columns {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.requirements-column {
  flex: 1;
  min-width: 250px;
}
.requirements-column h5 {
  font-size: 16px;
  color: #e0e0e0;
  margin-bottom: 8px;
}
.no-requirements {
  color: #aaa;
  font-style: italic;
  margin-top: 15px;
}

.add-to-cart-modal-btn {
  margin-top: auto;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;
}
.add-to-cart-modal-btn.added-to-cart {
  background-color: #4caf50;
  color: white;
}
.add-to-cart-modal-btn:disabled {
  opacity: 0.7;
  cursor: default;
}


@media (max-width: 768px) {
  .modal-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .detail-image {
    max-width: 80%;
    width: auto;
    margin-bottom: 15px;
  }
  .header-info {
    width: 100%;
  }
  .add-to-cart-modal-btn {
    margin-top: 15px;
  }
  .requirements-columns {
    flex-direction: column;
  }
}
</style>