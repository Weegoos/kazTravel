<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    <q-layout view="lHh lpr lFf" container class="layout bg-transparent">
      <q-header class="bg-transparent headerClass">
        <q-toolbar>
          <q-btn  
            @click="drawer = !drawer" 
            icon="menu"
            v-model="fabLeft"
            vertical-actions-align="left"
            direction="up" 
            round
            flat
            size="24px"
            dense
            class="menuBtn bg-transparent"
          >
          <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-btn icon="home" flat to="/">Домой</q-btn>
            </q-item>
            <q-item clickable v-close-popup>
              <q-btn icon="style" flat to="/registration">Регистрация</q-btn>
            </q-item>
            <q-item clickable v-close-popup>
              <q-btn icon="style" flat to="/login">Вход</q-btn>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-btn icon="style" flat to="/about">О нас</q-btn>
            </q-item>
            <q-item clickable v-close-popup>
              <q-btn icon="print" flat to="/contact">Контакты</q-btn>
            </q-item>
            <q-separator />
           <div v-if="loginCheck">
            <q-item clickable v-close-popup>
              <q-btn icon="eco" flat to="/city/astana">Астана</q-btn>
            </q-item>
            <q-item clickable v-close-popup>
              <q-btn icon="eco" flat to="/city/almaty">Алмата</q-btn>
            </q-item>
            <q-item clickable v-close-popup>
              <q-btn icon="eco" flat to="/city/shymkent">Шымкент</q-btn>
            </q-item>
           </div>
          </q-list>
        </q-menu>
        </q-btn>
          <q-toolbar-title class="title">KazTravel</q-toolbar-title>
          <!-- <q-btn color="black">{{ currentCity }}</q-btn> -->
        </q-toolbar>
      </q-header>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue';
import gsap from 'gsap';
// import Drawer from '../components/Drawer.vue'; 
export default {
  data() {
    return {
      drawer: true,
      loginCheck: true,
      currentCity: null
    };
  },
  mounted() {
    this.checkLogin();
    this.getCurrentCity();
  },
  methods: {
    checkLogin() {
      const user = sessionStorage.getItem('user');
      if (user && user.length > 3) {
        this.loginCheck = true;
      }
    },
    getCurrentCity() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      
      this.fetchCityFromCoordinates(latitude, longitude);
    });
  } else {
    console.error("Геолокация не поддерживается вашим браузером");
  }
},

async fetchCityFromCoordinates(latitude, longitude) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
    const data = await response.json();
    const address = data.address;
    const city = address.city || address.town || address.village || 'Неизвестный город';
    this.currentCity = city;
    localStorage.setItem('currentCity', this.currentCity);
  } catch (error) {
    console.error("Ошибка при получении города:", error);
  }
}

  },
};
</script>

<style>
.header{
  position: relative;
  height: 65px;
}

.menuBtn{
  color: black;
  padding: 10px;
}
.layout img {
  position: absolute;
  height: 750px;
  width: 100%;
}
.title{
  color: black;
  font-size: 26px;
}

</style>
