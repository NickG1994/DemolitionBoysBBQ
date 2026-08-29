<script lang="ts" setup>
import { computed, ref } from 'vue';
import menuItems from '~/assets/data/menuItems';


const discoverCards = computed(() => {
  // 1. Flatten all nested 'items' arrays into one single list
  const allItems = menuItems.flatMap(item => item.items);
  
  // 2. Filter that list to only keep items containing the 'featured' tag
  return allItems.filter(filterItem => filterItem.tags.includes('featured'));
});

const computeNumOfSlides = computed(() => {
  return discoverCards.value.slice(0, 4)
})


</script>

<template>

    <div class="w-full py-4">

        <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div v-for="item in computeNumOfSlides" :key="item.id" class="flex flex-col w-full aspect-[2/3] bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-lg relative hover:-translate-y-1 hover:border-pit-amber hover:bg-pit-bark/60">
              <span class="border rounded-xl p-2 border-black absolute left-4 top-4 bg-neutral-900">${{ item.price }}</span>

                <div class="h-2/4 w-full">
                    <img :src="item.image" :alt="item.title" class="h-full w-full object-cover" />
                </div>

                <div class="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="text-lg font-semibold text-pit-paper line-clamp-1 font-bold uppercase">{{ item.title }}</h3>
                        <p class="mt-1 text-sm text-pit-cream/90 py-2">{{ item.description.length >= 100 ? item.description.slice(0,100) + '...' : item.description }}</p>
                    </div>
                    <NuxtLink 
                        :to="`/menu/${encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, '-'))}`"

                        class="mt-4 w-full rounded bg-pit-bark px-4 py-2 font-medium text-pit-cream cursor-pointer shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-pit-bark/80">
                        
                        View Menu
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>