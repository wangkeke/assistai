export default defineAppConfig({
    title: '智能助手',
    ui: {
        primary: 'gigas',
        gray: 'cool',
        modal: {
            "wrapper": "relative z-50",
            "inner": "fixed inset-0 overflow-y-auto",
            "container": "flex min-h-full items-end sm:items-center justify-center text-center",
            "padding": "p-4 sm:p-0",
            "margin": "sm:my-8",
            "base": "relative text-left rtl:text-right overflow-hidden w-full flex flex-col",
            "overlay": {
              "base": "fixed inset-0 transition-opacity",
              "background": "bg-black bg-opacity-25 opacity-100 dark:bg-gray-800/75",
              "transition": {
                "enter": "ease-out duration-300",
                "enterFrom": "opacity-0",
                "enterTo": "opacity-100",
                "leave": "ease-in duration-200",
                "leaveFrom": "opacity-100",
                "leaveTo": "opacity-0"
              }
            },
            "background": "bg-white dark:bg-gray-900",
            "ring": "",
            "rounded": "rounded-lg",
            "shadow": "shadow-element",
            "width": "sm:max-w-lg",
            "height": "",
            "transition": {
              "enter": "ease-out duration-300",
              "enterFrom": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enterTo": "opacity-100 translate-y-0 sm:scale-100",
              "leave": "ease-in duration-200",
              "leaveFrom": "opacity-100 translate-y-0 sm:scale-100",
              "leaveTo": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }
          },
          notification: {
            "wrapper": "w-full pointer-events-auto",
            "container": "relative overflow-hidden",
            "title": "text-sm font-bold text-gray-900 dark:text-white",
            "description": "mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",
            "background": "bg-white dark:bg-gray-900",
            "shadow": "shadow-lg",
            "rounded": "rounded-lg",
            "padding": "p-4",
            "ring": "ring-1 ring-gray-200 dark:ring-gray-800",
            "icon": {
              "base": "flex-shrink-0 w-5 h-5 font-bold",
              "color": "text-{color}-700 dark:text-{color}-400"
            },
            "avatar": {
              "base": "flex-shrink-0 self-center",
              "size": "md"
            },
            "progress": {
              "base": "absolute bottom-0 end-0 start-0 h-1",
              "background": "bg-{color}-700 dark:bg-{color}-400"
            },
            "transition": {
              "enterActiveClass": "transform ease-out duration-300 transition",
              "enterFromClass": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
              "enterToClass": "translate-y-0 opacity-100 sm:translate-x-0",
              "leaveActiveClass": "transition ease-in duration-100",
              "leaveFromClass": "opacity-100",
              "leaveToClass": "opacity-0"
            },
            "default": {
              "color": "primary",
              "icon": undefined,
              "closeButton": {
                "icon": "i-heroicons-x-mark-20-solid",
                "color": "gray",
                "variant": "link",
                "padded": false
              },
              "actionButton": {
                "size": "xs",
                "color": "white"
              }
            }
          }
                    
    }
  })