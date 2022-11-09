<template >
  <v-carousel theme="dark" cycle interval="3500" title="anime" show-arrows="hover" hide-delimiters-background height="400" class="carousel" >
    <template v-slot:prev="{ props }">
      <v-btn  width="20" class="botonNuevo" :rounded="0" @click="props.onClick"><v-icon class="text-h5 text-black">mdi-chevron-left</v-icon></v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn  width="20" class="botonNuevo" :rounded="0" @click="props.onClick"><v-icon class="text-h5 text-black">mdi-chevron-right</v-icon></v-btn>
    </template>
    <template v-for="(anime, i) in ListaDeAnimes">
      <v-carousel-item v-if="i < 5" class="Content-Ver " >

          <img :src="anime.Portada" alt="" class="foto ">
          <v-btn :rounded="0" color="blue" class="VerAnime" >
            <RouterLink to="/Animes">Ver {{ anime.name }} <v-icon style="font-size: 22px;">mdi-chevron-right</v-icon>
            </RouterLink>
          </v-btn>
    
      </v-carousel-item>

    </template>
  </v-carousel>
</template>
<script setup>
import ListaDeAnimes from '../json/ListaDeAnimes.json'
</script>
<style>
.botonNuevo{
  opacity: 0;
  background: #fff;
  width: 20px !important;
  border: 2px solid var(--color-negro) ;
  transition-property: opacity;
  transition-duration: 0.2s;
}
.carousel{
  border: 4px solid var(--color-negro);
}
.carousel:hover .botonNuevo{
  opacity: 1;
}
.foto{
  position: absolute;
  width: 100%;
  height: 100%;
  
}
.VerAnime{
  border: 2px solid var(--color-negro);
  position: absolute;
  bottom: 60px;
  right: 16px;
}
.VerAnime a {
  text-decoration: none;
  color: white;
}

.VerAnime:hover {
  background-color: white !important;
}

.VerAnime:hover a {
  color: var(--color-negro);
}
</style>