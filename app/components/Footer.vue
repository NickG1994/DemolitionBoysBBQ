<script lang="ts" setup>
const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact', href: '/contact' }
];
</script>

<template>
  <footer class="border-t border-pit-paper/10 bg-pit-black text-pit-cream">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-pit-amber">Demolition Boys BBQ</p>
          <p class="mt-5 max-w-xs text-sm leading-7 text-pit-cream/75">
            Slow-smoked barbecue, house-made sides, and the kind of hospitality that keeps people coming back.
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-pit-paper">Site Map</h3>
          <ul class="mt-5 space-y-3 text-sm text-pit-cream/75">
            <li v-for="link in footerLinks" :key="link.href">
              <NuxtLink :to="link.href" class="transition hover:text-pit-amber">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-pit-paper">Contact</h3>
          <ul class="mt-5 space-y-3 text-sm text-pit-cream/75">
            <li>
              <a href="tel:+19566854117" class="transition hover:text-pit-amber">(956) 685-4117</a>
            </li>
            <li>
              <a href="mailto:hello@demolitionboysbbq.com" class="transition hover:text-pit-amber">hello@demolitionboysbbq.com</a>
            </li>
            <li>Mon–Sun: 11:00 AM – 9:00 PM</li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-pit-paper">Location</h3>
          <p class="mt-5 text-sm leading-7 text-pit-cream/75">
            4301 N. Doffing<br />
            Mission, TX 78701
          </p>
        </div>
      </div>

      <div class="mt-10 border-t border-pit-paper/10 pt-6 text-center text-sm text-pit-cream/60">
        &copy; {{ new Date().getFullYear() }} Demolition Boys BBQ. All rights reserved.
      </div>
    </div>
  </footer>
</template>