<script setup>
import image1 from '/src/assets/images/Writer-App-1.png'
import image2 from '/src/assets/images/Writer-App-2.png'
import image3 from '/src/assets/images/Writer-App-3.png'
import image4 from '/src/assets/images/Writer-App-4.png'
import image5 from '/src/assets/images/Writer-App-5.png'
import image6 from '/src/assets/images/Writer-App-6.png'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const items = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
];
</script>

<template>
    <div id="project-5" class="mt-10 md:flex md:gap-3">
        <div data-animation="left">
            <Carousel perPage="1" :pagination="true">
                <Slide v-for="(item, index) in items" :key="index">
                    <img :src="item.image" class="w-full h-full object-contain border border-black" alt="Writer Project" />
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>

        <div class="" data-animation="right">
            <div class="w-full md:w-96">
                <div class="mt-4 md:mt-0">
                    <h1 class="text-2xl font-bold text-center md:text-4xl">Writer App</h1>
                </div>

                <div class="mt-6 md:ml-3">
                    <p class="">
                        Writer App é uma plataforma de publicação online acessível para escritores, jornalistas, blogueiros
                        e criadores de conteúdo compartilharem suas histórias e ideias com uma ampla audiência.
                    </p>
                </div>
            </div>

            <div class="mt-2 md:ml-3">
                <p>
                    Frameworks utilizados: <span class="font-bold">PHP 8.0</span>, <span class="font-bold">Laravel 9
                        API</span>, <span class="font-bold">Sail (Docker)</span>,
                    <span class="font-bold">Vue.js 3</span>, <span class="font-bold">TailwindCSS</span> e
                    <span class="font-bold">MariaDB</span>
                </p>
            </div>

            <div class="mt-2 md:ml-3">
                <p class="flex">
                    Repositório:
                    <a href="https://github.com/MatheusCavalc/Medium-clone" target="_blank"
                        class="ml-1 font-bold text-slate-800 hover:underline">Github</a>
                    <span><img class="w-5 h-5 md:h-6 md:w-6" src="../../assets/icons/redirect.svg" alt=""></span>
                </p>
            </div>
        </div>
    </div>

    <div class="flex justify-center my-10">
        <div class="w-full h-1 rounded-full md:w-4/5 bg-slate-800"></div>
    </div>
</template>