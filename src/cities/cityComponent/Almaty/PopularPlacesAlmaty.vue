<template>
 <div>
       <div class="popularContainer">
      <p class="headline q-pa-md">Популярные места</p>
  
    <div class="q-pa-md">
      <div style="align-items: flex-start;" v-for="places in popularPlaces" :key="places.id" class="img" :class="[$q.screen.width < 850 ? 'column mobileVersionPopular' : 'row desktopVersionPopular q-gutter-md q-pt-lg']">
        <img
          class="col fit placesAlmaty"
            :src="places.img"
          />
         <div class="col">
          <p class="q-pt-md placesheadline" :class="[$q.screen.width < 850 ? 'headlinePlacesMobile' : 'headlinePlacesDesktop']"> {{ places.place }}</p>
          <p :class="[$q.screen.width < 850 ? 'descPlacesMobile' : 'descPlacesDesktop']"> {{ places.description }}</p>
         </div>
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
    place: 'Большое Алматинское озеро',
    description: 'Высокогорный водоём в Заилийском Алатау на высоте 2510 метров над уровнем моря, в 15 километрах южнее города Алма-Аты ',
    img: 'https://images.unsplash.com/photo-1572940734104-684309ed7ac9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      place: 'Шымбулак',
      description: 'Популярный горнолыжный курорт в Казахстане, близ Алма-Аты, расположенный на хребте Заилийский Алатау немного выше высокогорного катка «Медео».',
      img: 'https://images.unsplash.com/photo-1523125231080-51ceb791c0ab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      place: 'Алма-Арасан',
      description: 'Живописное горное ущелье, находится на юго-западе Алма-Аты. Расположено на высоте 1780 м на северном склоне Заилийского Алатау.',
      img: 'https://images.unsplash.com/photo-1603454211489-162865d96cc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFsbWF0eXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 4,
      place: 'Алматинский регион',
      description: '',
      img: 'https://images.unsplash.com/photo-1630487670154-abd8c736df66?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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

  .desktopVersionPopular img{
    max-height: 450px;
  }

  .mobileVersionPopular img{
    height: 50px;
  }
  </style>