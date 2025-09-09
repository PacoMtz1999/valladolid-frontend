<template>
  <div>
    <h2>Listado de Clientes</h2>
    <v-card>
      <v-card-text>
        <v-data-table :items="clientes" :headers="headers" item-key="id">
          <template #item.actions="{ item }">
            <v-btn icon :to="{ name: 'clientes.edit', params: { id: item.id } }">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="confirmDelete(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const clientes = computed(() => store.getters.allClientes)

const headers = [
  { title: 'Nombre', key: 'nombre' },
  { title: 'Correo', key: 'correo' },
  { title: 'Teléfono', key: 'telefono' },
  { title: 'Acciones', key: 'actions', sortable: false }
]

function confirmDelete(item) {
  if (confirm(`¿Eliminar al cliente ${item.nombre}?`)) {
    store.dispatch('deleteCliente', item.id)
  }
}
</script>