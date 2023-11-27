<template>
    <UModal v-model="isOpen" :ui="{width: 'max-w-lg'}">
      <form name="issueForm" onsubmit="return false">
      <UCard :ui="{
                background: 'bg-uivory-100',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800'}">
        <template #header>
          <!-- Content -->
          <h3>Feedback</h3>
        </template>

        <!-- Content -->
        <div class="grid grid-cols-1 gap-x-6 gap-y-3 leading-6 sm:grid-cols-6">
          <div class="col-span-full">
            <label for="email" class=" basis-1/6 text-sm font-medium leading-6 text-gray-900">What type of issue do you wish to report?</label>
            <div class="mt-2">
              <USelect id="issue-type" required v-bind:value="topicChat?(topicChat.topic_chat_issues.length>0?topicChat.topic_chat_issues[0].type:types[0]):''" :options="types" color="gigas" variant="outline" class="block bg-white w-full disabled:text-gray-400 rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-2 focus:ring-gigas-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div class="col-span-full">
            <label for="detail" class="basis-1/6 text-sm font-medium leading-6 text-gray-900">Please provide details: (optional)</label>
            <div class="mt-2">
              <UTextarea id="issue-detail" maxlength="50" v-bind:value="topicChat?(topicChat.topic_chat_issues.length>0?topicChat.topic_chat_issues[0].detail:''):''" color="gigas" variant="outline" placeholder="What was unsatisfying about this response?" class="block bg-white w-full disabled:text-gray-400 rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-2 focus:ring-gigas-500 sm:text-sm sm:leading-6 focus:outline-none"/>
            </div>
          </div>
        </div>
        <template #footer>
          <!-- Content -->
          <div class="flex flex-row-reverse">
            <button type="submit" :disabled="isDisabled" class="group inline-flex w-full justify-center rounded-md bg-gigas-800 shadow-sm hover:bg-gigas-900 px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto disabled:bg-gigas-400" @click="submitIssue()">
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
  const router = useRouter()
  const toast = useToast()
  const useUser = useUserStore()
  const user = useUser.user
  const props = defineProps({
    open: Boolean,
    topicChat: Object
  })

  const isDisabled = ref(false)
  const types = ref(['Bug', 'Harmful content', 'Other'])

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

  async function submitIssue(){
    if(!document.forms.issueForm.checkValidity()){
        return
    }
    let bodyData = {
      "type": document.getElementById("issue-type").value, 
      "detail": document.getElementById("issue-detail").value
    }
    let url = useRuntimeConfig().public.apiBase
    if(props.topicChat.topic_chat_issues.length===0){
      url += "/chat/" + props.topicChat.id + "/issue/create"
    }else{
      url += "/chat/" + props.topicChat.id + "/issue/update"
      bodyData['id'] = props.topicChat.topic_chat_issues[0].id
    }
    
    await useFetch(url, {
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
            props.topicChat.topic_chat_issues[0] = response._data
            isOpen.value = false
          }else{
            if(response.status === 401){
                useUser.removeUser()
                router.push('/login')
            }else {
                toast.add({
                    title: 'Server internal error.',
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
