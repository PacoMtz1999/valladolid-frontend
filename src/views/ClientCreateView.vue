<template>
  <div>
    <h2>Alta de Cliente</h2>
    <ClientForm @submit="onCreate" />
  </div>
</template>

<script setup>
import ClientForm from '../components/ClientForm.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

function onCreate(cliente) {
  store.dispatch('createCliente', cliente)
  router.push({ name: 'clientes.list' })
}
</script>