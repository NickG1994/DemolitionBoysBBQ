<script lang="ts" setup>
import {useWindowsSize} from '@vueuse/core';

const isMenuOpen = ref(false)

const navLinks = [
  {
  label:'Home', 
  to: '/'
  },
  {
    label:"About",
    to:'/about'
  },
  {
    label:"Menu",
    to:'/menu'
  },
  {
    label:"Contact",
    to:'/contact'
  }
]

</script>

<template>
  <header class="sticky top-0 z-20 border-b border-smoke-gray/30 bg-smoke-charcoal/95 backdrop-blur ">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    <div class="w-[128px] aspect-[3/3]">
      <img class="h-full w-full object-cover" src="/images/db-logo.png" alt="Demolition Boys BBQ logo">
    </div>
      <nav class="hidden md:flex space-x-8">
        <ul class="flex items-center gap-4 text-sm text-smoke-cream/90">
          <li v-for="link in navLinks" :key="link.label">
            <NuxtLink :to="link.to" class="relative inline-block after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-pit-amber after:to-pit-rust after:transition-transform after:duration-300 hover:after:scale-x-100">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!--Mobile Header-->
    <div>
      <div>

      </div>
    </div>




  </header>
</template>