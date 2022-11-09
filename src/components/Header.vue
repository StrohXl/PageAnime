<template>
    <v-toolbar density="comfortable" style="background-color:var(--color-negro-transparente); "
        class="text-white tolbar">
        <v-toolbar-title class="text-h3  text-blue">Vue<span class="text-white">Anime</span></v-toolbar-title>
        <RouterLink class="h-100" to="/" >
            <v-btn :rounded="0" class="boton" style="height: 100%;">
                Inicio
            </v-btn>
        </RouterLink>
        <RouterLink class="h-100" to="/Animes" >
            <v-btn :rounded="0" class="boton" style="height: 100%;">
                Animes
            </v-btn>
        </RouterLink>
        <RouterLink class="h-100" to="/TopAnimes" >
            <v-btn :rounded="0" class="boton" style="height: 100%;">
                Top Animes
            </v-btn>
        </RouterLink>
        <RouterLink class="h-100" to="/Emision" >
            <v-btn :rounded="0" class="boton" style="height: 100%;">
                Emision
            </v-btn>
        </RouterLink>
        <v-btn icon>
            <v-icon color="white">mdi-magnify</v-icon>
        </v-btn>
    </v-toolbar>
</template>
<script setup>
const opciones = ['Inicio', 'Animes', 'hentai']
const ruta = ['/', '/Animes', 'hentai']

</script>
<style>
.tolbar {
    position: fixed !important;
    width: 100% !important;
    z-index: 100;
}

.boton {
    cursor: pointer !important;
}
a{
    text-decoration: none;
}

a .boton {

    color: white;
    font-size: 10px;
}

.boton:hover {
    background-color: var(--color-blue);
}

.boton:hover a {
    color: white;

}
</style>