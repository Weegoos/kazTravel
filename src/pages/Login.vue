<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="loginContainer col fixed-center" style="min-width: 300px;">
    <div class="loginWrapper q-gutter-y-md column"> 
      <h3>Войти</h3>
      <form>
        <q-input type="text" name="login_name" v-model="log_name" label="Укажите имя пользователя"></q-input>
        <q-input :type="isPwd ? 'password' : 'text'"  name="login_pass" v-model="log_pass" label="Укажите пароль">
          <template v-slot:prepend>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="togglePasswordVisibility" />
          </template>
        </q-input>
        <br>
        <q-btn class="logBtn" size="16px" rounded label="Войти в аккаунт" @click="login"/>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../api';
import { Notify } from 'quasar'
export default {
  data() {
    return {
      log_name: '',
      log_pass: '',
      isPwd: true
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.isPwd = !this.isPwd;
    },
    async login() {
      const data = {
        username: this.log_name,
        password: this.log_pass
      };

      try {
        const response = await api.loginUser(data);
        if (response.status === 200) {
          Notify.create('Вход выполнен успешно! Обновите страницу!');
          sessionStorage.setItem('user', this.log_name)
        } else {
          Notify.create('Неверные учетные данные!');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response && error.response.status === 401) {
          Notify.create('Неверные учетные данные!');
        } else {
          Notify.create('Произошла ошибка при входе!');
        }
      }
    }
  }
}
</script>

<style>
.logBtn{
  width: 50vh;
}
</style>