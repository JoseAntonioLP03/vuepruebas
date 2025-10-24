import { createRouter , createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import VueComponent from './components/VueComponent.vue';
import ReactComponent from './components/ReactComponent.vue';
import AngularComponent from './components/AngularComponent.vue';

//UN ARRAY CON LAS RUTAS
const myRoutes = [
    {path:"/",component: HomeComponent},
    {path:"/vue",component: VueComponent},
    {path:"/react",component: ReactComponent},
    {path:"/angular",component: AngularComponent},
]

//CREAMOS UNA VARIANLE PARA EL router INDICANDO EL TIPO DE NAVEGACION Y LAS RUTAS
const router =createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//LA CONSTANTE router ES LA QUE UTILIZARA EL FICHERO main.js
//DEBEMOS EXPORTARLA PARA QUE SEA UTILIZADA
export default router;