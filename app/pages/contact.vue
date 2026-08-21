<template>
  <main class="bg-pit-black text-pit-cream">
    <section class="relative overflow-hidden bg-pit-black">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.24),_transparent_35%),linear-gradient(90deg,_rgba(224,169,109,0.08),_transparent_50%)]"></div>

      <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div class="max-w-3xl">
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-pit-amber">
            Contact
          </p>
          <h1 class="font-display text-4xl font-bold uppercase tracking-tight text-pit-paper sm:text-5xl lg:text-6xl">
            Come by and <span class="text-pit-amber">say hello.</span>
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-pit-cream/85">
            We’d love to hear from you—whether you’re stopping in for a quick lunch or planning a big BBQ order for the crew.
          </p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div class="grid gap-8 lg:grid-cols-3">
        <div class="rounded-3xl border border-pit-paper/15 bg-pit-bark/40 p-6">
          <div class="mb-4 inline-flex rounded-full bg-pit-amber/10 p-3 text-pit-amber">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-pit-amber">Location</p>
          <h2 class="mt-4 text-2xl font-bold text-pit-paper">Texas Smokehouse</h2>
          <p class="mt-3 text-pit-cream/75">
            123 BBQ Lane<br />
            Austin, TX 78701
          </p>
        </div>

        <div class="rounded-3xl border border-pit-paper/15 bg-pit-bark/40 p-6">
          <div class="mb-4 inline-flex rounded-full bg-pit-amber/10 p-3 text-pit-amber">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.2 4.2a1 1 0 01-.27.92L9.5 9.5a16 16 0 006.5 6.5l1.696-1.356a1 1 0 01.92-.27l4.2 1.2A1 1 0 0121 18.72V22a2 2 0 01-2 2h-1C10.268 24 0 13.732 0 6V5a2 2 0 012-2z" />
            </svg>
          </div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-pit-amber">Call</p>
          <h2 class="mt-4 text-2xl font-bold text-pit-paper">(512) 555-0123</h2>
          <p class="mt-3 text-pit-cream/75">
            We’re here Monday–Sunday<br />
            11:00 AM – 9:00 PM
          </p>
        </div>

        <div class="rounded-3xl border border-pit-paper/15 bg-pit-bark/40 p-6">
          <div class="mb-4 inline-flex rounded-full bg-pit-amber/10 p-3 text-pit-amber">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-pit-amber">Email</p>
          <h2 class="mt-4 text-2xl font-bold text-pit-paper">hello@demolitionboysbbq.com</h2>
          <p class="mt-3 text-pit-cream/75">
            For catering, events, and general questions.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-pit-bark/50 py-16 lg:py-24">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl border border-pit-paper/15 bg-pit-black/25 p-8 sm:p-10">
          <div class="grid gap-8 lg:grid-cols-2">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.32em] text-pit-amber">Get in touch</p>
              <h2 class="mt-3 text-3xl font-bold text-pit-paper">Let’s get your next BBQ fix started.</h2>
            </div>

            <div class="space-y-4">
              <a href="tel:+15125550123" class="flex items-center justify-between rounded-2xl border border-pit-paper/15 bg-pit-bark/40 px-4 py-3 text-pit-cream transition hover:border-pit-amber hover:text-pit-paper">
                <span class="font-medium">Call us</span>
                <span class="text-pit-amber">(512) 555-0123</span>
              </a>

              <a href="mailto:hello@demolitionboysbbq.com" class="flex items-center justify-between rounded-2xl border border-pit-paper/15 bg-pit-bark/40 px-4 py-3 text-pit-cream transition hover:border-pit-amber hover:text-pit-paper">
                <span class="font-medium">Email us</span>
                <span class="text-pit-amber">hello@demolitionboysbbq.com</span>
              </a>

              <NuxtLink to="/menu" class="flex items-center justify-between rounded-2xl border border-pit-amber bg-pit-amber px-4 py-3 font-semibold text-pit-black transition hover:bg-pit-paper">
                <span>View menu</span>
                <span aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
