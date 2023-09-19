import { defineStore } from "pinia"

export const useUserStore = defineStore('user', {
    state: () => ({ 
      user: JSON.parse(localStorage.getItem('user')),
    }),
    getters: {

    },
    actions: {
        saveUser(user) {
            // 保存到本地存储
            localStorage.setItem('user', JSON.stringify(user))
            this.user = user
        },
        removeUser() {
            this.user = null
            localStorage.removeItem('user')
        }
    }
  })