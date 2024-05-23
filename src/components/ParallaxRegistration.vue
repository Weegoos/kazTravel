<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <div class="bg slide4 flex flex-center"></div>
    <h1>Быстрая регистрация</h1>
    <q-btn rounded class="btn" flat to="/registration" label="Зарегистрироваться"/> <br>
    <q-btn rounded class="btn" flat to="/login" label="Войти в аккаунт"/>

    </div>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style>
  .slide4{
      background-image: url('../assets/reg.avif');
  }
  </style>