import { useUserStore } from "~/stores/user"

export default defineNuxtRouteMiddleware((to, from) => {
    // https://nuxt.com/docs/guide/directory-structure/middleware
    const useUser = useUserStore()
    const auth = useUser.user
    if(!auth){
        if(to.path !== '/login' && to.path !== '/regist' && to.path !== '/resetpwd'){
            return navigateTo('/login')
        }
    }else{
        if(to.path==='/' || to.path==='/index' || to.path==='/login' || to.path==='/regist' || to.path==='/resetpwd'){
            return navigateTo('/topic')
        }
    }
})