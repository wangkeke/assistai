<template>
    <UModal v-model="isOpen" :ui="{width: 'max-w-lg'}">
      <form name="modifyTopicForm" onsubmit="return false">
      <UCard :ui="{
                background: 'bg-uivory-100',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800'}">
        <template #header>
          <!-- Content -->
          <h3>Update Topic</h3>
        </template>

        <!-- Content -->
          <div class="flex flex-row gap-3 leading-6 items-center mt-3">
            <label for="title" class=" basis-1/6 text-sm font-medium leading-6 text-gray-900">Topic Title</label>
            <div class="grow">
                <UInput maxlength="500" id="topic-title" v-bind:value="title" icon="i-heroicons-chat-bubble-left-ellipsis" color="gigas" variant="outline" :trailing="false" class=" bg-white block w-full disabled:text-gray-400 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-2 focus:ring-gigas-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div class="flex flex-row gap-3 leading-6 items-center mt-3">
            <label for="email" class=" basis-1/6 text-sm font-medium leading-6 text-gray-900">Chat Memory Turn</label>
            <div class="grow">
                <USelect id="topic-turn" required v-bind:value="turn" :options="turns" color="gigas" variant="outline" class="bg-white block w-full disabled:text-gray-400 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-2 focus:ring-gigas-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
        <template #footer>
          <!-- Content -->
          <div class="flex flex-row-reverse">
            <button type="submit" :disabled="isDisabled" class="group inline-flex w-full justify-center rounded-md bg-gigas-800 shadow-sm hover:bg-gigas-900 px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto disabled:bg-gigas-400" @click="submitModifyTopic()">
              <svg xmlns="http://www.w3.org/2000/svg" class=" hidden group-disabled:block mr-1" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg>
               Submit
            </button>
            <button type="button" :disabled="isDisabled" class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto disabled:text-gray-400" @click="isOpen = false" >Cancel</button>
          </div>
        </template>
      </UCard>
      </form>
    </UModal>
</template>

<script setup>
  import { useUserStore } from "~/stores/user"
  import { inject } from 'vue'

  const router = useRouter()
  const toast = useToast()
  const useUser = useUserStore()
  const user = useUser.user

  const props = defineProps({
    open: Boolean,
    topicId: String,
    title: String,
    turn: String,
  })

  const isDisabled = ref(false)
  const turns = [0,1,2,3,4,5]

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

  const updateTopic = inject("updateTopic")

  async function submitModifyTopic(){
    if(!document.forms.modifyTopicForm.checkValidity()){
        return
    }
    let bodyData = {
          "id": props.topicId, 
          "title": document.getElementById("topic-title").value,
          "turn": document.getElementById("topic-turn").value
        }
    await useFetch(useRuntimeConfig().public.apiBase + "/topic/update/" + props.topicId, {
        method: 'post',
        headers: {"Authorization":"Bearer " + user.access_token},
        retry: false,
        body: bodyData,
        onRequest({ request, options }) {
            isDisabled.value = true
        },
        async onResponse({ request, response, options }) {
          isDisabled.value = false
          if(response.ok === true){
            updateTopic(bodyData.title, bodyData.turn)
            isOpen.value = false
          }else{
            if(response.status === 401){
                useUser.removeUser()
                router.push('/login')
            }else {
                toast.add({
                    title: '操作失败！',
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
