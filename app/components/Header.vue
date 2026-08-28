<script lang="ts" setup>
const isMenuOpen = ref(false)
const isHeaderHidden = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Contact', to: '/contact' }
]

let lastScrollY = 0

const handleScroll = () => {
  const currentY = window.scrollY;
  if(currentY <= 10 ){
    isHeaderHidden.value = false;
    console.log('very top')
    return
  }

   // scroll up
  if(currentY >= lastScrollY && currentY >= 80) {
    isHeaderHidden.value = true
    console.log('scrolling down')
  }
  else{
    isHeaderHidden.value = false
    console.log('scrolling up')
  }

  lastScrollY = currentY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    :class="[
      'sticky top-0 inset-x-0 z-50 w-full bg-pit-black/50 backdrop-blur-md border-b border-white/10 transition-transform duration-300 ease-in-out ',
      isHeaderHidden ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <!-- Desktop Header -->
    <div class="hidden xl:flex mx-auto max-w-7xl items-center justify-between px-6 py-4">
      <div class="text-right">
        <NuxtLink to="/" class="inline-block w-32 align-middle text-right mr-4">
          <img class="h-full w-full object-contain" src="/images/logo.png" alt="Demolition Boys BBQ logo">
        </NuxtLink>
        <h4 class="inline-block align-middle text-left bg-linear-to-b from-pit-rust to-pit-amber bg-clip-text text-transparent uppercase">
          Demolition Boys BBQ <br/> SmokeHouse
        </h4>
      </div>

      <nav class="flex space-x-8">
        <ul class="flex items-center gap-4 text-sm text-smoke-cream/90">
          <li v-for="link in navLinks" :key="link.label">
            <NuxtLink 
              :to="link.to" 
              class="relative inline-block py-1 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-pit-amber after:to-pit-rust after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Mobile Header -->
    <div class="relative flex xl:hidden mx-auto max-w-7xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="w-28 aspect-square flex items-center">
        <img class="h-full w-full object-contain" src="/images/logo.png" alt="Demolition Boys BBQ logo">
      </NuxtLink>

      <button 
        @click="isMenuOpen = !isMenuOpen"
        type="button" 
        aria-label="Toggle Menu"
        class="relative flex h-12 w-12 items-center justify-center rounded border border-pit-smoke bg-pit-amber cursor-pointer"        
      >
        <span 
          class="relative block w-8 h-[5px] rounded-full bg-pit-black 
                 before:content-[''] before:absolute before:block before:top-0 before:left-0 
                 before:w-8 before:h-[5px] before:rounded-full before:bg-pit-black before:-translate-y-2.5
                 after:content-[''] after:absolute after:block after:top-0 after:left-0 
                 after:w-8 after:h-[5px] after:rounded-full after:bg-pit-black after:translate-y-2.5"
        ></span>
      </button>

      <!-- Mobile Dropdown Drawer -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div 
          v-if="isMenuOpen" 
          class="absolute top-full left-0 right-0 w-full bg-pit-black/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl"
        >
          <nav>
            <ul class="flex flex-col gap-4 text-base font-medium text-smoke-cream/90">
              <li v-for="link in navLinks" :key="link.label">
                <NuxtLink 
                  :to="link.to" 
                  @click="isMenuOpen = false"
                  class="block py-2 hover:text-pit-amber transition"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>