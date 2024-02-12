<template>
  <div id="app">
    <top/>
    <router-view>
    </router-view>
    <bot/>
  </div>
</template>

<script>
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'
import  'animate.css'
import top from './components/top.vue'
import home from './components/home.vue'
import about from './components/about.vue'
import project from './components/project.vue'
import contact from './components/contact.vue'
import bot from './components/bot.vue'


export default {
  name: 'App',
  components: {
    home,
    top,
    about,
    project,
    contact,
    bot
  }
}
</script>

<style>
a{text-decoration:none}
a:hover{text-decoration:none}  /*超連結去底線*/

h1,h2,h3,h4,h5,p,a {
    font-family: "Noto Sans TC", sans-serif;
}

</style>
