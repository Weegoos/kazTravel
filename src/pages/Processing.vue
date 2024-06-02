<template>
    <div class="fullscreen bg-secondary text-white text-center q-pa-md flex flex-center">
      <div>
        <div style="font-size: 30vh">
          ...
        </div>
  
        <div class="text-h2" style="opacity:.4">
            This is a page in processing...
        </div>
  
        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/"
          label="Go Home"
          no-caps
        />
      </div>
    </div>
  </template>
  
  <script setup>
  defineOptions({
    name: 'ErrorNotFound'
  });
  </script>
  