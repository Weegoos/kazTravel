<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <div class="collaborationInfo col q-ml-md">
        <div class="wrapperCollaborationInfo relative-position" style="max-width: 75%;">
          <form action="/#/contact" method="POST">
    <q-input v-model="email" name="email" class="q-pt-md" label="Почта" />
    <q-input v-model="phone" name="phone" class="q-pt-md" label="Номер телефона" />
    <q-select v-model="collab" name="collab" class="q-py-md" :options="options" label="Тип сотрудничества" />
    <q-btn type="submit" class="bg-black" color="white" label="Отправить сообщение" />
</form>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useQuasar } from 'quasar'
  
  export default {
    setup() {
      const $q = useQuasar();
      const email = ref('');
      const phone = ref('');
      const collab = ref(null);
      const options = ref(['Трудовой договор', 'Договор гражданско-правового характера', 'Фриланс', 'Индивидуальное предпринимательство', 'Аутсорсинг']);
  
      function collabBtn() {
        if (!email.value || !phone.value || !collab.value) {
          $q.notify({
            message: "Ошибка отправки: вы должны заполнить все поля",
            color: 'red'
          });
        } else {
          $q.notify({
            message: "Данные успешно отправлены!",
            color: 'green'
          });
        }
      }
  
      return {
        email,
        phone,
        collab,
        options,
        collabBtn
      };
    }
  }
  </script>
  
  <style scoped>
  /* Add any styles here if necessary */
  </style>
  