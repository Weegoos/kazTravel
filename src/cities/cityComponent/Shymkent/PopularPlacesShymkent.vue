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
       place: 'Rixos Khadisha Shymkent',
       description: 'В ресторане Kazakhasia подают разнообразные блюда азиатской кухни, а в ресторане Olivia — блюда итальянской кухни. Напитки можно заказать в кафе Atrium и в английском баре White Horse.',
       img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/38760953.jpg?k=9735da3bcb16fb515180c9b97115ea3892b2318cbc73ef581c3fae291b9b7e30&o=&hp=1'
       },
       {
         id: 2,
         place: 'Старый город',
         description: 'Старый город Шымкента — единственное место во всём Казахстане, сохранившее свое историческое ядро',
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFg56rf8rj3v6654pFTKQzCpw3LPsKlFXJmh8HZh6fMA&s'
       },
       {
         id: 3,
         place: 'Центральная мечеть Южно-Казахстанской области',
         description: 'Яркая религиозная достопримечательность Шымкента — Центральная мечеть. Располагается она в западной части города. Построена при финансовой поддержке президента ОАЭ.',
         img: 'https://www.muftyat.kz/media/muftyat/73496_1391241190.jpg'
       },
       {
         id: 4,
         place: 'Шымкентский Арбат ',
         description: 'Самым привлекательным культурно-развлекательным центром города является «Арбат». Он расположен в самом центре Шымкента. Арбат украшают парящие над зоной отдыха 12 светящихся ангелов.',
         img: 'https://tengrinews.kz/userdata/news/2018/news_358858/thumb_b/photo_267022.jpg'
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