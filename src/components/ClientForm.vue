<template>
  <v-card>
    <v-card-text>
      <form @submit.prevent="handleSubmit">
        <v-text-field v-model="form.nombre" label="Nombre" :error-messages="errors.nombre" required />
        <v-text-field v-model="form.correo" label="Correo Electrónico" :error-messages="errors.correo" required />
        <v-text-field v-model="form.telefono" label="Teléfono" :error-messages="errors.telefono" required />
        <v-btn type="submit" variant="contained">Guardar</v-btn>
        <v-btn variant="text" @click="$router.back()">Cancelar</v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({ initial: Object, editMode: Boolean })
const emit = defineEmits(['submit'])

const form = reactive({
  id: props.initial?.id ?? null,
  nombre: props.initial?.nombre ?? '',
  correo: props.initial?.correo ?? '',
  telefono: props.initial?.telefono ?? ''
})

const errors = reactive({ nombre: null, correo: null, telefono: null })

function validate() {
  errors.nombre = !form.nombre ? 'Nombre requerido' : null
  errors.correo = !/^\S+@\S+\.\S+$/.test(form.correo) ? 'Correo inválido' : null
  errors.telefono = !form.telefono ? 'Teléfono requerido' : null
  return !errors.nombre && !errors.correo && !errors.telefono
}

function handleSubmit() {
  if (!validate()) return
  emit('submit', { ...form })
}
</script>