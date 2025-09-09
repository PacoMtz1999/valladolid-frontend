import { createRouter, createWebHistory } from 'vue-router'
import ClientListView from '../views/ClientListView.vue'
import ClientCreateView from '../views/ClientCreateView.vue'
import ClientEditView from '../views/ClientEditView.vue'

const routes = [
  { path: '/', redirect: '/clientes' },
  { path: '/clientes', name: 'clientes.list', component: ClientListView },
  { path: '/clientes/nuevo', name: 'clientes.create', component: ClientCreateView },
  { path: '/clientes/:id/editar', name: 'clientes.edit', component: ClientEditView, props: true }
]

export default createRouter({ history: createWebHistory(), routes })