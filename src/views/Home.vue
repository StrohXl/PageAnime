<template>
    <v-row class="mb-0  ">
        <v-col class=" " >
            <Carousel class="mb-12"/>
            <div  class="d-flex justify-center titulo align-center" v-intersect="{handler: TituloIntersecting, options: {treshold:[0,0.5,1.0]}} ">
                <h1 :class="`tituloNoIntersectado ${titleIntersectado ? 'tituloIntersectado' : ''}`" color="black">Animes Populares
                </h1>
            </div>
            <ListaDeAnimes />
        </v-col>
        <v-col cols="3" class="pl-0 colResponsive">
            <miniTop/>
        </v-col>
    </v-row>
</template>
<script setup >
import miniTop from '../components/MiniTop'
import Carousel from '../components/Carousel/'
import ListaDeAnimes from '../components/ListaDeAnimes'
import { ref } from 'vue'
import '../styles/responsive.css'
const titleIntersectado = ref(false)
const TituloIntersecting = (titleIntersecting, entries, observer) => {
    titleIntersectado.value = titleIntersecting

}
</script>
<style>
.tituloNoIntersectado {
    color: black !important;
    transition: padding 1s;
    padding-bottom: 120px;
}
.tituloIntersectado {
    font-size: 80px;
    font-family: 'Island Moments' ;
    padding-bottom: 0px;
}
.titulo{
    border: 4px solid var(--color-negro);
    height: 80px;
    background-color: var(--color-blanco-transparente);
}
</style>