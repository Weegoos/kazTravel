<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="registrationContainer col fixed-center">
    <div class="registrationWrapper q-gutter-y-md column"> 
      <h3>Регистрация</h3>
      <form>
        <q-input type="text" @keyup="checkUserName" name="user_name" v-model="name" label="Укажите имя пользователя" hint="Имя пользователя должен содержать 3 символа"></q-input>
        <q-input :type="isPwd ? 'password' : 'text'" @keyup="checkPassword" name="password" v-model="password" label="Укажите пароль" hint="Пароль пользователя должен содержать 8 символов">
          <template v-slot:prepend>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="togglePasswordVisibility" />
          </template>
        </q-input>
        <br>
        <q-btn class="clickBtn" size="16px" rounded label="Отправить" @click="register"/>
      </form>
    </div>
  </div>
</template>

<script>
console.clear()
import api from '../api';
import { Notify } from 'quasar'

export default {
  data() {
    return {
      name: '',
      password: '',
      isPwd: true
    };
  },
  methods: {
    async register() {
      const data = {
        user_name: this.name,
        password: this.password
      };

      try {
        const response = await api.registerUser(data);
        if (response.status === 200) {
          Notify.create('Пользователь успешно зарегистрирован!')
        } else if (response.status === 400) {
          Notify.create('Пользователь с таким именем уже существует!')
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        Notify.create('Произошла ошибка при регистрации или пользователь уже существует!')
      }
    },
    togglePasswordVisibility() {
      this.isPwd = !this.isPwd;
    }
  }
};
</script>

<style>
.clickBtn {
  width: 50vh;
}
</style>
