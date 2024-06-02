<template>
  <div class="q-px-lg q-py-md">
    <q-timeline color="secondary" >
      <transition  appear @before-enter="beforeEnterText" @enter="enterText">
      <q-timeline-entry heading body="О нас"  />
    </transition>
    <p>Добро пожаловать на наш сайт о туризме!</p>
   <div class="row">
    <div v-for="img in image" :key="img.id" class="col "> 
      <img class="imgSource" :src="img.src" alt="">
    </div>
   </div>
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
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default {
  components: {
    FAQ
  },
  data () {
    return {
      history: [
        {
          date: 'Май 01, 2024',
          title: 'Начало проекта',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_astana_it_university.png',
          body: 'С момента зарождения идеи о создании сайта о туризме началось увлекательное путешествие в мир веб-разработки.'
        },
        {
          date: 'Май 05, 2024',
          title: 'Разработка',
          body: `В процессе разработки сайта о туризме мы уделяли особое внимание расширению его функциональности и повышению его привлекательности для пользователей. Мы стремились создать интерактивное пространство, которое не только предоставляет информацию о различных туристических направлениях, но и вдохновляет к путешествиям.
          По мере продвижения проекта, мы постоянно внедряли новые функционалы, обогащая пользовательский опыт. `
        },
        {
          date: 'Май 10, 2024',
          title: 'Команда',
          body: 'Наша команда также работала над улучшением дизайна и пользовательского интерфейса, чтобы сделать сайт более привлекательным и удобным в использовании. Мы использовали современные технологии и дизайнерские приемы, чтобы создать эстетически приятное и функциональное пространство для наших пользователей.`'
        },
        {
          date: 'Июнь 1, 2024',
          title: 'Завершение',
          icon: 'done_all',
          body: 'Мы, студенты Astana IT University, с гордостью представляем нашу пробную версию нашей работы. Воплощение наших идей и стараний, этот сайт о туризме — наш вклад в мир интернета и приглашение к новым открытиям. Авторы: Студенты Astana IT University',
          color: 'orange'
        },
      ],
      image: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1569521490126-e643824699a4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1600255531489-761f242f8672?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 3,
          src: 'https://plus.unsplash.com/premium_photo-1669377175101-c4b272e611a6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    }
  },
  setup() {
    const beforeEnter = (el) => { 
      el.style.transform = 'translateY(-100px)';
      el.style.opacity = 0;
    };

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done
      });
    };

    const beforeEnterText = async (el) => {
      el.style.transform = 'translateY(-100px)';
      el.style.opacity = 0;
    };

    const enterText = async (el, done) => {
      gsap.to(el, {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: 'back.inOut',
        onComplete: done
      });
    };

    return {
      beforeEnter,
      enter,
      beforeEnterText,
      enterText
    };
  }
}
</script>

<style>
.imgSource{
  height: 35vh;
  width: 90%;
  border-radius: 15px;
}
</style>