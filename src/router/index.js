import VueRouter from 'vue-router'

import home from '../components/home.vue'

import about from '../components/about.vue'

import project from '../components/project.vue'

import contact from '../components/contact.vue'

import bot from '../components/bot.vue'
export default new VueRouter({
/*     mode:'history', */
    routes:[
        {
            name:'home',
            path:'/home',
            component:home,
/*             children:[
                {
                    name:'bot',
                    path:'bot',
                    component:bot,
                }
            ] */
        },
        {
            name:'about',
            path:'/about',
            component:about,
        },
        {
            name:'project',
            path:'/project',
            component:project,
        },
        {
            name:'contact',
            path:'/contact',
            component:contact
        }
    ],
})