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
      <q-chat-message
        label="Today"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Hi, how r you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['doing fine, how r you?']"
        stamp="4 minutes ago"
      />
    </div>
    <q-separator />
    <div class="inputBot">
      <q-input v-model="messages" outlined bottom-slots label="Label" >
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>/start</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>/getStatus</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        <template v-slot:append>
          <q-btn @click="sendMsg" round dense flat icon="send" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     messages: '',
  //     userText: 'Batyr',
  //   };
  // },
  // methods: {
  //   sendMsg() {
  //     this.text = this.message;
  //   }
  // }
};
</script>

<style>
.botBody {
  width: 50vh;
  background-color: white;
  height: 550px;
  margin-bottom: 75px;
  box-sizing: border-box;
  border: solid #000 1px;
  border-radius: 15px;
}

.chat {
  height: 70%;
}

.headerBot {
  height: 10%;
}
</style>
