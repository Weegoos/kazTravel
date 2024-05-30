<template>
  <div>

    <div class="" style="max-width: 100%; font-size: 16px;">
    <q-list bordered v-for="faqPart in faq" :key="faqPart.id">
      <q-expansion-item
        group="somegroup"
        icon="explore"
        :label="faqPart.question"
        header-class="bg-teal text-white"
        expand-icon-class="text-white"
        :caption="faqPart.caption"
      >
        <q-card>
          <q-card-section>
            {{ faqPart.answer }}
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />
    </q-list>
  </div>
  </div>
</template>

<script>
export default {
    data (){
        return {
            faq: [
        {
          id: 1,
          question: 'Что такое туристическая виза и как ее получить?',
          answer: 'Туристическая виза - это разрешение на въезд в другую страну с целью туризма. Ее можно получить через посольство или консульство страны назначения, предоставив необходимые документы и оплатив сбор.',
          caption: 'О сайте'
        },
        {
          id: 2,
          question: 'Как зарегистрироваться на сайте?',
          answer: 'Для регистрации на сайте нажмите на кнопку "Регистрация" в меню, заполните необходимые поля.',
          caption: 'О сайте'
        },
        {
          id: 3,
          question: 'Что предлагает сайт?',
          answer: 'Наш сайт предлагает информацию о лучших туристических направлениях в Казахстане, советы по путешествиям.',
          caption: 'О сайте'
        },
        {
          id: 4,
          question: 'Как связаться с поддержкой?',
          answer: 'Вы можете связаться с нашей службой поддержки по электронной почте support@kazTravel.com или по телефону +7-(XXX)-XX-XX',
          caption: 'О сайте'
        },
        {
          id: 5,
          question: 'Что делать если сайт не работает?',
          answer: 'Попробуйте перезагрузить страницу, очистить кэш браузера или зайти позже. Если проблема не исчезает, свяжитесь с нашей службой поддержки.',
          caption: 'Технический вопрос'
        },
      ]
        }
    }
}
</script>

<style>

</style>