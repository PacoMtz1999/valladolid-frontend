import { createStore as createVuexStore } from 'vuex'

export function createStore() {
  return createVuexStore({
    state: () => ({
      clientes: [
        { id: '1', nombre: 'Juan Pérez', correo: 'juan@example.com', telefono: '555-1234' },
        { id: '2', nombre: 'María López', correo: 'maria@example.com', telefono: '555-5678' }
      ],
      error: null
    }),
    getters: {
      allClientes: (state) => state.clientes,
      getClienteById: (state) => (id) => state.clientes.find(c => c.id === id)
    },
    mutations: {
      CREATE_CLIENTE(state, cliente) { state.clientes.push(cliente) },
      UPDATE_CLIENTE(state, cliente) {
        const idx = state.clientes.findIndex(c => c.id === cliente.id)
        if (idx !== -1) state.clientes.splice(idx, 1, cliente)
      },
      DELETE_CLIENTE(state, id) {
        state.clientes = state.clientes.filter(c => c.id !== id)
      },
      SET_ERROR(state, err) { state.error = err },
      CLEAR_ERROR(state) { state.error = null }
    },
    actions: {
      createCliente({ commit }, payload) {
        const cliente = { ...payload, id: payload.id ?? String(Date.now()) }
        commit('CREATE_CLIENTE', cliente)
        commit('CLEAR_ERROR')
        return cliente
      },
      updateCliente({ commit }, payload) {
        commit('UPDATE_CLIENTE', payload)
        commit('CLEAR_ERROR')
      },
      deleteCliente({ commit }, id) {
        commit('DELETE_CLIENTE', id)
        commit('CLEAR_ERROR')
      }
    }
  })
}