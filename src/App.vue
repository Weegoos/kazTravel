<template>
<div>
  <div>
    <headerComponent />
  </div>
<div>
  <router-view />
</div>
<div>
  <bot />
</div>
</div>
</template>

<script>
import headerComponent from "../src/pages/Header.vue";
import bot from './bot/botFront/botContainer.vue';
export default {
  components: {
    headerComponent, bot
  },
  data (){
    return {}
  }
}
</script>
