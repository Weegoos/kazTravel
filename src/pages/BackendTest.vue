<template>
    <div class="q-pa-md">
      <q-btn @click="fetchData">Получить данные пользователей</q-btn>
      <div v-if="message">{{ message }}</div>
    </div>
  </template>
  
  <script>
  import api from '../api';
  
  export default {
    data() {
      return {
        message: ''
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await api.getUserData();
          this.message = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ваши стили */
  </style>
  