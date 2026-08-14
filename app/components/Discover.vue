<script lang="ts" setup>
import { computed, ref } from 'vue';

const discoverItems = [
  {
    id: 1,
    title: 'Brisket',
    description: 'Slow-smoked for 16 hours over sweet hickory wood until melt-in-your-mouth tender, featuring a rich peppered bark and finished with our signature house-made BBQ sauce.',
    tag:[""],
    price: 15,
    image: '/images/menu-item-1.jpg'
  },
  {
    id: 2,
    title: 'Ribs',
    description: 'Fall-off-the-bone tender St. Louis style ribs, dry-rubbed with our hand-crafted spice blend and glazed with a sweet, smoky BBQ glaze.',
    tag:[""],
    price: 24,
    image: '/images/menu-item-1.jpg'
  },
  {
    id: 3,
    title: 'Pulled Pork',
    description: 'Slow-cooked pork shoulder, hand-pulled for maximum juiciness, tossed with authentic tangy spices, and bursting with rich wood-smoked flavor in every bite.',
    tag:[""],
    price: 15,
    image: '/images/menu-item-1.jpg'
  },
  {
    id: 4,
    title: 'Sausage',
    description: 'House-made pork and beef sausages, seasoned with a blend of traditional spices and smoked to perfection for a rich, savory taste.',
    tag:[""],
    price: 15,
    image: '/images/menu-item-1.jpg'
  },
  {
    id: 5,
    title: 'Smoked Chicken',
    description: 'Tender chicken smoked low and slow with a citrusy spice rub, delivering a juicy bite with a deep wood-fired finish.',
    tag:[""],
    price: 15,
    image: '/images/menu-item-1.jpg'
  },
  {
    id: 6,
    title: 'Burnt Ends',
    description: 'Crispy, caramelized bites of brisket point tossed with a sticky glaze for a sweet, smoky, melt-in-your-mouth treat.',
    tag:[""],
    price: 13,
    image: '/images/menu-item-1.jpg'
  },
  {
    id: 7,
    title: 'Mac & Cheese',
    description: 'Creamy, cheesy comfort baked until golden and finished with a smoky crust that pairs perfectly with every platter.',
    tag:[""],
    price: 12,
    image: '/images/menu-item-1.jpg'
  }
];

const visibleItems = computed(() => {
                                      // Truncates odd numbers down to the nearest lower even number (capped at 4)
                                      const count = Math.min(discoverItems.length - (discoverItems.length % 2), 4);
                                      return discoverItems.slice(0, count);

                                    });  


</script>

 

<template>
    <!-- Discover Container -->
    <div class="w-full py-4">
        <!-- Discover Wrapper-->
        <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <!-- Discover Items -->
            <div v-for="item in visibleItems" :key="item.id" class="flex flex-col w-full aspect-[2/3] bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-lg relative">
              <span class="border rounded-xl p-2 border-black absolute left-4 top-4 bg-neutral-900">${{ item.price }}</span>
                <!-- Discover Image -->
                <div class="h-3/5 w-full">
                    <img :src="item.image" :alt="item.title" class="h-full w-full object-cover" />
                </div>
                <!-- Discover Text -->
                <div class="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="text-lg font-semibold text-pit-paper line-clamp-1 font-bold uppercase">{{ item.title }}</h3>
                        <p class="mt-1 text-sm text-pit-cream/90 py-2">{{ item.description.length >= 120 ? item.description.slice(0,120) + '...' : item.description }}</p>
                    </div>
                    <button class="mt-4 w-full rounded bg-pit-bark px-4 py-2 font-medium text-pit-cream cursor-pointer shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-pit-bark/80">
                        View Menu
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>