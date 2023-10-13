<template>
  <NuxtLink to="/topic" class=" fixed z-30
    top-3
    left-6
    bg-white
    rounded-full
    w-8
    h-8
    grid
    place-items-center
    shadow-element
    transition-transform
    ease-in-out
    active:scale-90
    focus:ring
    outline-none
  "><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>
  </NuxtLink>
  <button type="button" class=" peer fixed z-30
      top-3
      right-6
      rounded-full
      !p-0
      transition-transform
      ease-in-out
      active:scale-90
      focus:ring
      py-1
      px-2
      max-w-full
      whitespace-nowrap
      text-ellipsis
      overflow-hidden
      outline-none
      focus:backdrop-blur-xl
      hover:backdrop-blur-xl
      hover:bg-white/50 
      " id="menu-button" aria-expanded="true" aria-haspopup="true">
      <div class="font-bold rounded-full flex items-center justify-center text-white h-8 w-8 text-[14px] bg-gigas-900">{{ user.name?user.name.substring(0,1):user.username.substring(0,1) }}</div>
  </button>
  <div class="fixed p-1 hidden hover:block peer-focus:block top-10 right-6 z-30 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-element ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="opacity-40 py-1.5 px-2 text-sm truncate" :title="user.username">{{ user.username }}</div>
    <div class="py-1" role="none">
      <a href="#" @click="openProfile = true" class="text-gray-700 block px-4 py-1.5 text-sm hover:bg-uivory-100 rounded" role="menuitem" tabindex="-1" id="menu-item-0">账户设置</a>
      <a href="#" class="text-gray-700 block px-4 py-1.5 text-sm hover:bg-uivory-100 rounded" role="menuitem" tabindex="-1" id="menu-item-1">帮助支持</a>
    </div>
    <div class="py-1" role="none">
      <a href="#" @click="logout()" class="text-gray-700 block px-4 py-1.5 text-sm hover:bg-uivory-100 rounded" role="menuitem" tabindex="-1" id="menu-item-6">退出登录</a>
    </div>
  </div>
  


  <!-- 用户设置Dialog -->
  <Profile v-model:open="openProfile"/>
  <!-- 用户反馈意见或问题 -->
  <Issue v-model:open="openIssue" :chatId="chatId" :issueId="issueId" :issueType="issueType" :issueDetail="issueDetail"/>
  <!-- 修改会话主题 -->
  <ModifyTopic v-bind:topicId="topicId" v-bind:title="title" v-bind:turn="turn" v-model:open="openModifyTopic"/>
  <!-- 删除会话主题 -->
  <DeleteTopic v-model:open="openDeleteTopic" v-bind:topicId="topicId"/>




  <div class="h-screen flex flex-col ">
    
    <!-- 顶部话题选择框 -->
    <header class="fixed top-0 z-10 bg-gradient left-0 right-0 p-2 flex justify-center">
    
      <div class="relative"><div class="sc-dPOtYP fYpiuE 
        absolute
        top-1/2
        -translate-y-full
        rounded-full
        -inset-x-16
        h-[200%]
        -z-10
        pointer-events-none
      "></div>
      <button data-testid="chat-menu-trigger" type="button" id="radix-:r6s:" aria-haspopup="menu" aria-expanded="true" data-state="open" class="
        flex peer
        items-center
        gap-1
        pointer-events-auto
      sc-idyqAC AlIw 
        rounded
        py-1
        px-2
        max-w-full
        whitespace-nowrap
        text-ellipsis
        overflow-hidden
        outline-none
        focus:ring
        focus:backdrop-blur-xl
        hover:backdrop-blur-xl
        hover:bg-white/50
        " aria-controls="radix-:r6t:">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2 -2 32 32"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M25 5H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h11l6 4v-4h1a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z"/><path d="M10 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/></g></svg>
         {{ title.length==0?"未命名":title }}
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
      </button>
      <div class=" fixed hidden hover:block peer-focus:block z-50 translate-y-1 -translate-x-1">
        <div data-side="bottom" data-align="center" role="menu" aria-orientation="vertical" data-state="open" data-radix-menu-content="" dir="ltr" id="radix-:r6t:" aria-labelledby="radix-:r6s:" tabindex="-1" data-orientation="vertical" class="
          z-50
          bg-white/70
          backdrop-blur-xl
          rounded-lg
          min-w-[8rem]
          overflow-hidden
          p-1
          shadow-element" 
          style="outline: none; --radix-dropdown-menu-content-transform-origin: var(--radix-popper-transform-origin); --radix-dropdown-menu-content-available-width: var(--radix-popper-available-width); --radix-dropdown-menu-content-available-height: var(--radix-popper-available-height); --radix-dropdown-menu-trigger-width: var(--radix-popper-anchor-width); --radix-dropdown-menu-trigger-height: var(--radix-popper-anchor-height); pointer-events: auto;">
            <div role="menuitem" class="py-1
              px-2
              rounded
              cursor-pointer
              whitespace-nowrap
              overflow-hidden
              text-ellipsis
              grid
              grid-cols-[minmax(0,_1fr)_auto]
              gap-2
              items-center
              outline-none
              select-none 
              hover:bg-uivory-100
              " tabindex="-1" @click="openModifyTopic = true" >修改会话</div>
            <div role="menuitem" class="py-1
              px-2
              rounded
              cursor-pointer
              whitespace-nowrap
              overflow-hidden
              text-ellipsis
              grid
              grid-cols-[minmax(0,_1fr)_auto]
              gap-2
              items-center
              outline-none
              select-none
              hover:bg-uivory-100
              " tabindex="-1" @click="openDeleteTopic = true">删除会话</div>
        </div>
      </div>



      </div>
    
    </header>
    
    <div class="flex relative mx-auto h-screen">
      <div id="main" class="w-screen inset-0 overflow-y-auto h-screen" @scroll="getChatHistory">
        <!-- 聊天记录数据加载 -->
        <div id="chats-loading" class="max-w-3xl mx-auto px-3 pt-16 text-center text-uivory-800 text-sm peer hidden">正在加载中...</div>
        <!-- 中间聊天内容容器 -->
        <div id="messageContainer" :key="topicId" style="grid-template-columns: 2rem minmax(0px, 1fr) 2rem" class="peer group max-w-3xl mx-auto px-3 peer-[.hidden]:pt-16 pb-4 grid gap-x-2 gap-y-3">
    
        </div>
        <!-- 初始化背景占位图像布局 -->
        <figure class="max-w-sm grid grid-cols-1 mx-auto text-center h-full place-content-center gap-2 inset-0 absolute invisible peer-empty:visible" aria-hidden="true" data-testid="empty-chat-screen">
          <span class="font-styrene-display font-medium text-6xl tracking-tighter mb-2">Assistai</span>
          <span class="font-styrene font-medium tex-sm">by</span><img alt="Anthropic" loading="lazy" width="108" height="12" decoding="async" data-nimg="1" class="w-full max-h-3.5" src="/ant_logo_full.svg" style="color: transparent;">
        </figure>

        <!-- 底部占位布局 -->
        <div class="" style="height: 80px;"></div>
        
        <!-- 底部消息输入框 -->
        <div class="fixed max-w-3xl bottom-0 left-0 right-0 bg-white gap-x-2 p-2 border-t border-gray-200 flex justify-between items-center mx-auto mb-4 rounded-2xl message-content">
    
          <div class="relative flex-1">
            <input id="messageText" class="w-full p-2 block outline-none text-gray-950 focus:outline-none focus:border-white focus:border-0 autofill:bg-yellow-400" placeholder="请输入消息..." @keypress="keyMessage">
          </div>
          <div class="flex items-center space-x-2">
            <label class="
              relative
              grid
              place-content-center
              aspect-square
              rounded-lg 
              h-8 
              w-8
              cursor-pointer
              bg-uivory-100 hover:bg-uivory-200
              focus-within:ring
              ">
              <input id="upload" title="功能开发中，暂不可用" class="opacity-0 absolute inset-0 rounded-xl -z-10 overflow-hidden text-gray-950" accept=".pdf,.doc,.docx,.rtf,.epub,.odt,.odp,.pptx,.txt,.py,.ipynb,.js,.jsx,.html,.css,.java,.cs,.php,.c,.cpp,.cxx,.h,.hpp,.rs,.R,.Rmd,.swift,.go,.rb,.kt,.kts,.ts,.tsx,.m,.scala,.rs,.dart,.lua,.pl,.pm,.t,.sh,.bash,.zsh,.csv,.log,.ini,.config,.json,.yaml,.yml,.toml,.lua,.sql,.bat,.md,.coffee" multiple="" type="file"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="text-gray-950" fill="currentColor" viewBox="0 0 256 256"><path d="M208.25,123.76a6,6,0,0,1,0,8.49l-82.06,82a54,54,0,0,1-76.36-76.39L149.1,37.14a38,38,0,1,1,53.77,53.72L103.59,191.54a22,22,0,1,1-31.15-31.09l83.28-84.67a6,6,0,0,1,8.56,8.42L81,168.91a10,10,0,1,0,14.11,14.18L194.35,82.4a26,26,0,1,0-36.74-36.8L58.33,146.28a42,42,0,1,0,59.37,59.44l82.06-82A6,6,0,0,1,208.25,123.76Z"></path></svg></label>
    
            <button id="send" @click="sendMessage" class="bg-gigas-800 hover:bg-gigas-900 disabled:bg-gigas-400 inline-flex items-center justify-center gap-1 py-2 text-white rounded-lg h-8 w-8">
              <svg class="h-4 w-4" viewBox="0 0 24 24"  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="22" y1="2" x2="11" y2="13"></line>  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
    
<script setup>
    import { useUserStore } from "~/stores/user"
    import { fetchEventSource, EventStreamContentType } from '@microsoft/fetch-event-source'
    import { provide } from 'vue'

    definePageMeta({
        middleware: ['auth']
    })
    const router = useRouter()
    const toast = useToast()
    const useUser = useUserStore()
    const user = useUser.user
    
    const openProfile = ref(false)

    const openIssue = ref(false)
    const chatId = ref(0)
    const issueId = ref(null)
    const issueType = ref(null)
    const issueDetail = ref(null)

    const openModifyTopic = ref(false)
    const topicId = useRoute().params.topic_id
    const title = ref("")
    const turn = ref(1)
    const openDeleteTopic = ref(false)

    function updateTopic(tt, tu){
      title.value = tt
      turn.value = tu
    }
    provide("updateTopic", updateTopic)

    function selectedIssueIcon(chatId, id, type, detail){
      let issueButton = document.querySelector("button[data-chat-id='" + chatId + "']")
      if(issueButton){
        issueButton.setAttribute("data-id", id)
        issueButton.setAttribute("data-type", type)
        issueButton.setAttribute("data-detail", detail)
        issueButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z"></path></svg>' 
      }
    }
    provide('selectedIssueIcon', selectedIssueIcon)
    function updateUserHeader(){
      document.getElementsByName("user-head").forEach(element => {
        element.innerHTML = user.name?user.name.substring(0,1):user.username.substring(0,1)
      })
    }
    provide("updateUserHeader", updateUserHeader)

    const next_chat_id = ref(undefined)
    const is_loaded_finish = ref(false)

    await useFetch(useRuntimeConfig().public.apiBase + "/topic/" + topicId, {
        headers: {"Authorization":"Bearer " + user.access_token},
        retry: false,
        async onResponse({ request, response, options }) {
            if(response.ok === true){
              title.value = response._data.title
              turn.value = response._data.turn?response._data.turn:1
            }else{
                if(response.status === 401){
                    useUser.removeUser()
                    router.push("/login")
                }else {
                    toast.add({
                        title: response._data.detail,
                        icon: 'i-heroicons-exclamation-triangle',
                        color: 'red'
                    })
                }
            }
        }
    })

    onMounted(async () => {
      await pageChatList()
      // 页面滚动条自动滚动到内容最底部
      let main = document.getElementById('main')
      main.scrollTop = main.scrollHeight       
    })

    async function getChatHistory(event){
      if(is_loaded_finish.value || event.target.scrollTop !== 0){
        return
      }
      await pageChatList()
    }

    async function pageChatList(){
      let param = {limit: 20}
      if(next_chat_id.value){
        param.next_chat_id = next_chat_id.value
      }
      await useFetch(useRuntimeConfig().public.apiBase + "/topic/" + topicId + "/chat", {
        headers: {"Authorization":"Bearer " + user.access_token},
        retry: false,
        params: param,
        onRequest({ request }){
          document.getElementById('chats-loading').classList.remove("hidden")
        },
        async onResponse({ request, response, options }) {
          document.getElementById('chats-loading').classList.add("hidden")
          if(response.ok === true){
            let chats = response._data
            if(chats.length==0){
              is_loaded_finish.value = true
            }else{
              next_chat_id.value = chats[chats.length-1].id
              createChatList(chats)
            }
          }else{
            if(response.status === 401){
                useUser.removeUser()
                router.push("/login")
            }else {
                toast.add({
                    title: '数据加载错误！',
                    icon: 'i-heroicons-exclamation-triangle',
                    color: 'red'
                })
            }
          }
        }
      })
    }

    function createChatList(chats){
      for(let i = 0; i < chats.length; i++){
        let chat = chats[i]
        if(chat.role=='user'){
          createUserMessageReverse(chat)
        }else if(chat.role=='assistant'){
          createAssistantMessageReverse(chat)
        }
      }
    }

    function logout(){
      useUser.removeUser()
      router.push("/login")
    }

    let hiddenValue = ''
    let is_sending = false
    
    function createUserMessage(message){
      let messageContainer = document.getElementById('messageContainer')
      // 添加用户消息
      let div = document.createElement('div')
      div.setAttribute("name",'chat')
      div.setAttribute("role", "user")
      div.setAttribute("data-id", message.id)
      div.className = 'col-start-2 grid gap-2'
      let div1 = document.createElement('div')
      div.appendChild(div1)
      div1.className = 'bg-uivory-200 shadow-inner message-content rounded-xl px-3 py-2 break-words text-stone-900 transition-all grid gap-3 grid-cols-1 max-w-69ch place-self-end';
      let div2 = document.createElement('div')
      div1.appendChild(div2)
      div2.className = 'contents';
      let p = document.createElement('p')
      div2.appendChild(p)
      p.className = 'whitespace-pre-wrap'
      p.innerHTML = message.content
      let div3 = document.createElement('div')
      div2.appendChild(div3)
      div3.className = 'hidden text'
      div3.setAttribute("name", "content-value")
      div3.innerHTML = message.content
      messageContainer.appendChild(div)
    
      // 添加用户头像
      div = document.createElement('div')
      div.className = 'flex items-end col-start-3 pb-1'
      div1 = document.createElement('div')
      div.appendChild(div1)
      div1.className = 'bg-gigas-800 font-bold rounded-full flex items-center justify-center h-8 w-8 text-white'
      div1.setAttribute("name",'user-head')
      div1.innerHTML = user.name?user.name.substring(0,1):user.username.substring(0,1)
      messageContainer.appendChild(div) 
      // 页面滚动条自动滚动到内容最底部
      let main = document.getElementById('main')
      main.scrollTop = main.scrollHeight      
    }

    function createUserMessageReverse(message){
      let messageContainer = document.getElementById('messageContainer')
      // 添加用户头像
      let div = document.createElement('div')
      div.className = 'flex items-end col-start-3 pb-1'
      let div1 = document.createElement('div')
      div.appendChild(div1)
      div1.className = 'bg-gigas-800 font-bold rounded-full flex items-center justify-center h-8 w-8 text-white'
      div1.setAttribute("name",'user-head')
      div1.innerHTML = user.name?user.name.substring(0,1):user.username.substring(0,1)
      messageContainer.insertBefore(div, messageContainer.firstChild) 
      // 添加用户消息
      div = document.createElement('div')
      div.setAttribute("name",'chat')
      div.setAttribute("role", "user")
      div.setAttribute("data-id", message.id)
      div.className = 'col-start-2 grid gap-2'
      div1 = document.createElement('div')
      div.appendChild(div1)
      div1.className = 'bg-uivory-200 shadow-inner message-content rounded-xl px-3 py-2 break-words text-stone-900 transition-all grid gap-3 grid-cols-1 max-w-69ch place-self-end';
      let div2 = document.createElement('div')
      div1.appendChild(div2)
      div2.className = 'contents';
      let p = document.createElement('p')
      div2.appendChild(p)
      p.className = 'whitespace-pre-wrap'
      p.innerHTML = message.content
      let div3 = document.createElement('div')
      div2.appendChild(div3)
      div3.className = 'hidden text'
      div3.setAttribute("name", "content-value")
      div3.innerHTML = message.content
      messageContainer.insertBefore(div, messageContainer.firstChild)  
    }
    
    function startEventHandle(id){
      let messageContainer = document.getElementById('messageContainer')
      // 助手头像
      let div = document.createElement('div')
      div.className = 'flex items-end col-start-1'
      let div1 = document.createElement('div')
      div.appendChild(div1)
      div1.className = 'w-full aspect-square rounded-full bg-white grid place-items-center overflow-hidden'
      div1.innerHTML = '<svg viewBox="0 0 24 16" overflow="visible" width="20"><g style="transform: translateX(13px) rotateZ(0deg); transform-origin: 4.775px 7.73501px;" transform-origin="4.7750020027160645px 7.735011100769043px"><path shape-rendering="geometricPrecision" fill="rgb(24,24,24)" fill-opacity="1" d=" M0,0 C0,0 6.1677093505859375,15.470022201538086 6.1677093505859375,15.470022201538086 C6.1677093505859375,15.470022201538086 9.550004005432129,15.470022201538086 9.550004005432129,15.470022201538086 C9.550004005432129,15.470022201538086 3.382294178009033,0 3.382294178009033,0 C3.382294178009033,0 0,0 0,0 C0,0 0,0 0,0z"></path></g><g style="transform: none; transform-origin: 7.935px 7.73501px;" opacity="1" transform-origin="7.93500280380249px 7.735011100769043px"><path shape-rendering="geometricPrecision" fill="rgb(24,24,24)" fill-opacity="1" d=" M5.824605464935303,9.348296165466309 C5.824605464935303,9.348296165466309 7.93500280380249,3.911694288253784 7.93500280380249,3.911694288253784 C7.93500280380249,3.911694288253784 10.045400619506836,9.348296165466309 10.045400619506836,9.348296165466309 C10.045400619506836,9.348296165466309 5.824605464935303,9.348296165466309 5.824605464935303,9.348296165466309 C5.824605464935303,9.348296165466309 5.824605464935303,9.348296165466309 5.824605464935303,9.348296165466309z M6.166755199432373,0 C6.166755199432373,0 0,15.470022201538086 0,15.470022201538086 C0,15.470022201538086 3.4480772018432617,15.470022201538086 3.4480772018432617,15.470022201538086 C3.4480772018432617,15.470022201538086 4.709278583526611,12.22130012512207 4.709278583526611,12.22130012512207 C4.709278583526611,12.22130012512207 11.16093635559082,12.22130012512207 11.16093635559082,12.22130012512207 C11.16093635559082,12.22130012512207 12.421928405761719,15.470022201538086 12.421928405761719,15.470022201538086 C12.421928405761719,15.470022201538086 15.87000560760498,15.470022201538086 15.87000560760498,15.470022201538086 C15.87000560760498,15.470022201538086 9.703250885009766,0 9.703250885009766,0 C9.703250885009766,0 6.166755199432373,0 6.166755199432373,0 C6.166755199432373,0 6.166755199432373,0 6.166755199432373,0z"></path></g></svg>'
      messageContainer.appendChild(div)
      
      // 助手回复消息
      div = document.createElement('div')
      div.setAttribute("name", "chat")
      div.setAttribute("role","assistant")
      div.setAttribute("data-id", id)
      div.className = 'group group-last:is-last col-start-2 grid gap-2'
      div1 = document.createElement('div')
      div.appendChild(div1)
      div1.className = 'message-content rounded-xl px-3 py-2 break-words text-stone-900 transition-all grid gap-3 grid-cols-1 max-w-69ch bg-white place-self-start'
      let div2 = document.createElement('div')
      div1.appendChild(div2)
      div2.className = 'contents'
      let div3 = document.createElement('div')
      div1.appendChild(div3)
      div3.setAttribute("name", "content-value")
      div3.className = 'hidden text'
      messageContainer.appendChild(div)
      hiddenValue = ''
    }

    function createAssistantMessageReverse(message){
      let messageContainer = document.getElementById('messageContainer')
      // 助手头像
      let headElement = document.createElement('div')
      headElement.className = 'flex items-end col-start-1'
      let div1 = document.createElement('div')
      headElement.appendChild(div1)
      div1.className = 'w-full aspect-square rounded-full bg-white grid place-items-center overflow-hidden'
      div1.innerHTML = '<svg viewBox="0 0 24 16" overflow="visible" width="20"><g style="transform: translateX(13px) rotateZ(0deg); transform-origin: 4.775px 7.73501px;" transform-origin="4.7750020027160645px 7.735011100769043px"><path shape-rendering="geometricPrecision" fill="rgb(24,24,24)" fill-opacity="1" d=" M0,0 C0,0 6.1677093505859375,15.470022201538086 6.1677093505859375,15.470022201538086 C6.1677093505859375,15.470022201538086 9.550004005432129,15.470022201538086 9.550004005432129,15.470022201538086 C9.550004005432129,15.470022201538086 3.382294178009033,0 3.382294178009033,0 C3.382294178009033,0 0,0 0,0 C0,0 0,0 0,0z"></path></g><g style="transform: none; transform-origin: 7.935px 7.73501px;" opacity="1" transform-origin="7.93500280380249px 7.735011100769043px"><path shape-rendering="geometricPrecision" fill="rgb(24,24,24)" fill-opacity="1" d=" M5.824605464935303,9.348296165466309 C5.824605464935303,9.348296165466309 7.93500280380249,3.911694288253784 7.93500280380249,3.911694288253784 C7.93500280380249,3.911694288253784 10.045400619506836,9.348296165466309 10.045400619506836,9.348296165466309 C10.045400619506836,9.348296165466309 5.824605464935303,9.348296165466309 5.824605464935303,9.348296165466309 C5.824605464935303,9.348296165466309 5.824605464935303,9.348296165466309 5.824605464935303,9.348296165466309z M6.166755199432373,0 C6.166755199432373,0 0,15.470022201538086 0,15.470022201538086 C0,15.470022201538086 3.4480772018432617,15.470022201538086 3.4480772018432617,15.470022201538086 C3.4480772018432617,15.470022201538086 4.709278583526611,12.22130012512207 4.709278583526611,12.22130012512207 C4.709278583526611,12.22130012512207 11.16093635559082,12.22130012512207 11.16093635559082,12.22130012512207 C11.16093635559082,12.22130012512207 12.421928405761719,15.470022201538086 12.421928405761719,15.470022201538086 C12.421928405761719,15.470022201538086 15.87000560760498,15.470022201538086 15.87000560760498,15.470022201538086 C15.87000560760498,15.470022201538086 9.703250885009766,0 9.703250885009766,0 C9.703250885009766,0 6.166755199432373,0 6.166755199432373,0 C6.166755199432373,0 6.166755199432373,0 6.166755199432373,0z"></path></g></svg>'
      messageContainer.insertBefore(headElement, messageContainer.firstChild)
      // 助手回复消息
      let div = document.createElement('div')
      div.setAttribute("name", "chat")
      div.setAttribute("role","assistant")
      div.setAttribute("data-id", message.id)
      div.className = 'group group-last:is-last col-start-2 grid gap-2'
      div1 = document.createElement('div')
      div.appendChild(div1)
      div1.className = 'message-content rounded-xl px-3 py-2 break-words text-stone-900 transition-all grid gap-3 grid-cols-1 max-w-69ch bg-white place-self-start'
      let div2 = document.createElement('div')
      div1.appendChild(div2)
      div2.className = 'contents'
      let div3 = document.createElement('div')
      div1.appendChild(div3)
      div3.setAttribute("name", "content-value")
      div3.className = 'hidden text'
      messageContainer.insertBefore(div, headElement.nextSibling)
      hiddenValue = ""
      if(message.content_type && message.content_type === 'image'){
        imageEventHandleReverse(div2, message.content)
      }else{
        streamEventHandleReverse(div2, message.content)
      }
      div3.innerHTML = hiddenValue
      createBottomButtonGroupReverse(div1, message)
    }

    function streamEventHandleReverse(contents, content){
      let element = contents.lastChild
      for(let i = 0; i < content.length; i++){
        let c = content[i]
        hiddenValue += c
        if(!element){
          if(!hiddenValue.startsWith('`')){
            element = document.createElement('div')
            element.className = 'whitespace-pre-wrap'
            contents.appendChild(element);
            element.innerHTML += hiddenValue.replaceAll('\n','<br>')
          }else{
            if(hiddenValue.length<3){
              continue
            }
            if(hiddenValue=='```'){
              let pre = document.createElement('pre')
              pre.className = 'pre'
              contents.appendChild(pre)
              pre.innerHTML = '<div class="flex flex-col bg-stone-900 rounded-md"><div class="flex justify-between items-center pt-1 pl-3"><div><p class="text-11px text-stone-300"></p></div><div class="contents"><div class="flex items-center pt-1 pr-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-stone-300"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><button class="copy-code-btn text-stone-300">Copy code</button></div></div></div><div style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none;"></code></div></div>' 
              pre.getElementsByClassName('copy-code-btn')[0].addEventListener('click', async (event) => {
                if(event.target.disabled===true){
                  return
                }
                event.target.disabled = true
                let code = pre.getElementsByTagName('code')[0].innerHTML
                try {
                  await navigator.clipboard.writeText(code)
                  event.target.previousElementSibling.innerHTML = '<path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>'
                } catch (err) {
                  event.target.innerHTML = 'Copy error'
                }
                setTimeout(() =>{
                  event.target.previousElementSibling.innerHTML = '<path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>' 
                  event.target.disabled = false
                }, 1000)
              })
    
              element = pre
            }else{
              element = document.createElement('div')
              element.className = 'whitespace-pre-wrap'
              contents.appendChild(element);
              element.innerHTML += hiddenValue.replaceAll('\n','<br>')
            }
          }
        }else{
          let tagName = element.tagName.toLowerCase()
          let k = hiddenValue.slice(hiddenValue.length-3)
          if(k.startsWith('\n\n')){
            if(c!='`'){
              if(tagName=='pre'){
                element.getElementsByTagName('code')[0].innerHTML += c
              }else{
                if(element.innerHTML.length>0){
                  element = document.createElement('div')
                  element.className = 'whitespace-pre-wrap'
                  contents.appendChild(element)
                }
                element.innerHTML += c
              }
            }
          }else if(k.startsWith('```')){
            if(tagName!='pre'){
              let pre = document.createElement('pre')
              pre.className = 'pre'
              contents.appendChild(pre)
              pre.innerHTML = '<div class="flex flex-col bg-stone-900 rounded-md"><div class="flex justify-between items-center pt-1 pl-3"><div><p class="text-[11px] text-stone-300"></p></div><div class="contents"><div class="flex items-center pt-1 pr-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-stone-300"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><button class="copy-code-btn flex flex-row gap-1 text-stone-300">Copy code</button></div></div></div><div style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none;"></code></div></div>' 
              pre.getElementsByClassName('copy-code-btn')[0].addEventListener('click', async (event) => {
                if(event.target.disabled===true){
                  return
                }
                event.target.disabled = true
                let code = pre.getElementsByTagName('code')[0].innerHTML
                try {
                  await navigator.clipboard.writeText(code)
                  event.target.previousElementSibling.innerHTML = '<path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>'
                } catch (err) {
                  event.target.innerHTML = 'Copy error'
                }
                setTimeout(() =>{
                  event.target.previousElementSibling.innerHTML = '<path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>' 
                  event.target.disabled = false
                }, 1000)
              })
    
              element = pre
            }else{
              element = document.createElement('div')
              element.className = 'whitespace-pre-wrap'
              contents.appendChild(element)
            }
          }else if(c!='`'){
            if(tagName=='pre'){
                let code = element.getElementsByTagName('code')[0]
                let idx = hiddenValue.lastIndexOf('```')
                let lang_idx = hiddenValue.indexOf('\n', idx)
                if(lang_idx>-1){
                  if(lang_idx<hiddenValue.length-1){
                    code.innerHTML += c
                  }else{
                    let langElement = element.getElementsByTagName('p')[0]
                    let language = hiddenValue.slice(idx+3, lang_idx).trim()
                    if(language.length>0){
                      langElement.innerHTML = language
                      code.classList.add('language-' + language)
                    }else{
                      langElement.innerHTML = " "
                    }
                  }
                }
              }else{
                if(!hiddenValue.endsWith('\n\n')){
                  if(c=='\n'){
                    if(element.innerHTML.length>0){
                      element.innerHTML += '<br>'
                    }
                  }else{
                    element.innerHTML += c
                  }
                }
              }
          } 
        }
      }    
    }

    function imageEventHandleReverse(contents, content){
      let element = contents.lastChild
      if(!element){
        element = document.createElement('div')
        element.className = 'whitespace-pre-wrap'
        contents.appendChild(element);
      }
      let si = content.indexOf(", prompt=")
      let url = content.substring(4,si)
      let prompt = content.substring(si+9)
      let img = document.createElement("img")
      img.src = url
      img.className = "w-64 h-64 bg-gray-200"
      img.setAttribute("alt", prompt)
      element.appendChild(img)
      hiddenValue += prompt
    }

    function createBottomButtonGroupReverse(container, message){
      let div = document.createElement('div')
      div.className = 'flex gap-0.5 -mx-1 -mt-2 text-stone-500 justify-between items-stretch'
      container.appendChild(div)
      let div1 = document.createElement('div')
      div1.className = 'flex gap-0.5'
      div.appendChild(div1)
      let div2 = document.createElement('div')
      div2.className = 'contents'
      div1.appendChild(div2)
      // 复制
      let copyButton = document.createElement('button')
      copyButton.className = 'copy flex flex-row gap-1 items-center hover:bg-stone-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs'
      copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>复制' 
      copyButton.addEventListener('click', async (event) => {
        if(event.target.disabled===true){
          return
        }
        event.target.disabled = true
        let text = document.querySelector("div[data-id='" + message.id + "']").getElementsByClassName('hidden')[0].innerHTML
        try {
          await navigator.clipboard.writeText(text)
          event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>复制'
        } catch (err) {
          event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9-3v4m0 3v.01"/></svg>复制失败'
        }
        setTimeout(() =>{
          event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>复制' 
          event.target.disabled = false
        }, 1000)
      })
      div2.appendChild(copyButton)
      
      // 重试
      let retryButton = document.createElement('button')
      retryButton.className = 'retry flex flex-row gap-1 items-center hover:bg-stone-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs hidden group-last:flex'
      retryButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"></path></svg>重试' 
      div1.appendChild(retryButton)
      retryButton.addEventListener('click', async (event) => {
        if(is_sending){
          return
        }
        let ame = document.querySelector("div[data-id='" + message.id + "']")
        let aheade = ame.previousElementSibling
        ame.remove()
        aheade.remove()
        // 禁用发送按钮
        let sendBtn = document.getElementById('send')
        sendBtn.disabled = true
        // 删除这一条记录
        await useFetch(useRuntimeConfig().public.apiBase + "/topic/" + topicId + "/remove_chat", {
          method: 'get',
          headers: {"Authorization":"Bearer " + user.access_token},
          retry: false,
          params: {id: message.id},
          onResponse({ response }){
            if(response.ok){
              eventSourceRequest()
            }else if(response.status === 401){
              useUser.removeUser()
              router.push("/login")
            }else{
              toast.add({
                  title: '重试失败，服务器内部错误！',
                  icon: 'i-heroicons-exclamation-triangle',
                  color: 'red'
              })
            }
          }
        })
      })
    
      // 发送问题
      let div11 = document.createElement('div')
      div11.className = 'flex gap-0.5'
      div.appendChild(div11)
      let issueButton = document.createElement('button')
      issueButton.title = '报告问题'
      issueButton.setAttribute("name", "chat-issue")
      issueButton.className = 'issue flex flex-row gap-1 items-center hover:bg-stone-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs'
      issueButton.setAttribute("data-chat-id", message.id)
      if(message.topic_chat_issues && message.topic_chat_issues.length>0){
        issueButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z"></path></svg>' 
        issueButton.setAttribute("data-id", message.topic_chat_issues[0].id)
        issueButton.setAttribute("data-type", message.topic_chat_issues[0].type)
        issueButton.setAttribute("data-detail", message.topic_chat_issues[0].detail)
      }else{
        issueButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path></svg>' 
        issueButton.setAttribute("data-id", null)
        issueButton.setAttribute("data-type", null)
        issueButton.setAttribute("data-detail", "")
      }
      issueButton.addEventListener('click', async (event) => {
        chatId.value = Number(event.currentTarget.dataset.chatId)
        issueId.value = Number(event.currentTarget.dataset.id)
        issueType.value = event.currentTarget.dataset.type
        issueDetail.value = event.currentTarget.dataset.detail
        openIssue.value = true
      })
      div11.appendChild(issueButton)
    }
    
    // 文本类型响应事件处理函数
    function streamEventHandle(content){
      let messageContainer = document.getElementById('messageContainer')
      let contents = messageContainer.lastChild.getElementsByClassName('contents')[0]
      let element = contents.lastChild
      for(let i = 0; i < content.length; i++){
        let c = content[i]
        hiddenValue += c
        if(!element){
          if(!hiddenValue.startsWith('`')){
            element = document.createElement('div')
            element.className = 'whitespace-pre-wrap'
            contents.appendChild(element);
            element.innerHTML += hiddenValue.replaceAll('\n','<br>')
          }else{
            if(hiddenValue.length<3){
              continue
            }
            if(hiddenValue=='```'){
              let pre = document.createElement('pre')
              pre.className = 'pre'
              contents.appendChild(pre)
              pre.innerHTML = '<div class="flex flex-col bg-stone-900 rounded-md"><div class="flex justify-between items-center pt-1 pl-3"><div><p class="text-11px text-stone-300"></p></div><div class="contents"><div class="flex items-center pt-1 pr-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-stone-300"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><button class="copy-code-btn text-stone-300">Copy code</button></div></div></div><div style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none;"></code></div></div>' 
              pre.getElementsByClassName('copy-code-btn')[0].addEventListener('click', async (event) => {
                if(event.target.disabled===true){
                  return
                }
                event.target.disabled = true
                let code = pre.getElementsByTagName('code')[0].innerHTML
                try {
                  await navigator.clipboard.writeText(code)
                  event.target.previousElementSibling.innerHTML = '<path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>'
                } catch (err) {
                  event.target.innerHTML = 'Copy error'
                }
                setTimeout(() =>{
                  event.target.previousElementSibling.innerHTML = '<path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>' 
                  event.target.disabled = false
                }, 1000)
              })
    
              element = pre
            }else{
              element = document.createElement('div')
              element.className = 'whitespace-pre-wrap'
              contents.appendChild(element);
              element.innerHTML += hiddenValue.replaceAll('\n','<br>')
            }
          }
        }else{
          let tagName = element.tagName.toLowerCase()
          let k = hiddenValue.slice(hiddenValue.length-3)
          if(k.startsWith('\n\n')){
            if(c!='`'){
              if(tagName=='pre'){
                element.getElementsByTagName('code')[0].innerHTML += c
              }else{
                if(element.innerHTML.length>0){
                  element = document.createElement('div')
                  element.className = 'whitespace-pre-wrap'
                  contents.appendChild(element)
                }
                element.innerHTML += c
              }
            }
          }else if(k.startsWith('```')){
            if(tagName!='pre'){
              let pre = document.createElement('pre')
              pre.className = 'pre'
              contents.appendChild(pre)
              pre.innerHTML = '<div class="flex flex-col bg-stone-900 rounded-md"><div class="flex justify-between items-center pt-1 pl-3"><div><p class="text-[11px] text-stone-300"></p></div><div class="contents"><div class="flex items-center pt-1 pr-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-stone-300"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><button class="copy-code-btn flex flex-row gap-1 text-stone-300">Copy code</button></div></div></div><div style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none;"></code></div></div>' 
              pre.getElementsByClassName('copy-code-btn')[0].addEventListener('click', async (event) => {
                if(event.target.disabled===true){
                  return
                }
                event.target.disabled = true
                let code = pre.getElementsByTagName('code')[0].innerHTML
                try {
                  await navigator.clipboard.writeText(code)
                  event.target.previousElementSibling.innerHTML = '<path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>'
                } catch (err) {
                  event.target.innerHTML = 'Copy error'
                }
                setTimeout(() =>{
                  event.target.previousElementSibling.innerHTML = '<path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>' 
                  event.target.disabled = false
                }, 1000)
              })
    
              element = pre
            }else{
              element = document.createElement('div')
              element.className = 'whitespace-pre-wrap'
              contents.appendChild(element)
            }
          }else if(c!='`'){
            if(tagName=='pre'){
                let code = element.getElementsByTagName('code')[0]
                let idx = hiddenValue.lastIndexOf('```')
                let lang_idx = hiddenValue.indexOf('\n', idx)
                if(lang_idx>-1){
                  if(lang_idx<hiddenValue.length-1){
                    code.innerHTML += c
                  }else{
                    let langElement = element.getElementsByTagName('p')[0]
                    let language = hiddenValue.slice(idx+3, lang_idx).trim()
                    if(language.length>0){
                      langElement.innerHTML = language
                      code.classList.add('language-' + language)
                    }else{
                      langElement.innerHTML = " "
                    }
                  }
                }
              }else{
                if(!hiddenValue.endsWith('\n\n')){
                  if(c=='\n'){
                    if(element.innerHTML.length>0){
                      element.innerHTML += '<br>'
                    }
                  }else{
                    element.innerHTML += c
                  }
                }
              }
          } 
        }
      }
      // 页面滚动条自动滚动到内容最底部
      let main = document.getElementById('main')
      main.scrollTop = main.scrollHeight       
    }
    // 图片类型响应事件处理函数
    function imageEventHandle(content){
      let messageContainer = document.getElementById('messageContainer')
      let contents = messageContainer.lastChild.getElementsByClassName('contents')[0]
      let element = contents.lastChild
      if(!element){
        element = document.createElement('div')
        element.className = 'whitespace-pre-wrap'
        contents.appendChild(element);
      }
      let si = content.indexOf(", prompt=")
      let url = content.substring(4,si)
      let prompt = content.substring(si+9)
      let img = document.createElement("img")
      img.src = url
      img.className = "w-64 h-64 bg-gray-200"
      img.setAttribute("alt", prompt)
      element.appendChild(img)
      hiddenValue += prompt
      // 页面滚动条自动滚动到内容最底部
      let main = document.getElementById('main')
      main.scrollTop = main.scrollHeight       
    }

    
    function endEventHandle(message){
      let messageContainer = document.getElementById('messageContainer')
      // 创建底部按钮组
      createBottomButtonGroup(messageContainer, message)
      // 页面滚动条自动滚动到内容最底部
      let main = document.getElementById('main')
      main.scrollTop = main.scrollHeight  
      // 赋值隐藏元素
      messageContainer.lastChild.getElementsByClassName('hidden')[0].innerHTML = hiddenValue;
      messageContainer.lastChild.setAttribute("data-id", message.id)
      // 激活消息发送按钮
      let button = document.getElementById('send');
      button.disabled = false;
    }
    
    function errorEventHandle(message){
      let messageContainer = document.getElementById('messageContainer')
      let contents = messageContainer.lastChild.lastChild;
      contents.innerHTML += '<p class="whitespace-pre-wrap text-red-800 font-medium ">' + message.content + '</p>';
      // 创建底部按钮组
      createBottomButtonGroup(messageContainer, message)
      // 页面滚动条自动滚动到内容最底部
      let main = document.getElementById('main')
      main.scrollTop = main.scrollHeight  
      // 激活消息发送按钮
      let button = document.getElementById('send');
      button.disabled = false;
    }
    
    function createBottomButtonGroup(messageContainer, message){
      let div = document.createElement('div')
      div.className = 'flex gap-0.5 -mx-1 -mt-2 text-stone-500 justify-between items-stretch'
      messageContainer.lastChild.lastChild.appendChild(div)
      let div1 = document.createElement('div')
      div1.className = 'flex gap-0.5'
      div.appendChild(div1)
      let div2 = document.createElement('div')
      div2.className = 'contents'
      div1.appendChild(div2)
      // 复制
      let copyButton = document.createElement('button')
      copyButton.className = 'copy flex flex-row gap-1 items-center hover:bg-stone-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs'
      copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>复制' 
      copyButton.addEventListener('click', async (event) => {
        if(event.target.disabled===true){
          return
        }
        event.target.disabled = true
        let text = document.querySelector("div[data-id='" + message.id + "']").getElementsByClassName('hidden')[0].innerHTML
        try {
          await navigator.clipboard.writeText(text)
          event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>复制'
        } catch (err) {
          event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9-3v4m0 3v.01"/></svg>复制失败'
        }
        setTimeout(() =>{
          event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>复制' 
          event.target.disabled = false
        }, 1000)
      })
      div2.appendChild(copyButton)
      
      // 重试
      let retryButton = document.createElement('button')
      retryButton.className = 'retry flex flex-row gap-1 items-center hover:bg-stone-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs hidden group-last:flex'
      retryButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"></path></svg>重试' 
      div1.appendChild(retryButton)
      retryButton.addEventListener('click', async (event) => {
        if(is_sending){
          return
        }
        let ame = document.querySelector("div[data-id='" + message.id + "']")
        let aheade = ame.previousElementSibling
        ame.remove()
        aheade.remove()
        // 禁用发送按钮
        let sendBtn = document.getElementById('send')
        sendBtn.disabled = true
        // 删除这一条记录
        await useFetch(useRuntimeConfig().public.apiBase + "/topic/" + topicId + "/remove_chat", {
          method: 'get',
          headers: {"Authorization":"Bearer " + user.access_token},
          retry: false,
          params: {id: message.id},
          onResponse({ response }){
            if(response.ok){
              eventSourceRequest()
            }else if(response.status === 401){
              useUser.removeUser()
              router.push("/login")
            }else{
              toast.add({
                  title: '重试失败，服务器内部错误！',
                  icon: 'i-heroicons-exclamation-triangle',
                  color: 'red'
              })
            }
          }
        })
      })
    
      // 发送问题
      let div11 = document.createElement('div')
      div11.className = 'flex gap-0.5'
      div.appendChild(div11)
      let issueButton = document.createElement('button')
      issueButton.title = '报告问题'
      issueButton.setAttribute("name", "chat-issue")
      issueButton.className = 'issue flex flex-row gap-1 items-center hover:bg-stone-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs'
      issueButton.setAttribute("data-chat-id", message.id)
      if(message.topic_chat_issues && message.topic_chat_issues.length>0){
        issueButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z"></path></svg>' 
        issueButton.setAttribute("data-id", message.topic_chat_issues[0].id)
        issueButton.setAttribute("data-type", message.topic_chat_issues[0].type)
        issueButton.setAttribute("data-detail", message.topic_chat_issues[0].detail)
      }else{
        issueButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path></svg>' 
        issueButton.setAttribute("data-id", null)
        issueButton.setAttribute("data-type", null)
        issueButton.setAttribute("data-detail", "")
      }
      issueButton.addEventListener('click', async (event) => {
        chatId.value = Number(event.currentTarget.dataset.chatId)
        issueId.value = Number(event.currentTarget.dataset.id)
        issueType.value = event.currentTarget.dataset.type
        issueDetail.value = event.currentTarget.dataset.detail
        openIssue.value = true
      })
      div11.appendChild(issueButton)
    }
    
    // Send message to server
    async function sendMessage(event) {
        if(is_sending){
          return
        }
        let message = document.getElementById('messageText').value
        if (/^\s*$/g.test(message)) {
            return;
        }
        is_sending = true
        document.getElementById('messageText').value = ""
        // 禁用发送按钮
        let sendBtn = document.getElementById('send')
        sendBtn.disabled =true
        await useFetch(useRuntimeConfig().public.apiBase + "/topic/" + topicId + "/add_chat", {
            method: 'post',
            headers: {"Authorization":"Bearer " + user.access_token},
            body:  {'role': 'user', 'content': message},
            onResponse({ request, response, options }) {
                let data = response._data
                if(response.ok){
                  createUserMessage(data)
                  // 发送AI回复请求
                  eventSourceRequest()
                }else if(response.status === 401){
                  useUser.removeUser()
                  router.push("/login")
                }else{
                  toast.add({
                    title: '请求失败，服务器内部错误！',
                    icon: 'i-heroicons-exclamation-triangle',
                    color: 'red'
                  })
                }
            }
        })
    }
    
    // Send message to server
    function keyMessage(event) {
        if(event.code!=='Enter'){
          return
        }
        sendMessage(event)
    }
    
    function eventSourceRequest(){
      let chats = []
      if(title.value && !/^\s*$/g.test(title.value)){
        chats.push({role: 'system', content: title.value})
      }
      Array.from(document.getElementsByName("chat")).slice(-turn.value*2-1).forEach(e => {
        chats.push({role: e.getAttribute("role"), content: e.getElementsByClassName("hidden")[0].innerHTML})
      })
      fetchEventSource(useRuntimeConfig().public.apiBase + "/topic/" + topicId + "/chat_conversation", {
        method: 'POST',
        headers: {
          "Authorization": "Bearer " + user.access_token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(chats),
        async onopen(response) {
          if (response.ok && response.headers.get('content-type') === EventStreamContentType) {
            return; // everything's good
          } else if(response.status === 401){
            useUser.removeUser()
            router.push("/login")
            return
          } else if(response.status >= 500) {
            toast.add({
              title: '请求失败，服务器内部错误！',
              icon: 'i-heroicons-exclamation-triangle',
              color: 'red'
            })
            return
          }
        },
        onmessage(msg) {
          if(msg.event==='start'){
            startEventHandle(null)
          }else if(msg.event==='stream'){
            streamEventHandle(msg.data.replaceAll('\\n','\n'))
          }else if(msg.event==='image'){
            imageEventHandle(msg.data)
          }else if(msg.event==='end'){
            endEventHandle({id: msg.data})
          }else if(msg.event==='error'){
            errorEventHandle({id: undefined, content: msg.data})
          }
        },     
        onclose() {
            console.log('closed')
            is_sending = false
        },
        onerror(err) {
            console.log(err)
        }
      })
    }
</script>
    
<style>
        .bg-gradient {
          background: linear-gradient(to bottom,rgba(239,237,230,1) 0%,rgba(239,237,230,0.65) 65%,rgba(239,237,230,0) 100%);
        }
    
        /* 附件按钮 */
        .attach-btn {
          background-color: rgb(239, 237, 230);
        }
    
        .attach-btn:hover {
          background-color: rgb(220, 212, 204);
        }
    
        .message-content {
          box-shadow: 
          rgba(0, 0, 0, 0.05) 0px 0px 0px 0.5px, 
          rgba(0, 0, 0, 0.024) 0px 0px 5px, 
          rgba(0, 0, 0, 0.05) 0px 1px 2px;
        }
    
        .max-w-69ch{
          max-width: 69ch;
        }
    
        .copy-code-btn{
          font-size: 11px;
        }
        .text-11px{
          font-size: 11px;
        }
</style>