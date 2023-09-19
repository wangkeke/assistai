<template>
    <UModal v-model="isOpen" class="shadow-element">
      <UCard :ui="{ divide: 'outline-none' }">
        <!-- Content -->
        <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gigas-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg class="h-6 w-6 text-gigas-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
                </svg>
            </div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">删除话题</h3>
            <div class="mt-2">
                <p class="text-sm text-gray-500">您确定要删除这个话题吗？</p>
            </div>
            </div>
        </div>
        <template #footer>
          <!-- Content -->
          <div class="flex flex-row-reverse">
            <button type="button" :disabled="isDisabled" class="group inline-flex w-full justify-center rounded-md bg-gigas-800 shadow-sm hover:bg-gigas-900 px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto disabled:bg-gigas-400" @click="removeTopic()">
              <svg xmlns="http://www.w3.org/2000/svg" class=" hidden group-disabled:block mr-1" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg>
               确 定
            </button>
            <button type="button" :disabled="isDisabled" class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto disabled:text-gray-400" @click="isOpen = false" >取 消</button>
          </div>
        </template>
      </UCard>
    </UModal>
</template>

<script setup>
  import { useUserStore } from "~/stores/user"

  const router = useRouter()
  const toast = useToast()
  const useUser = useUserStore()
  const user = useUser.user

  const props = defineProps({
    open: Boolean,
    topicId: String,
  })
  const isDisabled = ref(false)
  const emit = defineEmits({
    "update:open": Boolean
  })
  const isOpen = computed({
    get() {
      return props.open
    },
    set(value) {
      emit('update:open', value)
    } 
  })

  async function removeTopic() {
    await useFetch(useRuntimeConfig().public.apiBase + "/remove_topic/" + props.topicId, {
        method: 'get',
        headers: {"Authorization":"Bearer " + user.access_token},
        retry: false,
        onRequest({ request, options }) {
            isDisabled.value = true
        },
        async onResponse({ request, response, options }) {
          isDisabled.value = false
          if(response.ok === true){
            router.push("/topic")
          }else{
            if(response.status === 401){
                useUser.removeUser()
                router.push('/login')
            }else {
                toast.add({
                    title: '删除失败！',
                    description: response._data.detail,
                    icon: 'i-heroicons-exclamation-triangle',
                    color: 'red'
                })
            }
          }
        }
    })
  }
  
</script>
