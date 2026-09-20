<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from '#app';
import menuItems from '~/assets/data/menuItems';

const route = useRoute();
const slug = computed(() => String(route.params.slug || ''));

const item = computed(() => {
  for (const category of menuItems) {
    const match = category.items.find((menuItem) => {
      const name = menuItem.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return name === slug.value;
    });

    if (match) {
      return {
        ...match,
        category: category.category,
        categoryNote: category.note,
        image: match.image || category.image || '/images/placeholder.avif'
      };
    }
  }

  return null;
});

const itemTags = computed(() => item.value?.tags || []);
</script>

<template>
  <main v-if="item" class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div class="mb-6">
      <NuxtLink to="/menu" class="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-pit-amber transition hover:text-pit-paper">
        ← Back to menu
      </NuxtLink>
    </div>

    <article class="overflow-hidden rounded-3xl border border-pit-paper/15 bg-pit-bark/40 shadow-xl shadow-black/15">
      <div class="grid grid-cols-1 gap-0 lg:grid-cols-2">
        <div class="relative min-h-[320px]">
          <img :src="item.image" :alt="item.title" class="h-full w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-pit-black/65 via-pit-black/10 to-transparent"></div>
        </div>

        <div class="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-pit-amber">
            {{ item.category }}
          </p>
          <h1 class="text-4xl font-bold text-pit-paper sm:text-5xl">
            {{ item.title }}
          </h1>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tag in itemTags"
              :key="tag"
              class="rounded-full border border-pit-paper/20 bg-pit-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-pit-cream/80"
            >
              {{ tag }}
            </span>
          </div>

          <div class="mt-6 flex items-center gap-3">
            <span class="rounded-full bg-pit-amber/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-pit-amber">
              {{ item.type }}
            </span>
            <span class="text-sm text-pit-cream/70">{{ item.categoryNote || 'House favorite' }}</span>
          </div>

          <p class="mt-6 text-lg leading-8 text-pit-cream/85">
            {{ item.description }}
          </p>

          <div class="mt-8 rounded-2xl border border-pit-paper/15 bg-pit-black/25 p-5">
            <p class="text-sm uppercase tracking-[0.25em] text-pit-amber">Why people love it</p>
            <p class="mt-3 text-base leading-7 text-pit-cream/80">
              Crafted in-house with slow smoke, bold seasoning, and the comforting flavor profile that makes Demolition Boys BBQ memorable.
            </p>
          </div>
        </div>
      </div>
      
    </article>
  </main>

  <main v-else class="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold text-pit-paper">Item not found</h1>
    <p class="mt-4 text-pit-cream/80">This menu item could not be found. Try returning to the full menu.</p>
    <NuxtLink to="/menu" class="mt-6 inline-block rounded-full bg-pit-amber px-6 py-3 font-semibold text-pit-black hover:bg-pit-paper">
      Go to full menu
    </NuxtLink>
  </main>
</template>
