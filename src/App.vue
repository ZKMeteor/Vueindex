<template>
  <div id="app">
    <top/>
    <router-view>
        <home/>
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

.container-fluid{
    padding:4% 3% ;
}

.row > div{
    padding: 3%;
}

h1{
    color: purple;
    letter-spacing:0.15em;
    font-size:60px;
    font-weight:800;    /* 粗體 */
    text-align: center;
}

h2{
    font-weight:800;    /* 粗體 */
    font-size: 40px;
    color: rgba(255, 175, 1, 0.973);

}

h3{
    color: purple;
    font-size: 25px;
    line-height:1.2em ;
    letter-spacing:0.1em;
    text-align: left;
}

hr{
    border-color: #727878;
    opacity: 0.3;
    align-items: center;
    width: 100%;
    margin:40px 0px;
}

@media screen and (max-width: 767px){

.mainpicture img{
    height: 50vh;
    width: 100%;
    object-fit:cover;
    object-position:50% 50%;
}

.title2 p{
    font-size: 20px;
}

.title4 p{
    color: black;
    font-size: 20px;
    line-height: 1.8em;
    letter-spacing: 0.1em;
    word-wrap:break-word;   /*以單字為單位換行*/
} 
h1{
    font-size:30px;
}

h2{
font-size: 25px;
}

h3{
font-size: 10px;
}


.bot{
    font-size: 15px;   
}

}
</style>
