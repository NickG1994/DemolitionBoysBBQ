<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from '#app';
import menuItems from '~/assets/data/menuItems';

const route = useRoute();
const menuCategories = menuItems.map((category) => ({
  ...category,
  items: category.items.map((item) => ({
    ...item,
    image: item.image || category.image || '/images/placeholder.avif'
  }))
}));

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const isItemDetailRoute = computed(() => route.path !== '/menu' && route.path.startsWith('/menu/'));

const selectedCategory = computed(() => {
  const requestedCategory = typeof route.query.category === 'string' ? route.query.category : '';

  return menuCategories.find((category) => slugify(category.category) === requestedCategory) || null;
});

const visibleCategories = computed(() => {
  return selectedCategory.value ? [selectedCategory.value] : menuCategories;
});

const getCategoryHref = (categoryName: string) => `/menu?category=${encodeURIComponent(slugify(categoryName))}`;

const categoryButtonClasses = (categoryName: string) => {
  const isActive = selectedCategory.value && selectedCategory.value.category === categoryName;

  return [
    'rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] transition',
    isActive
      ? 'border-pit-amber bg-pit-amber text-pit-black'
      : 'border-pit-paper/25 bg-pit-bark/50 text-pit-paper hover:border-pit-amber hover:bg-pit-amber/10 hover:text-pit-amber'
  ].join(' ');
};
</script>

<template>
  <div>
    <NuxtPage v-if="isItemDetailRoute" />

    <section v-else class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div class="mb-10 text-center">
      <p class="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-pit-amber">
        Our Menu
      </p>
      <h1 class="text-4xl font-bold tracking-tight text-pit-paper sm:text-5xl">
        Smoked favorites and house specials
      </h1>
      <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-pit-cream/85">
        From brisket to ribs, every plate is built around slow smoke and big flavor.
      </p>
    </div>

    <div class="mb-10 flex flex-wrap justify-center gap-3">
      <a
        href="/menu"
        :class="[
          'rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] transition',
          !selectedCategory
            ? 'border-pit-amber bg-pit-amber text-pit-black'
            : 'border-pit-paper/25 bg-pit-bark/50 text-pit-paper hover:border-pit-amber hover:bg-pit-amber/10 hover:text-pit-amber'
        ]"
      >
        All Menu
      </a>

      <a
        v-for="category in menuCategories"
        :key="category.category"
        :href="getCategoryHref(category.category)"
        :class="categoryButtonClasses(category.category)"
      >
        {{ category.category }}
      </a>
    </div>

    <div class="space-y-8">
      <article
        v-for="category in visibleCategories"
        :id="slugify(category.category)"
        :key="category.category"
        :class="[
          'rounded-3xl border bg-pit-bark/40 p-6 shadow-lg shadow-black/10 transition',
          selectedCategory && selectedCategory.category === category.category
            ? 'border-pit-amber ring-2 ring-pit-amber/60'
            : 'border-pit-paper/15'
        ]"
      >
        <div class="mb-6 flex flex-col gap-4 border-b border-pit-paper/15 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div class="flex items-center gap-4">
            <img
              :src="category.image"
              :alt="`${category.category} menu image`"
              class="h-20 w-20 rounded-xl object-cover"
            />
            <div>
              <p class="text-sm uppercase tracking-[0.28em] text-pit-amber">Category</p>
              <h2 class="mt-2 text-2xl font-bold text-pit-paper sm:text-3xl">
                {{ category.category }}
              </h2>
            </div>
          </div>
          <p class="max-w-xl text-sm leading-6 text-pit-cream/70">
            {{ category.note || 'House favorites made fresh and served with smoke.' }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="item in category.items"
            :key="item.id"
            :to="`/menu/${slugify(item.title)}`"
            class="group overflow-hidden rounded-2xl border border-pit-paper/10 bg-pit-black/30 transition hover:-translate-y-1 hover:border-pit-amber/70"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div class="p-4">
              <div class="mb-3 flex items-center justify-between gap-3">
                <h3 class="text-lg font-semibold text-pit-paper">{{ item.title }}</h3>
                <span class="rounded-full bg-pit-amber/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-pit-amber">
                  {{ item.type }}
                </span>
              </div>

              <p class="text-sm leading-6 text-pit-cream/75">
                {{ item.description }}
              </p>

              <div class="mt-4 flex items-center justify-between text-sm font-semibold text-pit-amber">
                <span>View details</span>
                <span aria-hidden="true">→</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </article>
    </div>
    </section>
  </div>
</template>
