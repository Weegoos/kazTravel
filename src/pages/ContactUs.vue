<template>
  <div class="contactUs">
    <div class="intro text-center">
        <p :class="[$q.screen.width < width ? 'introMobile' : 'introDesktop']">Контакты</p>
        <p :class="[$q.screen.width < width ? 'contactUsDescriptionMobile' : 'contactUsDescriptionDesktop']">У вас есть вопросы или замечания? Просто напишите нам сообщение!</p>
    </div>

    <div class="mainInfo shadow-box" :class="[$q.screen.width < width ? 'column' : 'row' ]">
        <div class="contactInfo col bg-black q-pt-md">
         <div class="q-mb-lg">
          <p class="q-pl-md" :class="[$q.screen.width < width ? 'contactInfoHeaderMobile text-center' : 'contactInfoHeaderDesktop' ]">Контактная информация</p>
          <p class="contactDescription q-pl-md" :class="[$q.screen.width < width ? 'contactInfoDesctiptionMobile text-center' : 'contactInfoDescriptionDesktop' ]">Скажите что-нибудь, чтобы начать живой чат</p>
         </div>
          <div class="q-mt-xl contactInfoDetails">
            <q-btn icon="phone" label="+7-XXX-XX-XX" /> <br>
          <q-btn icon="email" no-caps label="@mail.ru"/> <br>
          <q-btn icon="place" no-caps label="Город Астана, Улица Бұқар жырау 55"/>
          </div>

          <div class="q-mt-xl q-pl-sm q-gutter-md" :class="[$q.screen.width < width ? 'text-center' : '']">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J6RoBDh902FuL0sWkZeakHjZcrDPj-L3Sg&s" alt="" class="contactUsIcon">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" class="contactUsIcon">
            <img src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/telegram-512.png" alt="" class="contactUsIcon">
          </div>
        </div>
        <div class="col">
          <Collaboration />
        </div>
    </div>
  </div>
</template>

<script>
import Collaboration from '../components/Collaboration.vue';
export default {
  components: {
    Collaboration
  },
  data (){
    return {
      width: 750,
    }
  }
}
</script>

<style>
.contactUs{
  height: 1000px;
}
.contactInfo{
    color: #FFFFFF;
    border-radius: 6px;
}

.contactDescription{
  color: gray;
}

/* mobile */
.contactInfoHeaderMobile{
  font-size: 30px;
}

.contactInfoDesctiptionMobile{
  font-size: 16px;
}

.introMobile{
  font-size: 36px;
  font-weight: bold;
}

.contactUsDescriptionMobile{
  font-size: 21px;
}

/* desktop */

.contactUsIcon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  padding: 3px;
  transition: 0.5s ease;
}

.contactUsIcon:hover{
  background-color: white;
}

.contactInfoHeaderDesktop{
  font-size: 30px;
  font-weight: bold;
}

.contactInfoDescriptionDesktop{
  font-size: 18px;
}

</style>