<template>
  <div class="contactUs">
    <div class="intro text-center">
        <p>Contact Us</p>
        <p>Any question or remarks? Just write us a message!</p>
    </div>

    <div class="mainInfo shadow-box" :class="[$q.screen.width < 600 ? 'column' : 'row' ]">
        <div class="contactInfo col bg-black">
         <div class="q-mb-lg">
          <p class="q-pl-md" :class="[$q.screen.width < 600 ? 'contactInfoHeaderMobile' : 'contactInfoHeaderDesktop' ]">Contact Information</p>
          <p class="q-pl-md" :class="[$q.screen.width < 600 ? 'contactInfoDesctiptionMobile' : 'contactInfoDescriptionDesktop' ]">Say something to start a live chat</p>
         </div>
          <div class="q-mt-xl contactInfoDetails">
            <q-btn icon="phone" label="+7-XXX-XX-XX"/> <br>
          <q-btn icon="email" no-caps label="@mail.ru"/> <br>
          <q-btn icon="place" no-caps label="Город Астана, Улица Бұқар жырау 55"/>
          </div>

          <div class="q-mt-xl q-pl-sm">
            <q-btn round icon="style" to="/"/>
            <q-btn round icon="style" />
            <q-btn round icon="style" />
          </div>
        </div>
        <div class="collaborationInfo col">Ashim</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.contactInfo{
    color: #FFFFFF;
    border-radius: 16px;
}

/* mobile */
.contactInfoHeaderMobile{
  font-size: 30px;
}

.contactInfoDesctiptionMobile{
  font-size: 16px;
  color: gray;
}
</style>