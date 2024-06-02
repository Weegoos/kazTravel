<template>
    <div class="astanaIntroContainer">
      <div class="wrapper"  :class="[$q.screen.width < 600 ? 'mobileVersion' : 'desktopVersion']">
          <img class="fit" src="https://images.unsplash.com/photo-1559678158-3b134ea0a873?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
          <p class="q-pt-lg headerIntro" :class="[$q.screen.width < 600 ? 'headerMobileVersion' : 'headerDesktopVersion q-pt-xl']">Алмата южная столица Казахстана!</p>
          <p :class="[$q.screen.width < 600 ? 'descriptionMobileVersion' : 'descriptionDesktopVersion']">Узнайте больше о городе!</p>
          <center><q-btn  rounded dense class="btn q-pa-sm q-ma-sm shadow-2" :class="[$q.screen.width < 600 ? 'btnIntroMobile' : 'btnIntroDesktop']" :to="isCity ? '/processing' : ''" @click="clickBtn">Рейс в {{ city }}</q-btn></center>
      </div>
    </div>
  </template>
  
  <script>
  console.clear()
  import { Notify } from 'quasar'
  export default {
   data (){
    return {
      city: "Алмата",
      isCity: ''
    }
   },
   methods: {
    clickBtn() {
      let currentCity = localStorage.getItem('currentCity')
      if (currentCity === this.city){
        Notify.create('Вы находитесь в этом городе!')
      }else {
        Notify.create('Подождите!')
        this.isCity = true;
        localStorage.setItem('flightCity', this.city)
      } 
    }
   }
  }
  </script>
  
  <style>
  .wrapper{
  position: relative
}
.mobileVersion{
    height: 500px;
}

.desktopVersion{
  height: 750px;
}

.wrapper img{
    position: absolute;
}

.wrapper p{
    color: #FFFFFF;
    position: relative;
    text-align: center;
}
.headerIntro{
  font-weight: bold;
}
.headerMobileVersion{
  font-size: 30px;
}

.desktopVersion{
  font-size: 64px;
}

.descriptionDesktopVersion{
  font-size: 50px;
}

.descriptionMobileVersion{
  font-size: 20px;
}

.wrapper .btn{
    color: #FFFFFF;
}

.btnIntroDesktop{
  font-size: 24px;
}
  </style>