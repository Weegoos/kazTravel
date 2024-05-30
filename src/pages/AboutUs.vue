<template>
  <div class="q-px-lg q-py-md">
    <q-timeline color="secondary" >
      <q-timeline-entry heading body="Наша история"  />
        <q-timeline-entry v-for="historyText in history" :key="historyText.date"
        :title="historyText.title"
        :subtitle="historyText.date"
        :avatar="historyText.avatar"
        :body="historyText.body"
        :icon="historyText.icon"
        :color="historyText.color"
        />
    </q-timeline>
    <!-- FAQ -->
    <div>
      <FAQ />
    </div>
  </div>
</template>

<script>
import FAQ from '../components/FAQ.vue';
import profile from '../assets/profile.jpg';
export default {
  components: {
    FAQ
  },
  data () {
    return {
      history: [
        {
          date: 'Май 01, 2024',
          title: 'Cоздание',
          avatar: profile,
          body: 'Студент Astana IT University'
        },
        {
          date: 'Май 05, 2024',
          title: 'Разработка',
          body: 'Разрабатывался сайт'
        },
        {
          date: 'Май 12, 2024',
          title: 'Команда',
          icon: 'style',
          body: 'Командная работа'
        },
        {
          date: 'Июнь 1, 2024',
          title: 'Завершение',
          icon: 'done_all',
          body: 'Закончили проект',
          color: 'orange'
        },
      ]
    }
  }
}
</script>