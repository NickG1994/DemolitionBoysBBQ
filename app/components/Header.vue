<script lang="ts" setup>
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-smoke-gray/30 bg-smoke-charcoal/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <a href="/" class="text-xl font-semibold tracking-[0.2em] text-smoke-gold uppercase">
        Demolition Boys BBQ
      </a>
      <nav>
        <ul class="flex items-center gap-4 text-sm text-smoke-cream/90">
          <li>
            <NuxtLink to="/" class="relative inline-block after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-pit-amber after:to-pit-rust after:transition-transform after:duration-300 hover:after:scale-x-100">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="relative inline-block after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-pit-amber after:to-pit-rust after:transition-transform after:duration-300 hover:after:scale-x-100">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/menu" class="cursor-pointer relative inline-block after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-pit-amber after:to-pit-rust after:transition-transform after:duration-300 hover:after:scale-x-100">
              Menu
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="contact" class="relative inline-block after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-pit-amber after:to-pit-rust after:transition-transform after:duration-300 hover:after:scale-x-100">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>