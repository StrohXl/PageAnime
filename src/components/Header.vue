<template>
    <v-toolbar density="comfortable" style="background-color:var(--color-negro); "
        class="text-white tolbar">
        <v-toolbar-title class="text-h3  text-blue">Vue<span class="text-white">Anime</span></v-toolbar-title>
        <nav class="Nav">
           <template v-for="(item, index) in MenuItem">
             <RouterLink class="h-100" :to="MenuItemRoutes[index]">
                 <v-btn :rounded="0" class="boton text-white text-subtitle-1" style="height: 100%;">
                     {{item}}
                 </v-btn>
             </RouterLink>
           </template>
            <v-btn icon>
                <v-icon color="white">mdi-magnify</v-icon>
            </v-btn>
        </nav>
      <div class="burger">
          <v-btn :rounded="0" @click="Activeburger" class="d-flex align-center rounded-circle h-100"><v-icon class="text-h3 rounded-circle :hover-red">mdi-menu</v-icon></v-btn>
      </div >
    
    </v-toolbar>
    <navResponsive :class="navActive?' navResponsiveActive':''" @click="Activeburger"/>
 
</template>
<script setup>
import navResponsive from './NavResponsive.vue'
import '../styles/responsive.css'
import { ref } from 'vue';
const navActive = ref(false)
const MenuItem =['Inicio','Animes','Top Animes','Emision']
const MenuItemRoutes =['/','/Animes','/TopAnimes','/Emision']
const Activeburger=()=>{
navActive.value=(!navActive.value)
}
</script>
<style>
.burger{
    display: none;
}
.Nav {
    height: 100%;
}

.tolbar {
    position: fixed !important;
    width: 100% !important;
    z-index: 100;
}
a {
    text-decoration: none;
}
.boton:hover {
    background-color: var(--color-blue);
}
</style>