<script lang="ts" setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Discover from '~/components/Discover.vue';
</script>

<template>
  <div class="min-h-screen bg-pit-black">
    <main class="w-full">
      <!-- HERO SECTION -->
      <section class="relative isolate flex min-h-[85vh] w-full items-center overflow-hidden bg-cover bg-center py-20 lg:py-28" style="background-image: linear-gradient(180deg, rgba(20,17,15,0.65) 0%, rgba(20,17,15,0.85) 55%, rgba(20,17,15,0.95) 100%), url('/images/bbq-hero.jpg');">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.24),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(158,42,43,0.25),_transparent_35%)]"></div>
        <div class="absolute inset-0 bg-[linear-gradient(90deg,_rgba(224,169,109,0.08)_0%,_transparent_35%,_rgba(224,169,109,0.08)_100%)]"></div>

        <!-- Consistent Container -->
        <div class="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl text-left">
            <p class="mb-4 text-sm uppercase tracking-[0.4em] text-pit-amber font-semibold">
              Texas Smokehouse • Open Daily
            </p>

            <h1 class="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-pit-paper sm:text-5xl lg:text-7xl">
              Demolition Boys<br />
              <span class="text-pit-amber">Smoke House.</span>
            </h1>

            <p class="mt-6 text-lg leading-8 text-pit-cream/90 sm:text-xl">
              Slow-smoked brisket, savory ribs, and bold sides served with the kind of hospitality that feels like home.
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
      </section>

      <!-- DISCOVER SECTION -->
      <section class="py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col items-center justify-center gap-6 text-center">
            <!-- Discover Icon -->
            <div class="rounded-full bg-pit-amber p-4">
              <svg class="h-10 w-10 text-pit-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold tracking-tight text-pit-paper sm:text-4xl lg:text-5xl">
              Discover the Flavor of Texas
            </h2>
            <p class="max-w-2xl text-lg leading-8 text-pit-cream/90">
              At Demolition Boys BBQ, we bring the authentic taste of Texas to your plate. Our slow-smoked meats and bold flavors are crafted with care, ensuring every bite is a memorable experience.
            </p>
            <div class="mt-2">
              <button class="rounded-full bg-pit-amber px-6 py-3 font-semibold text-pit-black transition hover:translate-y-[-1px] hover:bg-pit-paper">
                Explore Our Menu
              </button>
            </div>
            <Discover />
          </div>
        </div>
      </section>

      <!-- ABOUT US SECTION -->
      <section class="py-16 lg:py-24 bg-pit-bark/50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <!-- Main Grid/Flex Container -->
          <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            <!-- Left Image (Columns 1-4 on Desktop) -->
            <div class="lg:col-span-4 h-80 lg:h-full min-h-[320px] overflow-hidden rounded-2xl">
              <img src="/images/placeholder.avif" alt="about us featured image" class="h-full w-full object-cover" />
            </div>

            <!-- Right Content Area (Columns 5-12 on Desktop) -->
            <div class="flex flex-col gap-8 lg:col-span-8">
              <div class="space-y-3">
                <span class="text-sm font-semibold uppercase tracking-widest text-pit-amber">About Us</span>
                <h2 class="text-3xl font-bold text-pit-paper sm:text-4xl">
                  Deliciously smoky, perfectly charred. BBQ done right
                </h2>
                <p class="text-lg text-pit-cream/80">
                  Volutpat commodo ex neque faucibus aliquam. Integer himenaeos adipiscing parturient nibh consectetuer litora maximus diam.
                </p>
              </div>

              <!-- Nested Features & Side Image -->
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
                <div class="space-y-6">
                  <div class="space-y-1 border-l-2 border-pit-amber pl-4">
                    <h3 class="font-bold text-pit-paper">Family Place BBQ</h3>
                    <p class="text-sm text-pit-cream/70">In at consectetur dolor orci magna nascetur. Gravida felis magnis vel vulputate praesent quis primis.</p>
                  </div>
                  <div class="space-y-1 border-l-2 border-pit-amber pl-4">
                    <h3 class="font-bold text-pit-paper">BBQ Delivery Grill</h3>
                    <p class="text-sm text-pit-cream/70">In at consectetur dolor orci magna nascetur. Gravida felis magnis vel vulputate praesent quis primis.</p>
                  </div>
                  <div class="space-y-1 border-l-2 border-pit-amber pl-4">
                    <h3 class="font-bold text-pit-paper">Private Table Restaurant</h3>
                    <p class="text-sm text-pit-cream/70">In at consectetur dolor orci magna nascetur. Gravida felis magnis vel vulputate praesent quis primis.</p>
                  </div>
                </div>

                <!-- Secondary Image tied cleanly with h-full + object-cover -->
                <div class="h-64 overflow-hidden rounded-xl">
                  <img src="/images/placeholder.avif" alt="BBQ grill side image" class="h-full w-full object-cover" />
                </div>
              </div>

            </div>

          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <!-- Card 1: Central Texas Brisket -->
            <div class="px-4 flex gap-2 items-center">
              <img src="https://placehold.co/32x32" alt="Sliced Smoked Beef Brisket" class="h-16 w-16" />
              <div class="max-w-sm">
                <h6 class="text-pit-amber font-bold uppercase text-xl">Smoke To Perfection</h6>
                <p class="text-pit-cream">Smoke flavor BBQ</p>
              </div>
            </div>

            <!-- Card 2: Pork Ribs -->
            <div class="px-4 flex gap-2 items-center">
              <img src="https://placehold.co/32x32" alt="Smoked Pork Spare Ribs" class="h-16 w-16" />
              <div class="max-w-sm">
                <h6 class="text-pit-amber font-bold uppercase text-xl">Great Price</h6>
                <p class="text-pit-cream">From Pork to Ribs. we got great price</p>
              </div>
            </div>

            <!-- Card 3: Texas Beef Sausage -->
            <div class="px-4 flex gap-2 items-center">
              <img src="https://placehold.co/32x32" alt="Smoked Jalapeño Cheddar Sausage Links" class="h-16 w-16" />
              <div class="max-w-sm">
                <h6 class="text-pit-amber font-bold uppercase text-xl">House Made BBQ Sauce</h6>
                <p class="text-pit-cream">A fine sauce of spice</p>
              </div>
            </div>

            <!-- Card 4: Traditional Sides -->
            <div class="px-4 flex gap-2 items-center">
              <img src="https://placehold.co/32x32" alt="Pinto Beans and Potato Salad" class="h-16 w-16" />
              <div class="max-w-sm">
                <h6 class="text-pit-amber font-bold uppercase text-xl">The Pitmaster</h6>
                <p class="text-pit-cream">expert on BBQ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MENU SECTION -->
      <section class="py-16 lg:py-24">
        <div class="mx-auto max-width-7xl px-16 lg:px-16">
          
        </div>
      </section>

    </main>
  </div>
</template>