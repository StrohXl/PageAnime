<template>
    <div class="tituloAnimes bg-white">Lista De Animes</div>
    <v-row no-gutters justify="space-around" class="pa-12 bg-white rowAnimes">
        <template v-for="(Anime, index) in Lista">
            <v-col class="d-flex justify-center pa-2 pb-5  " v-if="index > 0 && index < cantidad">
                <v-card width="200" :rounded="0" class="cartaAnimes">
                    <div style="height: 190px;" class="contentImg">
                        <div class="play play-active">
                            <v-icon color="blue" class="text-h1">mdi-play-circle</v-icon>
                        </div>
                        <img :src="Anime.picture" class="imagen">
                    </div>
                    <v-card-title primary-title>
                        {{ Anime.title }}
                    </v-card-title>
                    <v-card-text class="d-flex justify-space-between">
                        contenido
                    </v-card-text>
                </v-card>
            </v-col>
        </template>
    </v-row>
    <div class="text-center bg-white buttomAnimes"  >
        <v-btn color="blue" class="ma-3" @click="aumentar" >Ver mas</v-btn>
    </div>
</template>
<script setup>
import ListaAnimes from '../json/Lista1.json'
import { ref } from 'vue';
const Lista = ref(ListaAnimes)
const cantidad = ref(40)
const page = ref(1)
const animesPorPagina = 40
const listadepaginas = (ListaAnimes.length/animesPorPagina)
console.log("longitud de la lista:",  ListaAnimes)
console.log("lista de paginas",  listadepaginas)

const aumentar =()=>{
    cantidad.value = cantidad.value + 40
}

</script>
<style>
.buttomAnimes{
    border: 4px solid var(--color-negro);
    border-top: none;
}
.rowAnimes{
    border: 4px solid var(--color-negro);
    border-top: none;
    border-bottom: none;
}
.cartaAnimes {
    border: 2px solid var(--color-negro);
}
.ver {
    text-decoration: none;
    color: green;
    font-size: 20px;
}
.play {
    display: none;
}
.contentImg:hover .play {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-negro-transparente);
    height: 190px;
    width: 100%;
    position: absolute !important;
    z-index: 100;
}
.imagen {
    transition: 1s all !important;
    object-fit: fill !important;
    z-index: 1;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid var(--color-negro);
}
.tituloAnimes {  
    text-align: center;
    border: 4px solid var(--color-negro);
    color: var(--color-negro);
    font-size: 7rem;
    font-family: 'Island Moments';
}
</style>