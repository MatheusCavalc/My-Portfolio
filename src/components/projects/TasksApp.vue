<script setup>
import image1 from '/src/assets/images/App-Task-1.png'
import image2 from '/src/assets/images/App-Task-2.png'
import image3 from '/src/assets/images/App-Task-3.png'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const items = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
];
</script>

<template>
    <div id="project-1" class="mt-10 md:flex md:gap-3">
        <div data-animation="left">
            <Carousel perPage="1" :pagination="true">
                <Slide v-for="(item, index) in items" :key="index">
                    <img :src="item.image" alt="E-newS Project" />
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
                    <h1 class="text-2xl font-bold text-center md:text-4xl">Tasks App</h1>
                </div>

                <div class="mt-6 md:ml-3">
                    <p class="">
                        Tasks App é um aplicativo de gerenciamento de projetos e tarefas que utiliza um sistema
                        de quadros virtuais para ajudar equipes e indivíduos a organizar e acompanhar seu trabalho
                    </p>
                </div>
            </div>

            <div class="mt-2 md:ml-3">
                <p>
                    Frameworks utilizados: <span class="font-bold">PHP 8.1</span>, <span class="font-bold">Laravel
                        10</span>, <span class="font-bold">Inertia.js 1.0</span>, <span class="font-bold">Vue.js
                        3</span> e <span class="font-bold">TailwindCSS</span>
                </p>
            </div>

            <div class="mt-2 md:ml-3">
                <p class="flex">
                    Repositório:
                    <a href="https://github.com/MatheusCavalc/Task-App" target="_blank"
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