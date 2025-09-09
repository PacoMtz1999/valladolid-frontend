<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Clientes - CRUD</v-toolbar-title>
      <v-spacer />
      <v-btn to="/clientes" variant="text">Listado</v-btn>
      <v-btn to="/clientes/nuevo" variant="text">Nuevo</v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="py-4">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>