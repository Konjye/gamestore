// src/stores/cart.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useProductsStore } from './products'

export const useCartStore = defineStore('cart', () => {
    const items = ref([])

    const localCart = localStorage.getItem('icychShopCart')
    if (localCart) {
        items.value = JSON.parse(localCart)
    }

    const productsStore = useProductsStore()

    const cartItemsDetailed = computed(() => {
        return items.value.map(item => {
            const product = productsStore.getProductById(item.productId)
            return {
                ...product,
                quantity: item.quantity,
                totalPrice: product ? product.price * item.quantity : 0
            }
        }).filter(item => item.id);
    })

    const cartItemCount = computed(() => {
        return items.value.reduce((sum, item) => sum + item.quantity, 0)
    })

    const cartTotalPrice = computed(() => {
        return cartItemsDetailed.value.reduce((sum, item) => sum + item.totalPrice, 0)
    })

    function saveCartToLocalStorage() {
        localStorage.setItem('icychShopCart', JSON.stringify(items.value))
    }

    function addProductToCart(productId, quantity = 1) {
        const existingItem = items.value.find(item => item.productId === productId)
        if (existingItem) {
            existingItem.quantity += quantity
        } else {
            items.value.push({ productId, quantity })
        }
        saveCartToLocalStorage()
    }

    function removeProductFromCart(productId) {
        items.value = items.value.filter(item => item.productId !== productId)
        saveCartToLocalStorage()
    }

    function updateProductQuantity(productId, newQuantity) {
        const item = items.value.find(item => item.productId === productId)
        if (item) {
            if (newQuantity > 0) {
                item.quantity = newQuantity
            } else {
                removeProductFromCart(productId)
            }
            saveCartToLocalStorage()
        }
    }

    function clearCart() {
        items.value = []
        saveCartToLocalStorage()
    }

    return {
        items,
        cartItemsDetailed,
        cartItemCount,
        cartTotalPrice,
        addProductToCart,
        removeProductFromCart,
        updateProductQuantity,
        clearCart
    }
})