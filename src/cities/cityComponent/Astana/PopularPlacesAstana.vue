<template>
  <div class="popularContainer">
    <p class="headline q-pa-md">Популярные места</p>

  <div class="q-pa-md">
    <div style="align-items: flex-start;" v-for="places in popularPlaces" :key="places.id" class="img" :class="[$q.screen.width < 850 ? 'column' : 'row q-gutter-md q-pt-lg']">
      <img
        class="col fit placesAstana"
          :src="places.img"
        />
       <div class="col">
        <p class="q-pt-md placesheadline" :class="[$q.screen.width < 850 ? 'headlinePlacesMobile' : 'headlinePlacesDesktop']"> {{ places.place }}</p>
        <p :class="[$q.screen.width < 850 ? 'descPlacesMobile' : 'descPlacesDesktop']"> {{ places.description }}</p>
       </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
data (){
  return {
    popularPlaces: [
  {
    id: 1,
    place: 'Хазре́т Султа́н',
    description: 'Здание построено в классическом исламском стиле с применением традиционных казахских орнаментов. ',
    img: 'https://images.unsplash.com/photo-1558184800-5b5fb7421d27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    place: 'ЭКСПО-2017',
    description: 'Международная специализированная выставка под эгидой (МБВ), прошедшая в столице Казахстана городе Астане с 10 июня по 10 сентября 2017 года',
    img: 'https://images.unsplash.com/photo-1588085350422-200b573baedc?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    place: 'Хан Шатыр',
    description: 'Является самым большим "шатром» в мире", вошёл в десятку лучших мировых экозданий по версии журнала Forbes Style',
    img: 'https://images.unsplash.com/photo-1549615558-a2e10948ad3b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    place: 'Байтерек',
    description: '«Байтерек» своим расположением и композиционным строением выражает космогонические представления древних кочевников, по преданиям которых, на стыке миров протекает Мировая река.',
    img: 'https://images.unsplash.com/photo-1641990306910-7080cae8daa5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]
  }
}
}
</script>

<style>
:root{
  --color: #EC7636;
}
.popularContainer{
    height: auto;
    color: #FFFFFF;
    background-color: #000;
}

.popularContainer .headline{
  font-size: 24px;
  font-weight: bold;
  color: var(--color)
}

.placesheadline{
  color: var(--color);
  font-weight: bold;
}

.headlinePlacesDesktop{
  font-size: 30px;
}

.descPlacesDesktop{
  font-size: 20px;
}
</style>