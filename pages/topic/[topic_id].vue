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
      <a href="#" @click="openProfile = true" class="text-gray-700 block px-4 py-1.5 text-sm hover:bg-uivory-100 rounded" role="menuitem" tabindex="-1" id="menu-item-0">Account Settings</a>
      <a href="#" class="text-gray-700 block px-4 py-1.5 text-sm hover:bg-uivory-100 rounded" role="menuitem" tabindex="-1" id="menu-item-1">Help & Support</a>
    </div>
    <div class="py-1" role="none">
      <a href="#" @click="logout()" class="text-gray-700 block px-4 py-1.5 text-sm hover:bg-uivory-100 rounded" role="menuitem" tabindex="-1" id="menu-item-6">Log out</a>
    </div>
  </div>
  


  <!-- 用户设置Dialog -->
  <Profile v-model:open="openProfile"/>
  <!-- 用户反馈意见或问题 -->
  <Issue v-model:open="openIssue" :topicChat="topicChat"/>
  <!-- 修改会话主题 -->
  <ModifyTopic v-bind:topicId="topicId" v-bind:title="title" v-bind:turn="turn" v-model:open="openModifyTopic"/>
  <!-- 删除会话主题 -->
  <DeleteTopic v-model:open="openDeleteTopic" v-bind:topicId="topicId"/>
  <!-- 文件预览Dialog -->
  <FilePreview ref="filePreview" v-model:open="openFilePreview" :fileEtag="fileEtag" :fileName="fileName" :fileUrl="fileUrl"/>




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
         {{ (!title || title.length==0)?"Untitled":title }}
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
      </button>
      <div class=" fixed hidden hover:block peer-focus:block z-50 translate-y-1 -translate-x-1 transform: translate(896px, 44px); min-width: max-content;">
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
              " tabindex="-1" @click="openModifyTopic = true" >Update</div>
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
              " tabindex="-1" @click="openDeleteTopic = true">Delete</div>
        </div>
      </div>



      </div>
    
    </header>
    
    <div class="flex relative mx-auto h-screen">
      <div id="main" class="w-screen inset-0 overflow-y-auto h-screen" @scroll="getChatHistory">
        <!-- 聊天记录数据加载 -->
        <div id="chats-loading" class="max-w-3xl mx-auto px-3 pt-16 text-center text-uivory-800 text-sm peer hidden">Loading...</div>
        <!-- 中间聊天内容容器 -->
        <div id="messageContainer" :key="topicId" style="grid-template-columns: 2rem minmax(0px, 1fr) 2rem" class="peer group max-w-3xl mx-auto px-3 peer-[.hidden]:pt-16 pb-4 grid gap-x-2 gap-y-3">
          <template v-for="(item, index) in chatList">
            <template v-if="item.role === 'user'">
              <div name="chat" :role="item.role" :data-index="index" :data-id="item.id" class="col-start-2 grid gap-2">
                <template v-if="item.attachs.length>0">
                  <div class="place-self-end flex flex-wrap flex-row-reverse gap-2">
                      <div v-for="attach in item.attachs" :key="attach.file_etag" class="w-40 relative cursor-pointer rounded-md flex shadow-element text-xs bg-white" :aria-label="attach.file_name" :title="attach.file_name">
                          <button @click="previewFile(attach.file_etag, attach.file_name, attach.file_url)" aria-label="Preview contents" class="absolute inset-0 cursor-pointer hover:bg-black/5 w-40"></button>
                          <div class="flex-shrink-0 w-12 h-12 bg-gigas-800 rounded-tl-md rounded-bl-md grid place-items-center text-white font-medium uppercase truncate" aria-hidden="true">{{attach.file_format}}</div>
                          <div class="py-2 px-3 min-w-0">
                              <p class="truncate" :title="attach.file_name">{{ attach.file_name }}</p>
                              <div class="text-gray-500">{{ returnFileSize(attach.file_size) }}</div>
                          </div>
                      </div>
                  </div>
                </template>
                <div class="bg-uivory-200 shadow-inner message-content rounded-xl px-3 py-2 break-words text-stone-900 transition-all grid gap-3 grid-cols-1 max-w-69ch place-self-end">
                  <div class="contents">
                    <p class="whitespace-pre-wrap">{{ item.content }}</p>
                  </div>
                </div>
              </div>
              <div class="flex items-end col-start-3 pb-1">
                <div name="user-head" class="bg-gigas-800 font-bold rounded-full flex items-center justify-center h-8 w-8 text-white">
                  {{ user.name?user.name.substring(0,1):user.username.substring(0,1) }}
                </div>
              </div>
            </template>
            <template v-else-if="item.role === 'assistant'">
              <div class="flex items-end col-start-1">
                <div class="w-full aspect-square rounded-full bg-white grid place-items-center overflow-hidden">
                  <svg viewBox="0 0 24 16" overflow="visible" width="20"><g style="transform: translateX(13px) rotateZ(0deg); transform-origin: 4.775px 7.73501px;" transform-origin="4.7750020027160645px 7.735011100769043px"><path shape-rendering="geometricPrecision" fill="rgb(24,24,24)" fill-opacity="1" d=" M0,0 C0,0 6.1677093505859375,15.470022201538086 6.1677093505859375,15.470022201538086 C6.1677093505859375,15.470022201538086 9.550004005432129,15.470022201538086 9.550004005432129,15.470022201538086 C9.550004005432129,15.470022201538086 3.382294178009033,0 3.382294178009033,0 C3.382294178009033,0 0,0 0,0 C0,0 0,0 0,0z"></path></g><g style="transform: none; transform-origin: 7.935px 7.73501px;" opacity="1" transform-origin="7.93500280380249px 7.735011100769043px"><path shape-rendering="geometricPrecision" fill="rgb(24,24,24)" fill-opacity="1" d=" M5.824605464935303,9.348296165466309 C5.824605464935303,9.348296165466309 7.93500280380249,3.911694288253784 7.93500280380249,3.911694288253784 C7.93500280380249,3.911694288253784 10.045400619506836,9.348296165466309 10.045400619506836,9.348296165466309 C10.045400619506836,9.348296165466309 5.824605464935303,9.348296165466309 5.824605464935303,9.348296165466309 C5.824605464935303,9.348296165466309 5.824605464935303,9.348296165466309 5.824605464935303,9.348296165466309z M6.166755199432373,0 C6.166755199432373,0 0,15.470022201538086 0,15.470022201538086 C0,15.470022201538086 3.4480772018432617,15.470022201538086 3.4480772018432617,15.470022201538086 C3.4480772018432617,15.470022201538086 4.709278583526611,12.22130012512207 4.709278583526611,12.22130012512207 C4.709278583526611,12.22130012512207 11.16093635559082,12.22130012512207 11.16093635559082,12.22130012512207 C11.16093635559082,12.22130012512207 12.421928405761719,15.470022201538086 12.421928405761719,15.470022201538086 C12.421928405761719,15.470022201538086 15.87000560760498,15.470022201538086 15.87000560760498,15.470022201538086 C15.87000560760498,15.470022201538086 9.703250885009766,0 9.703250885009766,0 C9.703250885009766,0 6.166755199432373,0 6.166755199432373,0 C6.166755199432373,0 6.166755199432373,0 6.166755199432373,0z"></path></g></svg>
                </div>
              </div>
              <div name="chat" v-if="item.id" :role="item.role" :data-index="index" :data-id="item.id" class="group group-last:is-last col-start-2 grid gap-2">
                <div class="message-content rounded-xl px-3 py-2 break-words text-stone-900 transition-all grid gap-3 grid-cols-1 max-w-69ch bg-white place-self-start">
                  <div class="contents markdown-body" v-html="markdown.render(item.content)">
                  </div>
                  <div class="flex gap-0.5 -mx-1 -mt-2 text-stone-500 justify-between items-stretch">
                    <div class="flex gap-0.5">
                      <div class="contents">
                        <button @click="copyContents(item)" class="copy flex flex-row gap-1 items-center hover:bg-stone-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>Copy
                        </button>
                      </div>
                      <button @click="retryReply(item)" class="retry flex-row gap-1 items-center hover:bg-stone-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs hidden group-last:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"></path></svg>Retry
                      </button>
                    </div>
                    <div class="flex gap-0.5">
                        <button @click="reportIssue(item)" title="Report a issue" name="chat-issue" class="issue flex flex-row gap-1 items-center hover:bg-stone-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs">
                          <template v-if="item.topic_chat_issues.length > 0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z"></path></svg>
                          </template>
                          <template v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path></svg>
                          </template>
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </template>
          </template>


        </div>
        <!-- 初始化背景占位图像布局 -->
        <figure class="max-w-sm grid grid-cols-1 mx-auto text-center h-full place-content-center gap-2 inset-0 absolute invisible peer-empty:visible" aria-hidden="true" data-testid="empty-chat-screen">
          <span class="font-styrene-display font-medium text-6xl tracking-tighter mb-2">Uassistant</span>
          <span class="font-styrene font-medium tex-sm">by</span><img alt="Anthropic" loading="lazy" width="108" height="12" decoding="async" data-nimg="1" class="w-full max-h-3.5" src="/ant_logo_full.svg" style="color: transparent;">
        </figure>

        <!-- 底部占位布局 -->
        <div class="" style="height: 100px;"></div>
        
        <!-- 底部消息输入框 -->
        <div class="fixed max-w-3xl bottom-0 left-0 right-0 mx-auto px-2 md:px-1">
          <div id="userMessageTip" class="pb-1 hidden md:block text-xs font-medium delay-100 duration-500 transition-opacity text-right pr-2 opacity-0 text-stone-500">
            <strong>Shift + ⏎</strong> to add a new line, <strong> ⏎</strong> to send a message
          </div>
          <fieldset style="background-color: rgb(248, 248, 247);" class=" w-full gap-x-2 px-4 flex justify-between items-center mx-auto rounded-2xl shadow-element">
            <div class="relative flex-1">
              <div class="overflow-y-auto w-full max-h-96 break-words py-4">
                  <div id="userMessage" @keypress="keyMessage" @focus="userMessageTipFocus" @blur="userMessageTipBlur" contenteditable="true" translate="no" @input="messageInput" enterkeyhint="enter" tabindex="0" class="ProseMirror focus:outline-none">
                      <p v-bind:data-placeholder="userMessagePlaceholder" class="is-empty is-editor-empty before:!text-stone-400 before:whitespace-nowrap">
                          <br class="ProseMirror-trailingBreak">
                      </p>
                  </div>
              </div>
              <template v-if="uploadFileList.length>0">
                <div class="flex flex-wrap gap-4 pb-4">
                    <div v-for="(item, index) in uploadFileList" :key="item.file_etag" class="w-40 relative cursor-pointer rounded-md flex shadow-element text-xs bg-white" :aria-label="item.file_name" :title="item.file_name">
                        <button @click="previewFile(item.file_etag, item.file_name, item.file_url)" aria-label="Preview contents" class="absolute inset-0 cursor-pointer hover:bg-black/5 w-40"></button>
                        <div class="flex-shrink-0 w-12 h-12 bg-gigas-800 rounded-tl-md rounded-bl-md grid place-items-center text-white font-medium uppercase truncate" aria-hidden="true">{{item.file_format}}</div>
                        <div class="py-2 px-3 min-w-0">
                            <p class="truncate" :title="item.file_name">{{ item.file_name }}</p>
                            <div class="text-gray-500">{{ returnFileSize(item.file_size) }}</div>
                            <div @click="removeUploadFile(item.file_etag)" class="absolute top-0 right-0 bg-white shadow-element p-1 rounded-full cursor-pointer hover:bg-stone-100 translate-x-2 -translate-y-2 z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
              </template>
            </div>
            <div class="flex items-center space-x-2">
              <label class="
                  relative
                  grid
                  place-content-center
                  aspect-square
                  rounded-xl
                  h-8 
                  w-8
                  cursor-pointer
                  bg-uivory-100
                  hover:bg-uivory-300/60
                  focus-within:ring"
                  >
                  <input :disabled="isUploadLoading" @change="uploadFiles" class="opacity-0 absolute inset-0 rounded-xl -z-10 overflow-hidden peer/upload" :accept="acceptFileTypes.join(',')" multiple="" type="file">
                  <div class="absolute -translate-y-12 -translate-x-16 top-0 left-0 text-xs min-w-max z-20 text-white rounded-md bg-black hidden peer-hover/upload:block px-3 py-1">Add files (5 max, 10MB each)<br>Accepts jpg, png, webp, etc.</div>
                  <template v-if="isUploadLoading">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg>
                  </template>
                  <template v-else>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M208.25,123.76a6,6,0,0,1,0,8.49l-82.06,82a54,54,0,0,1-76.36-76.39L149.1,37.14a38,38,0,1,1,53.77,53.72L103.59,191.54a22,22,0,1,1-31.15-31.09l83.28-84.67a6,6,0,0,1,8.56,8.42L81,168.91a10,10,0,1,0,14.11,14.18L194.35,82.4a26,26,0,1,0-36.74-36.8L58.33,146.28a42,42,0,1,0,59.37,59.44l82.06-82A6,6,0,0,1,208.25,123.76Z"></path></svg>
                  </template>
              </label>      
              <button @click="sendUserMessage" :disabled="isSending" class="bg-gigas-800 hover:bg-gigas-900 disabled:bg-gigas-400 inline-flex items-center justify-center gap-1 py-2 text-white rounded-lg h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="h-4 w-auto"><path d="M232,127.89a16,16,0,0,1-8.18,14L55.91,237.9A16.14,16.14,0,0,1,48,240a16,16,0,0,1-15.05-21.34L60.3,138.71A4,4,0,0,1,64.09,136H136a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47H64.16a4,4,0,0,1-3.79-2.7l-27.44-80A16,16,0,0,1,55.85,18.07l168,95.89A16,16,0,0,1,232,127.89Z"></path></svg>
              </button>
            </div>
          </fieldset>
          <div class="flex justify-center items-center -mt-2 pt-3 pb-1 relative z-auto text-uivory-800" style="font-weight:400; font-size:0.625rem">
            <div class="absolute inset-0 box-content px-1 bg-bg-100/75 -z-10 backdrop-blur" style="bottom: calc(env(safe-area-inset-bottom, 0) * -1);">
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="h-2.5"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg> 
              &nbsp;
              <a class="hover:underline hover:text-stone-800 text-stone-500" href="#">Uassistant is a agent based on AI and may display incorrect or harmful information.</a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
    
<script setup>
  // import 'highlight.js/styles/github-dark-dimmed.css'
  import 'highlight.js/styles/atom-one-dark.min.css'
  import '~/assets/css/github-markdown-light.css'
  import hljs from 'highlight.js'
  import { useUserStore } from "~/stores/user"
  import { fetchEventSource, EventStreamContentType } from '@microsoft/fetch-event-source'
  import { provide } from 'vue'
  import MarkdownIt from "markdown-it"
  import MarkdownItAbbr from "markdown-it-abbr"
  import MarkdownItSub from "markdown-it-sub"
  import MarkdownItSup from "markdown-it-sup"
  import MarkdownItTasklists from "markdown-it-task-lists"
  import MarkdownItAnchor from "markdown-it-anchor"
  import MarkdownItFootnote from "markdown-it-footnote"
  import MarkdownItEmoji from "markdown-it-emoji"

  const markdown = new MarkdownIt({
    highlight: function(str, lang){ 
      if (lang && hljs.getLanguage(lang)) {
        try {
          return highlightTemplate(lang, hljs.highlight(str, { language: lang, ignoreIllegals: true }).value)
        } catch (__) {}
      }
      return highlightTemplate('', markdown.utils.escapeHtml(str))
      }
  }).use(MarkdownItAbbr).use(MarkdownItSub).use(MarkdownItSup)
  .use(MarkdownItTasklists).use(MarkdownItAnchor).use(MarkdownItFootnote).use(MarkdownItEmoji)

  definePageMeta({
      middleware: ['auth']
  })
  const router = useRouter()
  const toast = useToast()
  const useUser = useUserStore()
  const user = useUser.user
  const openProfile = ref(false)
  const openIssue = ref(false)
  const topicChat = ref(null)
  const openModifyTopic = ref(false)
  const topicId = useRoute().params.topic_id
  const title = ref("")
  const turn = ref(0)
  const openDeleteTopic = ref(false)
  const chatList = ref([])
  const isSending = ref(false)

  const openFilePreview = ref(false)
  const fileEtag = ref("")
  const fileName = ref("")
  const fileUrl = ref("")
  const isUploadLoading = ref(false)
  const uploadFileList = ref([])
  const acceptFileTypes = ref([
          '.jpg', '.jpeg', '.png', '.webp', '.gif'
          // , '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.csv', '.pdf', '.txt', '.sql', 
          // '.json', '.java', '.py', '.mq4', '.mq5', '.mqh', '.js', '.jsx', '.ts', '.tsx', '.log', '.html', '.htm', '.md', '.vue', '.rtf', 
          // '.ipynb', '.css', '.cs', '.php', '.c', '.cpp', '.swift', '.go', '.scala', '.dart', '.lua', '.sh', '.bash', '.ini', '.config', 
          // '.yaml', '.yml', '.bat'
        ])

  const userMessagePlaceholder = ref('Send Message...')



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

  const is_loaded_finish = ref(false)

  await useFetch(useRuntimeConfig().public.apiBase + "/topic/get/" + topicId, {
      headers: {"Authorization":"Bearer " + user.access_token},
      retry: false,
      async onResponse({ request, response, options }) {
          if(response.ok === true){
            title.value = response._data.title
            turn.value = response._data.turn?response._data.turn:0
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
    if(chatList.value.length==1){
      if(chatList.value[0].role==='user'){
        sendAssistantRequest(chatList.value)
      }
    }
    // 页面滚动条自动滚动到内容最底部
    let main = document.getElementById('main')
    main.scrollTop = main.scrollHeight
    window.copyCode = function(event){
      event.target.parentNode.classList.add("disabled")
      let code = event.target.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('code')[0].textContent
      try {
        navigator.clipboard.writeText(code)
      } catch (err) {
        __
      }
      setTimeout(() =>{
        event.target.parentNode.classList.remove("disabled")
      }, 1000)
    }
  })

  async function getChatHistory(event){
    if(is_loaded_finish.value || event.target.scrollTop !== 0){
      return
    }
    await pageChatList()
  }

  async function pageChatList(){
    let param = {limit: 20}
    if(chatList.value.length>0){
      param.next_chat_id = chatList.value[0].id
    }
    await useFetch(useRuntimeConfig().public.apiBase + "/topic/" + topicId + "/chats", {
      headers: {"Authorization":"Bearer " + user.access_token},
      retry: false,
      params: param,
      onRequest({ request }){
        document.getElementById('chats-loading').classList.remove("hidden")
      },
      async onResponse({ request, response, options }) {
        document.getElementById('chats-loading').classList.add("hidden")
        if(response.ok === true){
          chatList.value = response._data.concat(chatList.value)
          if(response._data.length<param.limit){
            is_loaded_finish.value = true
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
    
  // 新创建的函数
  async function copyContents(item){
    let button = event.target
    if(button.disabled===true){
      return
    }
    button.disabled = true
    let text = item.content
    navigator.clipboard.writeText(text)
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>Copy'
    await setTimeout(() =>{
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>Copy' 
      button.disabled = false
    }, 1000)
  }

  async function retryReply(item) {
    if(isSending.value){
      return
    }
    chatList.value.pop()
    isSending.value = true
    // 删除这一条记录
    await useFetch(useRuntimeConfig().public.apiBase + "/chat/" + topicId + "/remove", {
      method: 'get',
      headers: {"Authorization":"Bearer " + user.access_token},
      retry: false,
      params: {id: item.id},
      onResponse({ response }){
        if(response.ok){
          sendAssistantRequest(chatList.value.slice(-turn.value*2-1))
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
  }

  function reportIssue(item){
    topicChat.value = item
    openIssue.value = true
  }

  // Send message to server
  async function sendUserMessage() {
      if(isSending.value){
        return
      }
      let userMessageDom = document.getElementById("userMessage")
      let content = userMessageDom.textContent
      if (/^\s*$/g.test(content)) {
          return;
      }
      isSending.value = true
      let data = {
        role: 'user',
        content: content,
        attachs: uploadFileList.value
      }
      await useFetch(useRuntimeConfig().public.apiBase + "/chat/" + topicId + "/add", {
          method: 'post',
          headers: {"Authorization":"Bearer " + user.access_token},
          body: data,
          onRequest({request}){
            userMessageDom.innerHTML = '<p data-placeholder="' + userMessagePlaceholder.value + '" class="is-empty is-editor-empty before:!text-stone-400 before:whitespace-nowrap"><br class="ProseMirror-trailingBreak"></p>'
            uploadFileList.value = []
          },
          onResponse({ request, response, options }) {
              if(response.ok){
                // 发送AI回复请求
                chatList.value.push(response._data)
                sendAssistantRequest(chatList.value.slice(-turn.value*2-1))
              }else if(response.status === 401){  // 登录过期
                useUser.removeUser()
                router.push("/login")
              }else if(response.status === 403){  // 超出最大使用限制
                userRemainMessageStats(0)
                toast.add({
                  title: response._data.detail,
                  icon: 'i-heroicons-exclamation-triangle',
                  color: 'red'
                })
              } else{
                toast.add({
                  title: 'Server internal error',
                  icon: 'i-heroicons-exclamation-triangle',
                  color: 'red'
                })
                isSending.value = false
              }
          }
      })
  }
    
  // Send message to server
  async function keyMessage(event) {
    if(event.shiftKey===false && event.code==='Enter'){
      event.preventDefault()
      await sendUserMessage()
    }
  }

  function userMessageTipFocus(){
    if(document.getElementById("userMessage").getAttribute("contenteditable")==="true"){
      let tip = document.getElementById("userMessageTip")
      tip.classList.remove("opacity-0")
    }
  }

  function userMessageTipBlur(){
    document.getElementById("userMessageTip").classList.add("opacity-0")
  }
  
  async function sendAssistantRequest(messages){
    // await useFetch(useRuntimeConfig().public.apiBase + "/chat/" + topicId + "/conversation", {
    //       method: 'post',
    //       headers: {"Authorization":"Bearer " + user.access_token},
    //       body: messages,
    //       onRequest({request}){
    //         // chatList.value.push({id: undefined, role: "assistant", content_type: "text", content: "", attachs: [], topic_chat_issues: []})
    //         setTimeout(() =>{
    //           // 页面滚动条自动滚动到内容最底部
    //           let main = document.getElementById('main')
    //           main.scrollTop = main.scrollHeight
    //         }, 100)
    //       },
    //       onResponse({ request, response, options }) {
    //           if(response.ok){
    //             chatList.value[chatList.value.length-1] = response._data.topic_chat
    //             setTimeout(() =>{
    //               // 页面滚动条自动滚动到内容最底部
    //               let main = document.getElementById('main')
    //               main.scrollTop = main.scrollHeight
    //             }, 100)
    //             userRemainMessageStats(Number(response._data.remain_count))   
    //           }else if(response.status === 401){  // 登录过期
    //             useUser.removeUser()
    //             router.push("/login")
    //           }else if(response.status === 403){  // 超出最大使用限制
    //             userRemainMessageStats(0)
    //             toast.add({
    //               title: response._data.detail,
    //               icon: 'i-heroicons-exclamation-triangle',
    //               color: 'red'
    //             })
    //           } else{
    //             toast.add({
    //               title: 'Server internal error',
    //               icon: 'i-heroicons-exclamation-triangle',
    //               color: 'red'
    //             })
    //             isSending.value = false
    //           }
    //       }
    //   })


    fetchEventSource(useRuntimeConfig().public.apiBase + "/chat/" + topicId + "/conversation", {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + user.access_token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messages),
      async onopen(response) {
        if (response.ok && response.headers.get('content-type') === EventStreamContentType) {
          return; // everything's good
        } else if(response.status === 401){
          useUser.removeUser()
          router.push("/login")
          return
        } else if(response.status === 403){
          userRemainMessageStats(0)
          toast.add({
            title: "Today messages have been exhausted.",
            icon: 'i-heroicons-exclamation-triangle',
            color: 'red'
          })
          return
        } else if(response.status >= 500) {
          toast.add({
            title: 'Server internal error.',
            icon: 'i-heroicons-exclamation-triangle',
            color: 'red'
          })
          return
        }
      },
      onmessage(msg) {
        if(msg.event==='start'){
          chatList.value.push({id: undefined, role: msg.data, content_type: "text", content: "", attachs: [], topic_chat_issues: []})
        }else if(msg.event==='stream'){
          chatList.value[chatList.value.length-1].content += msg.data.replaceAll('\\n','\n')
          // 页面滚动条自动滚动到内容最底部
          let main = document.getElementById('main')
          main.scrollTop = main.scrollHeight       
        }else if(msg.event==='end'){
          let endData = JSON.parse(msg.data)
          chatList.value[chatList.value.length-1].id = Number(endData.id)
          userRemainMessageStats(Number(endData.remain_num))
        }
      },
      onerror(err) {
          toast.add({
            title: err,
            icon: 'i-heroicons-exclamation-triangle',
            color: 'red'
          })
      }
    })
  }

  function userRemainMessageStats(remainNum){
    if(remainNum > 0){
      userMessagePlaceholder.value = `${remainNum} messages remaining today...`
      isSending.value = false
    }else{
      userMessagePlaceholder.value = "Today messages have been exhausted..."
      document.getElementById("userMessage").setAttribute("contenteditable", false)
      document.getElementById("userMessageTip").classList.add("opacity-0")
    }
    document.getElementById("userMessage").innerHTML = '<p data-placeholder="' + userMessagePlaceholder.value + '" class="is-empty is-editor-empty before:!text-stone-400 before:whitespace-nowrap"><br class="ProseMirror-trailingBreak"></p>'
  }

  function highlightTemplate(lang, content){
    return '<pre class="hljs rounded-md"><div class="flex flex-col bg-stone-900 rounded-md"><div class="flex justify-between items-center pt-1 pl-3"><div><label class="text-[11px] text-stone-300">' + lang + '</label></div><div class="contents"><div class="flex items-center pt-1 pr-3 cursor-pointer group"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-stone-300 group-[.disabled]:hidden"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-stone-300 hidden group-[.disabled]:block"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg><label class="text-[11px] flex flex-row gap-1 text-stone-300 cursor-pointer" onclick="copyCode(event)">Copy code</label></div></div></div><div style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code class="' + (lang?("language-"+lang):"language") + '" style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none;">' + content + '</code></div></div></pre>'
  }

  function logout(){
    useUser.removeUser()
    router.push("/login")
  }


  function messageInput(event){
    let last_p = event.target.lastChild
    if(!last_p){
        last_p = document.createElement('p')
        last_p.setAttribute("data-placeholder", userMessagePlaceholder.value)
        last_p.setAttribute("class","is-empty is-editor-empty before:!text-stone-400 before:whitespace-nowrap")
        last_p.innerHTML = "<br class='ProseMirror-trailingBreak'>"
        event.target.appendChild(last_p)
        last_p.focus()
        let range = document.createRange();
        range.selectNodeContents(last_p);
        range.collapse(false);
        let selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        return
    }
    if(event.inputType === "insertCompositionText" || event.inputType === "insertText"){
        last_p.removeAttribute("class")
        last_p.removeAttribute("data-placeholder")
        let br = last_p.querySelector(".ProseMirror-trailingBreak")
        if(br){
            br.remove()
        }
    }else if(event.inputType === 'deleteContentBackward'){
        if(last_p.textContent.length===0){
            last_p.setAttribute("data-placeholder", userMessagePlaceholder.value)
            last_p.setAttribute("class","is-empty is-editor-empty before:!text-stone-400 before:whitespace-nowrap")
        }
        if(!event.data){
            last_p.focus()
            let range = document.createRange();
            range.selectNodeContents(last_p);
            range.collapse(false);
            let selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range); 
        }
    }else if(event.inputType === 'insertLineBreak'){
        last_p.removeAttribute("class")
        last_p.removeAttribute("data-placeholder")
    }else if(event.inputType === 'insertParagraph'){
        last_p.previousSibling.removeAttribute("class")
        last_p.previousSibling.removeAttribute("data-placeholder")
        if(last_p.previousSibling.textContent.length !== 0){
            let br = last_p.previousSibling.querySelector(".ProseMirror-trailingBreak")
            if(br){
                br.remove()
            }
        }
    }
}

function removeUploadFile(file_etag){
    uploadFileList.value = uploadFileList.value.filter((f) => f.file_etag !== file_etag)
}

function returnFileSize(number) {
  if (number < 1024) {
    return `${number} B`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}

async function uploadFiles(event){
    let files = event.target.files
    if(files.length===0){
        return
    }
    let remains = 5 - uploadFileList.value.length
    if(remains < files.length){
        toast.add({
            title: `Add files max 5.`,
            icon: 'i-heroicons-exclamation-triangle',
            color: 'red'
        })
        return
    }
    let formData = new FormData()
    for(let f of files){
        if(f.size > 10*1024*1024){
            toast.add({
                title: `Each file size max 10MB.`,
                description: `${f.name}`,
                icon: 'i-heroicons-exclamation-triangle',
                color: 'red'
            })
            return
        }
        let fileSuffix = f.name.substring(f.name.lastIndexOf('.'))
        if(!fileSuffix || !acceptFileTypes.value.includes(fileSuffix)){
            toast.add({
                title: `Unsupported file types.`,
                description: `${f.name}`,
                icon: 'i-heroicons-exclamation-triangle',
                color: 'red'
            })
            return
        }
        formData.append("files", f)
    }
    await useFetch(useRuntimeConfig().public.apiBase + "/upload/files", {
        method: 'post',
        headers: {"Authorization":"Bearer " + user.access_token},
        retry: false,
        body: formData,
        onRequest({ request, options }) {
            isUploadLoading.value = true
        },
        async onResponse({ request, response, options }) {
            isUploadLoading.value = false
            uploadFileList.value = uploadFileList.value.concat(response._data)
        }
    })
}

function previewFile(file_etag, file_name, file_url){
    fileEtag.value = file_etag
    fileName.value = file_name
    fileUrl.value = file_url
    openFilePreview.value = true  
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
</style>