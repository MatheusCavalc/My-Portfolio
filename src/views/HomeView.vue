<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import ContactLinks from '../components/ContactLinks.vue'
import AboutMe from '../components/AboutMe.vue';
import MyProjects from '../components/MyProjects.vue';
import OtherProjects from '../components/OtherProjects.vue';
import LastLinks from '../components/LastLinks.vue';
import MyTechnologies from '../components/MyTechnologies.vue';
</script>

<template>
  <MainLayout>
    <div>

      <div class="text-white bg-slate-800 pt-24">
        <div class="px-5 md:px-14">
          <div class="pb-28">
            <p class="flex gap-2 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-9 h-9">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-9 h-9">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-9 h-9">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </p>

            <div class="md:flex md:justify-evenly md:mt-10">
              <div class="flex justify-center mt-10 md:mt-0 order-1 md:order-2">
                <img class="border-4 border-white rounded-full h-60 w-60 md:h-80 md:w-80"
                  src="https://avatars.githubusercontent.com/u/105112560?v=4" alt="Matheus Cavalcante">
              </div>

              <div class="mt-10 md:mt-20 leading-5 order-2 md:order-1 text-center md:text-left">
                <h1 class="text-xl md:text-2xl">Oi, eu me chamo</h1>
                <h1 class="text-3xl md:text-4xl">Matheus Cavalcante</h1>
                <p class="text-lg md:text-xl">Sou um desenvolvedor web <span class="text-3xl">Full-Stack</span><span
                    class="text-3xl md:text-4xl">.</span></p>

                <div>
                  <ContactLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutMe />

      <MyTechnologies />

      <MyProjects />

      <OtherProjects />

      <LastLinks />

    </div>
  </MainLayout>
</template>
