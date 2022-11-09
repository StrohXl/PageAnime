<template>
    <footer class="mt-10">
        <v-row>
            <v-col class="d-flex justify-center align-center">
                <ul>
                    <li class="mt-5 list-0" v-for="valor in parte1">{{valor}}</li>
                </ul>
            </v-col>
            <v-col class="d-flex justify-center align-center">
                <ul>
                    <li class="mt-5 list-decoration-0" v-for="valor in parte2">{{valor}}</li>
                </ul>
            </v-col>
            <v-col class="d-flex justify-center align-center">
                <ul>
                    <li class="mt-5 d-flex " v-for="valor in parte3">VueAnime<v-icon class="ml-2 pb-1">{{valor}}</v-icon></li>
                </ul>
            </v-col>
        </v-row>
        <div class="text-center mt-12 text-subtitle-2">VueAnime ©2022 Created by Xavier Mayora</div>
    </footer>
</template>
<script setup>
const parte1=['Top Animes','Animes en Emision','Todos los Animes']
const parte2=['Top Animes','Animes en Emision','Categorias']
const parte3=['mdi-facebook','mdi-whatsapp','mdi-twitter']
</script>

<style>
footer {
    
    display: flex;
    flex-direction: column;
    height: 220px;
    color: white;
    background-color: rgb(41, 41, 41);
}
footer li{
    list-style: none;
}
footer li:hover{
    color:var(--color-blue);
    cursor: pointer;
}
</style>