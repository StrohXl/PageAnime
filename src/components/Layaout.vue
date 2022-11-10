<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
<template>
  <v-app>
    <v-main class="main">
      <Header />
      <div class="contenido">
        <RouterView />
      </div>
      <Footer />
    </v-main>
  </v-app>
</template>

<style>
:root {
  --color-blue: #2196F3;
  --color-negro: rgb(41, 41, 41);
  --color-negro-transparente: rgba(41, 41, 41, 0.671);
  --color-gris: rgb(80, 80, 80);
  --color-blanco-transparente: rgba(255, 255, 255, 0.774);
}

.main {
  background-image: url(./images/978587.png);
  background-size: 100% 680px;
  background-attachment: fixed;
}

.contenido {

  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>
