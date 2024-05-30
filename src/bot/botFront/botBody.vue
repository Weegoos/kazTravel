<template>
  <div class="botBody">
    <div class="headerBot row" style="align-items: center;">
      <q-avatar class="q-mr-lg">
        <img src="https://plus.unsplash.com/premium_photo-1682309512367-d835725f65f7?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar">
      </q-avatar>
      <p>KazTravelBot</p>
    </div>
    <q-separator />
    <div class="chat">
      <p v-if="isText">Пока нет сообщений...</p>
      <div v-if="isTextVisible">
        <q-chat-message
        label="Today"
      />
      <q-chat-message v-for="msg in message" :key="msg.id" 
        :name="msg.name"
        :avatar="msg.avatar"
        :text="[msg.text]"
        :sent="msg.sent"
      />
      </div>
    </div>
    <q-separator />
    <div class="inputBot">
      <q-select filled round bottom-slots v-model="UserMsg" :options="options" label="Label" :dense="dense" :options-dense="denseOpts">
        <template v-slot:append>
          <q-icon v-if="model !== ''" name="close" @click.stop.prevent="model = ''" class="cursor-pointer" />
        </template>
        <template v-slot:after>
          <q-btn @click="sendMsg" round dense flat icon="send" />
        </template>
      </q-select>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import botAnswerJson from '../botAnswer.json';
  console.log(botAnswerJson[0].registration.benefit);
export default {
  data() {
    return {
      model: ref(null),
      options: [
        '/start', 'Для чего нужно регистрироваться?'
      ],
      message: [],
      UserMsg: '',
      dense: ref(false),
      denseOpts: ref(false),
      counterForUserMsg: 0,
      isText: true,
      isTextVisible: false,
    }
  },
  methods: {
    sendMsg: function () {
      for (let index = 0; index < 1; index++) {
        this.counterForUserMsg++;
      }
      this.message.push({
        id: this.counterForUserMsg,
        text: this.UserMsg,
        sent: true,
        name: "Me",
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s'
      })

      this.isText = false
      this.isTextVisible = true
      this.botAnswer()
    },

    botAnswer: function (){
      let userCheck = sessionStorage.getItem('user')
      for (let index = 0; index < 1; index++) {
          this.counterForUserMsg++;
        }
      if (this.UserMsg === botAnswerJson[0].introduction.start){
        userCheck != null ? this.message.push({
          id: this.counterForUserMsg,
          text: botAnswerJson[0].introduction.startCorrectAnswer,
          sent: false,
          name: "Chat Bot",
          avatar: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'
        }) : 
        this.message.push({
          id: this.counterForUserMsg,
          text: botAnswerJson[0].introduction.startLoginAnswer,
          sent: false,
          name: "Chat Bot",
          avatar: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'
        })
      }

      if (this.UserMsg === botAnswerJson[0].registration.benefit){
        this.message.push({
          id: this.counterForUserMsg,
          text: botAnswerJson[0].registration.benefitAnwer,
          sent: false,
          name: "Chat Bot",
          avatar: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'
        })
      }
    }
  }
}
</script>

<style>
.botBody {
  width: 50vh;
  background-color: white;
  height: 550px;
  margin-bottom: 75px;
  box-sizing: border-box;
  border: solid #000 1px;
  /* border-radius: 15px; */
}

.chat {
  height: 79%;
  overflow-y: scroll
}

.botBody{
  overflow-y: scroll;
}

.headerBot {
  height: 10%;
}
</style>
