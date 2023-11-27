<template>
    <UModal v-model="isOpen">
        <UCard :ui="{
                background: 'bg-uivory-100',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800', 
                header: {background: 'bg-white'}, 
                body: {base: 'max-h-screen overflow-y-auto overflow-x-auto whitespace-normal text-left text-md'}}">
            <template #header>
            <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {{ fileName }}
                </h3>
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
            </div>
            </template>
            <div class="text-sm justify-center ">
                <template v-if="isLoading">
                    <div class="text-uivory-500 m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg>
                    </div>
                </template>
                <template v-else>
                    <template v-if="contentType === 'html'">
                        <div v-html="content"></div>
                    </template>
                    <template v-if="contentType === 'text'">
                        <pre>{{ content }}</pre>
                    </template>
                </template>
            </div>
        </UCard>
    </UModal>
</template>

<script setup>
  import { useUserStore } from "~/stores/user"
  import { inject } from "vue"

  const router = useRouter()
  const toast = useToast()
  const useUser = useUserStore()
  const user = useUser.user
  const isLoading = ref(false)
  const contentType = ref("text")
  const content = ref("")

  const props = defineProps({
    open: Boolean,
    fileEtag: String,
    fileName: String,
    fileUrl: String,
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

watch(props, 
    async (props, prevProps) => {
        if(props.open){
            await loadDocument()
        }
    }
)

async function loadDocument(){
    isLoading.value = true
    let fileSuffix = props.fileUrl.substring(props.fileUrl.lastIndexOf('.')+1)
    if(isImageType(fileSuffix)){
        let img = document.createElement("img")
        img.src = useRuntimeConfig().public.apiBase + props.fileUrl
        img.alt = props.fileName
        contentType.value = "html"
        content.value = img.outerHTML
        isLoading.value = false
        return
    }
    if(isOfficeType(fileSuffix)){
        let iframe = document.createElement("iframe")
        iframe.src = "https://view.officeapps.live.com/op/view.aspx?src=" + useRuntimeConfig().public.apiBase + props.fileUrl
        iframe.title = props.fileName
        iframe.classList.add("w-full")
        iframe.classList.add("min-h-screen")
        iframe.classList.add("border-0")
        contentType.value = "html"
        content.value = iframe.outerHTML
        isLoading.value = false
        return
    }
    if(isOnlineType(fileSuffix)){
        let iframe = document.createElement("iframe")
        iframe.src = useRuntimeConfig().public.apiBase + props.fileUrl
        iframe.title = props.fileName
        iframe.classList.add("w-full")
        iframe.classList.add("min-h-screen")
        iframe.classList.add("border-0")
        contentType.value = "html"
        content.value = iframe.outerHTML
        isLoading.value = false
        return
    }
    await useFetch(useRuntimeConfig().public.apiBase + props.fileUrl, {
        method: 'get',
        headers: {"Authorization":"Bearer " + user.access_token},
        retry: false,
        async onResponse({ request, response, options }) {
            if(response.ok === true){
                isLoading.value = false
                content.value = response._data
                contentType.value = "text"
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

const imageTypes = ['jpg','jpeg','png','gif','webp']
function isImageType(suffix){
    if(imageTypes.includes(suffix)){
        return true
    }
    return false
}
const officeTypes = ['doc','docx','xls','xlsx','ppt','pptx','csv']
function isOfficeType(suffix){
    if(officeTypes.includes(suffix)){
        return true
    }
    return false
}
const onlineTypes = ['pdf']
function isOnlineType(suffix){
    if(onlineTypes.includes(suffix)){
        return true
    }
    return false
}
</script>
