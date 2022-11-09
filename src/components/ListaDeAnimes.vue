<template>
    <div v-intersect="{ handler: imgIntersecting1, options: { threshold: [0, 0.2, 1.0] } }" class="mt-12">
        <v-row>
            <template v-for="(Anime, index) in ListaDeAnimes">
                <v-col class="d-flex justify-center pa-4" v-if="index < 8">
                    <v-card width="179" height="260px" class="carta" :rounded="0">
                        <div style="height: 190px; " class="contentImg" >
                            <div class="play play-active">
                                <v-icon class="text-h1 text-blue">mdi-play-circle</v-icon>
                            </div>
                            <img :src="Anime.src" :class="`imagenlist ${imgIntersectada1 ? ' imagenIntersectada' : ''}`">
                        </div>
                        <v-card-title primary-title class="text-start text-subtitle-1">
                            {{ Anime.name }}
                        </v-card-title>
                        <v-card-text class="d-flex justify-space-between">
                            {{ Anime.contenido }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </template>
        </v-row>
    </div>
    <div v-intersect="{ handler: imgIntersecting2, options: { threshold: [0, 0.2, 1.0] } }">
        <v-row>
            <template v-for="(Anime, index) in ListaDeAnimes">
                <v-col class="d-flex justify-center pa-4" v-if="index > 8 && index < 17">
                    <v-card width="179" height="260px" class="carta"  :rounded="0">
                        <div style="height: 190px;" class="contentImg">
                            <div class="play play-active">
                                <v-icon  class="text-h1 text-blue">mdi-play-circle</v-icon>
                            </div>
                            <img :src="Anime.src" :class="`imagenlist ${imgIntersectada2 ? ' imagenIntersectada' : ''}`">
                        </div>
                        <v-card-title primary-title class="text-start text-subtitle-1">
                            {{ Anime.name }}
                        </v-card-title>
                        <v-card-text class="d-flex justify-space-between">
                            {{ Anime.contenido }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </template>
        </v-row>
    </div>
    
    


</template>
<script setup>
import ListaDeAnimes from '../json/ListaDeAnimes.json'
import { ref } from 'vue';
const imgIntersectada1 = ref(false)
const imgIntersectada2 = ref(false)
const imgIntersectada3 = ref(false)
const imgIntersectada4 = ref(false)
const imgIntersecting1 = (imgIntersect, entries, observer) => {
    imgIntersectada1.value = entries[0].intersectionRatio >= 0.2
}
const imgIntersecting2 = (imgIntersect, entries, observer) => {
    imgIntersectada2.value = entries[0].intersectionRatio >= 0.2
}
const imgIntersecting3 = (imgIntersect, entries, observer) => {
    imgIntersectada3.value = entries[0].intersectionRatio >= 0.2
}
const imgIntersecting4 = (imgIntersect, entries, observer) => {
    imgIntersectada4.value = entries[0].intersectionRatio >= 0.2
}
</script>
<style>

.play {
    display: none;
}

.contentImg:hover .imagen {
    object-fit: cover;

}

.contentImg:hover .play {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-negro-transparente);
    height: 100%;
    width: 100%;
    position: absolute !important;
    z-index: 100;
}

.carta {
   border: 2px solid var(--color-negro) !important;
}

.ListaRow {
    background: #fff;
}

.imagenlist {
    transition: 0.8s all !important;
    object-fit: fill;
    z-index: 1;
    height: 100%;
    width:100%;
    opacity: 0;
    scale: 0.8;
    border-bottom: 2px solid var(--color-negro);
}

.imagenIntersectada {
    scale: 1;
    opacity: 1;
}

.ver {
    text-decoration: none;
    color: green;
    font-size: 20px;
}
</style>