<template>
    <nav class="navResponsive">
        <v-list class="w-100 pt-0 pb-0">
            <v-row class="d-flex flex-column h-100 w-100 ma-0">
                <template v-for="(item, index) in listItem">
                    <v-col class="navCol bg-blue pa-0 ">
                        <RouterLink :to="routerItem[index]" class="h-100">
                            <v-col class="h-100 d-flex align-center justify-center text-h3 text-white">{{ item }}</v-col>
                        </RouterLink>
                    </v-col>

                </template>
            </v-row>
        </v-list>
    </nav>
</template>
<script setup>
import '../styles/responsive.css'
const listItem = ['Inicio', 'Animes', 'Top Animes', 'Emision']
const routerItem = ['/', '/Animes', '/TopAnimes', '/Emision']
</script>
<style>
.navCol:hover {
    padding: 0  !important;
    background-color: rgb(0, 119, 255) !important;
}
.navResponsive {
    display: none;
    top: -1000px;
    z-index: 10 !important;
    height: calc(100vh - 56px);
    width: 100vw;
    left: 0px !important;
    position: fixed;
    transition: 0.8s top;
}


</style>