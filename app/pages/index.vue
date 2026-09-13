<script lang="ts" setup>
import Discover from '~/components/Discover.vue';
import menuItems from '~/assets/data/menuItems';
import Map from '~/components/Map.client.vue';

const prevButton = ref(null)
const nextButton = ref(null)

const heroIndex = ref(0)
const timerInterval = ref(null)
const timerID = ref(false)
const heroSliderCards = [
  {
    id: 'hero-card-01',
    badge: 'Texas Smokehouse • Open Daily',
    title: 'Demolition Boys Smoke House',
    subtitle: 'Low & Slow Central Texas BBQ',
    description: 'Slow-smoked brisket, savory ribs, and bold sides served with true Texas hospitality.',
    media: {
      type: 'image',
      src: '/images/bbq-hero.jpg',
      alt: 'Sliced prime smoked brisket platter with pickles, onions, and sides',
      fallbackSrc: '/images/hero/brisket-platter-thumb.jpg'
    },
    ctaPrimary: {
      label: 'Order Online',
      url: '/order',
    },
    ctaSecondary: {
      label: 'View Full Menu',
      url: '/menu',
      target: '_self'
    },
    theme: {
      textColor: '#FFFFFF',
      overlayOpacity: 0.5,
      alignment: 'left'
    }
  },
  {
    id: 'hero-card-02',
    badge: 'Weekend Special',
    title: 'St. Louis Style Rib Racks',
    subtitle: 'Smoked 6 Hours Over Oak & Hickory',
    description: 'Fall-off-the-bone tender ribs glazed with our signature molasses and pit-master spice rub.',
    media: {
      type: 'image',
      src: '/images/hero-bg-slide-2.jpg',
      alt: 'Rack of glazed St. Louis style barbecue pork ribs',
      fallbackSrc: '/images/hero-bg-slide-2.jpg'
    },
    ctaPrimary: {
      label: 'Reserve a Rack',
      url: '/specials',
      target: '_self'
    },
    ctaSecondary: {
      label: 'Catering Options',
      url: '/catering',
      target: '_self'
    },
    theme: {
      textColor: '#FFFFFF',
      overlayOpacity: 0.4,
      alignment: 'center'
    }
  },
  {
    id: 'hero-card-03',
    badge: 'Family Feeds & Events',
    title: 'Pitmaster Party Platters',
    subtitle: 'Feed the Whole Crew',
    description: 'Choose 3 meats, 4 homemade sides, and Texas toast. Perfect for gamedays, parties, and family gatherings.',
    media: {
      type: 'video',
      src: '/videos/bg-hero-animation-slider.mp4',
      alt: 'Large barbecue feast tray with brisket, pulled pork, sausage, mac and cheese, and cornbread',
      fallbackSrc: '/images/hero/family-platter-thumb.jpg'
    },
    ctaPrimary: {
      label: 'Build Your Platter',
      url: '/family-packs',
      target: '_self'
    },
    ctaSecondary: {
      label: 'Location & Hours',
      url: '/location',
      target: '_self'
    },
    theme: {
      textColor: '#FFFFFF',
      overlayOpacity: 0.6,
      alignment: 'right'
    }
  }
];

const stopTimer = (timer) => {
  clearInterval(timer)
  timerID.value = null
}

const handleSlider = () => {
  const maxSlides = heroSliderCards.length - 1

  if(timerID != null){
    console.log("Tick... happens every 3 seconds");
    timerID.value = setInterval(() => {
      console.log("Tick... happens every 3 seconds");
      if(heroIndex.value < maxSlides) {
        heroIndex.value += 1
      }
      else {
        heroIndex.value = 0
      }
    },10000)
  }

}


const menuCategories = menuItems;

const getCategoryHref = (categoryName: string) => {
  const slug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `/menu?category=${encodeURIComponent(slug)}`;
};

onMounted(() => {
  handleSlider()
})



</script>

<template>
  <div class="min-h-screen bg-pit-black">
    <main class="w-full">
      <!-- Hero section -->
      <section class="relative isolate flex flex-nowrap min-h-[80vh] w-full items-center overflow-hidden">
        <!--
          <button ref="prevButton" class="absolute z-30 cursor-pointer left-10 text-7xl border-pit-black rounded-full bg-pit-amber p-4">
             <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
          </button>
        -->
        <div :style="{ transform: `translateX(${-(heroIndex) * 100}%)`}" class="transition-transform duration-400 relative w-full flex-shrink-0 flex items-center min-h-[80vh]">
        <div v-for="card in heroSliderCards" 
             :key="card.id" 
             class="relative w-full flex-shrink-0 flex items-center min-h-[80vh]">
          <div class="absolute inset-0 z-50 bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.24),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(158,42,43,0.25),_transparent_35%)]"></div>
          <div class="absolute inset-0  z-50 bg-[linear-gradient(90deg,_rgba(224,169,109,0.08)_0%,_transparent_35%,_rgba(224,169,109,0.08)_100%)]"></div>
          <div class="absolute inset-0 z-11 bg-black/30"></div>
            <!-- 2. Your Transparent Color Filter (Swapped solid bg to transparent rgba layers stacked above image) -->
          <div class="absolute inset-0 z-10 bg-gradient-to-r from-pit-bark/80 to-pit-amber/40 mix-blend-multiply"></div>
          <img v-if="card.media.type === 'image'" :src="card.media.src" class="absolute inset-0 w-full h-full object-cover -z-10" />
          <video class="absolute h-full w-full object-cover" v-else loop autoplay>
            <source src="/videos/bg-hero-animation-slider.mp4" type="video/mp4" />
          </video>

          <!-- Consistent Container -->
          <div class="p-16 md:py-16 ">
            <div class="relative mx-auto w-full px-4 sm:px-6 lg:px-16 z-20">
            <div class="max-w-3xl">
              <p class="mb-4 text-sm uppercase tracking-[0.4em] text-pit-amber font-semibold">
                {{ card.badge }}
              </p>

              <h1 class="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-pit-paper sm:text-5xl lg:text-7xl">
                {{ card.title }}
              </h1>

              <p class="mt-6 text-lg leading-8 text-pit-cream/90 sm:text-xl">
                {{ card.description }}
              </p>

              <div class="mt-8 flex flex-wrap gap-4">
                <a href="/menu" class="rounded-full bg-pit-amber px-6 py-3 font-semibold text-pit-black transition hover:translate-y-[-1px] hover:bg-pit-paper">
                  View Menu
                </a>
                <a href="/about" class="rounded-full border border-pit-paper/40 px-6 py-3 font-semibold text-pit-paper transition hover:bg-pit-paper/10">
                  About Us
                </a>
              </div>
            </div>
            </div>
           </div>
        </div>
        </div>
        <!--
        <button ref="nextButton" class="absolute z-30 cursor-pointer right-10 text-7xl border-pit-black rounded-full bg-pit-amber p-4 flex justify-center items-center">
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
        -->
      </section>


      <section class="py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col items-center justify-center gap-6 text-center">

            <div class="rounded-full w-fit bg-pit-amber p-2">
              <img src="/images/cow-icon.png" class="w-16" />
            </div>
            <h2 class="text-3xl font-bold tracking-tight text-pit-paper sm:text-4xl lg:text-5xl">
              Discover the Flavor of Texas
            </h2>
            <p class="max-w-2xl text-lg leading-8 text-pit-cream/90">
              At Demolition Boys BBQ, we bring the authentic taste of Texas to your plate. Our slow-smoked meats and bold flavors are crafted with care, ensuring every bite is a memorable experience.
            </p>
            <div class="mt-2">
              <nuxtLink to="/menu" class="rounded-full bg-pit-amber px-6 py-3 font-semibold text-pit-black transition hover:translate-y-[-1px] hover:bg-pit-paper">
                Explore Our Menu
              </nuxtLink>
            </div>
            <Discover />
          </div>
        </div>
      </section>


      <section class="py-16 lg:py-24 bg-pit-bark/50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <!-- Main Grid/Flex Container -->
          <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            <!-- Left Image (Columns 1-4 on Desktop) -->
            <div class="lg:col-span-4 h-80 lg:h-full min-h-[320px] overflow-hidden rounded-2xl">
              <img src="/images/meat-category.jpg" alt="about us featured image" class="h-full w-full object-cover" />
            </div>

            <!-- Right Content Area (Columns 5-12 on Desktop) -->
            <div class="flex flex-col gap-8 lg:col-span-8">
              <div class="space-y-3">
                <span class="text-sm font-semibold uppercase tracking-widest text-pit-amber">About Us</span>
                <h2 class="text-3xl font-bold text-pit-paper sm:text-4xl">
                  Deliciously smoky, perfectly charred. BBQ done right
                </h2>
                <p class="text-lg text-pit-cream/80">
                  We don't believe in cutting corners or rushing the smoke. Every brisket, rack, and shoulder spends hours over pure hardwood, absorbing rich flavor until it achieves the perfect bark and a deep smoke ring.
                </p>
              </div>

              <!-- Nested Features & Side Image -->
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
                <div class="space-y-6">
                  <div class="space-y-1 border-l-2 border-pit-amber pl-4">
                    <h3 class="font-bold text-pit-paper">The Smokehouse Experience</h3>
                    <p class="text-sm text-pit-cream/70">Pull up a chair at our counter, catch the aroma of active pits, and enjoy meats sliced fresh to order.</p>
                  </div>
                  <div class="space-y-1 border-l-2 border-pit-amber pl-4">
                    <h3 class="font-bold text-pit-paper">Family-Style Tables</h3>
                    <p class="text-sm text-pit-cream/70">Gather around our long wooden tables built for sharing heavy trays of barbecue, ice-cold drinks, and great conversation.</p>
                  </div>
                  <div class="space-y-1 border-l-2 border-pit-amber pl-4">
                    <h3 class="font-bold text-pit-paper">Live Smoke & Fire</h3>
                    <p class="text-sm text-pit-cream/70">Walk out back to see our wood-fired pits burning 24/7. We cook the old-school way, and you can taste the difference.</p>
                  </div>
                </div>

                <!-- Secondary Image tied cleanly with h-full + object-cover -->
                <div class="h-64 overflow-hidden rounded-xl">
                  <img src="/images/smoke-background-1.jpg" alt="BBQ grill side image" class="h-full w-full object-cover" />
                </div>
              </div>

            </div>

          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <!-- Card 1: Central Texas Brisket -->
            <div class="px-4 flex gap-2 items-center">
              <img src="/images/brisket-item.jpeg" alt="Sliced Smoked Beef Brisket" class="h-16 w-16" />
              <div class="max-w-sm">
                <h6 class="text-pit-amber font-bold uppercase text-xl">Smoke To Perfection</h6>
                <p class="text-pit-cream">Smoke flavor BBQ</p>
              </div>
            </div>

            <!-- Card 2: Pork Ribs -->
            <div class="px-4 flex gap-2 items-center">
              <img src="/images/ribs-item.jpeg" alt="Smoked Pork Spare Ribs" class="h-16 w-16" />
              <div class="max-w-sm">
                <h6 class="text-pit-amber font-bold uppercase text-xl">Great Price</h6>
                <p class="text-pit-cream">From Pork to Ribs. we got great price</p>
              </div>
            </div>

            <!-- Card 3: Texas Beef Sausage -->
            <div class="px-4 flex gap-2 items-center">
              <img src="/images/sausage-item.jpeg" alt="Smoked Jalapeño Cheddar Sausage Links" class="h-16 w-16" />
              <div class="max-w-sm">
                <h6 class="text-pit-amber font-bold uppercase text-xl">House Made BBQ Sauce</h6>
                <p class="text-pit-cream">A fine sauce of spice</p>
              </div>
            </div>

            <!-- Card 4: Traditional Sides -->
            <div class="px-4 flex gap-2 items-center">
              <img src="/images/menu-item-1.jpg" alt="Pinto Beans and Potato Salad" class="h-16 w-16" />
              <div class="max-w-sm">
                <h6 class="text-pit-amber font-bold uppercase text-xl">The Pitmaster</h6>
                <p class="text-pit-cream">expert on BBQ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Menu -->
      <section class="py-16 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="mb-10 text-center">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-pit-amber">
              Menu Highlights
            </p>
            <h2 class="text-3xl font-bold tracking-tight text-pit-paper sm:text-4xl">
              Pick your pitmaster favorite
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <NuxtLink 
              v-for="category in menuCategories"
              :key="category.category"
              :to="getCategoryHref(category.category)"
              class="group rounded-2xl border border-pit-paper/20 bg-pit-bark/40 text-left transition duration-200 hover:-translate-y-1 hover:border-pit-amber hover:bg-pit-bark/60"
            >
              <div class="relative h-44 overflow-hidden ">
                <img
                  :src="category.image"
                  :alt="`${category.category} menu category`"
                  class="relative z-10 h-full w-full object-cover transition duration-300 group-hover:scale-105 "
                />
                <div class="absolute z-20 inset-0 bg-gradient-to-t from-pit-black via-pit-black/20 to-transparent "></div>
              </div>

              <div class="p-5">
                <div class="mb-4 flex items-center justify-between gap-4">
                  <span class="text-lg font-semibold uppercase tracking-wide text-pit-paper">
                    {{ category.category }}
                  </span>
                  <span class="rounded-full border border-pit-amber/60 bg-pit-amber/10 px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pit-amber">
                    {{ category.items.length }}
                  </span>
                </div>
                <p class="text-sm leading-6 text-pit-cream/75">
                  {{ category.note || 'Slow-smoked favorites made to order.' }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

       <section v-if="false" class="px-16 lg:px-24">
        <div class="max-w-7xl">
          <div class="text-center">
            <h3 class="mb-2 uppercase text-3xl text-pit-amber">Our Gallery</h3>
            <p>Checkout our collection Food, plates, and more for a backyard smokehouse feel.</p>
          </div>
          <!-- grid container -->
          <div class="">
            <!-- Grid card wrapper -->
            <div class="grid grid-cols-4 grid-col-4 ">
              <!-- Cards -->
              <div class="">

              </div>
            </div>
          </div>
        </div>
       </section>

      <!-- Contact Us -->
      <section class="py-16 lg:py-24 bg-gradient-to-r from-pit-bark/10 to-transparent">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div class="rounded-2xl bg-pit-bark/30 p-8">
              <h3 class="text-2xl font-bold text-pit-paper">Contact & Location</h3>
              <p class="mt-3 text-pit-cream">4301 N. Doffing, Mission, TX 78701</p>
              <p class="mt-2 text-pit-cream"><a href="tel:+19566854117" class="text-pit-amber font-semibold">(956) 685-4117</a></p>
              <p class="mt-2 text-pit-cream"><a href="mailto:hello@demolitionboysbbq.com" class="text-pit-amber font-semibold">hello@demolitionboysbbq.com</a></p>

              <div class="mt-6">
                <h4 class="text-sm font-semibold uppercase tracking-widest text-pit-amber">Hours</h4>
                <ul class="mt-2 text-pit-cream/90 space-y-1">
                  <li>Mon–Sun: 11:00 AM – 9:00 PM</li>
                </ul>
              </div>

              <div class="mt-6">
                <a href="/contact" class="inline-block rounded-full bg-pit-amber px-6 py-3 font-semibold text-pit-black">Get Directions</a>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden h-80 lg:h-full">
              <Map />
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>