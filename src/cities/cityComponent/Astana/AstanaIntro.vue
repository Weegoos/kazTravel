<template>
  <div class="astanaIntroContainer">
    <div class="wrapper"  :class="[$q.screen.width < 600 ? 'mobileVersion' : 'desktopVersion']">
        <img class="fit" src="../../../assets/astanaIntro.avif" alt="">
        <p class="q-pt-lg headerIntro" :class="[$q.screen.width < 600 ? 'headerMobileVersion' : 'headerDesktopVersion q-pt-xl']">Астана столица Казахстана!</p>
        <p :class="[$q.screen.width < 600 ? 'descriptionMobileVersion' : 'descriptionDesktopVersion']">Исследуйте мир</p>
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
    city: "Астана",
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