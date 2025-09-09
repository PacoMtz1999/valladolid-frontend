<template>
  <div>
    <h2>Editar Cliente</h2>
    <ClientForm :initial="cliente" :editMode="true" @submit="onUpdate" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import ClientForm from '../components/ClientForm.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

const cliente = computed(() => store.getters.getClienteById(route.params.id))

function onUpdate(payload) {
  store.dispatch('updateCliente', payload)
  router.push({ name: 'clientes.list' })
}
</script>