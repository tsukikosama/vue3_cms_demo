
import { createRouter,createWebHashHistory } from 'vue-router'
import index from '../pages/index.vue'
const routes = [
    {
        path: '/',
        name:'home',
        component: index,
        meta:{ title:'首页'},
        children:[
            {
                path:'/waterfall',
                name:'waterfall',
                component : ()=>import('../pages/waterfall.vue'),
                meta:{title: '瀑布流'},
                children:[
                    {
                        path: '/b2',
                        name:'b2',
                        component: ()=>import('../pages/waterfall.vue'),
                        meta:{ title:'瀑布流'}
                    }
                ]
            },
            {
                path: '/button',
                name:'button',
                component: ()=>import('../components/MyButton.vue'),
                meta:{ title:'按钮'}
            }
        ]
    },


]
const router = createRouter({
    // history: createWebHistory(),
    history:createWebHashHistory(),
    routes:routes
})
export default router;

