<template>


  <v-card class="cartaGeneros" :rounded="0">
    <v-toolbar color="blue" class="tolbarGeneros">
      <v-toolbar-title class="text-white text-h4">Top Animes</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <template v-for="(anime, index) in ListaDeAnimes">
        <v-list-item :value="index" v-if="index < 20" @click="alerta(index)">
          <v-row>
            <v-col cols="4">
              <v-avatar size="70" :rounded="0"><img :src="anime.src" class="w-100 h-100" alt=""></v-avatar>
            </v-col>
            <v-col>
              <v-list-item-title>{{ index + 1 }}</v-list-item-title>
              <v-list-item-subtitle>{{ anime.name }}</v-list-item-subtitle>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-list-item>

      </template>


    </v-list>
  </v-card>

</template>

<script setup>
import { ref } from 'vue';
import ListaDeAnimes from '../json/ListaDeAnimes.json'
const valor = ref(0)
const alerta=(epale)=>{
  const Datos=ListaDeAnimes[epale]
}

</script>
<style>
.cartaGeneros {
  border: 4px solid var(--color-negro) !important;
}

.genero:hover {
  cursor: pointer;
  color: green;

}
</style>