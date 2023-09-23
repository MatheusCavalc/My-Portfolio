<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const items = [
    { image: '/src/assets/images/Project-Sneakers-1.png' },
    { image: '/src/assets/images/Project-Sneakers-2.png' },
    { image: '/src/assets/images/Project-Sneakers-3.png' },
];
</script>

<template>
    <div id="project-3" class="mt-10 md:flex md:gap-3">
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
                    <h1 class="text-2xl font-bold text-center md:text-4xl">Sneakers App</h1>
                </div>

                <div class="mt-6 md:ml-3">
                    <p class="">
                        Sneakers App é um aplicativo de e-commerce com integração de pagamento completa com o
                        Stripe,
                        onde é possível escolher várias opções entre diferentes categorias de sneakers. Conta com um
                        painel de
                        administração completo.
                    </p>
                </div>
            </div>

            <div class="mt-2 md:ml-3">
                <p>
                    Frameworks utilizados: <span class="font-bold">PHP 8.1</span>, <span class="font-bold">Laravel
                        10</span>, <span class="font-bold">Livewire 3.0 (beta)</span>, <span class="font-bold">Alpine.js
                        3.0</span> e <span class="font-bold">TailwindCSS</span>
                </p>
            </div>

            <div class="mt-2 md:ml-3">
                <p class="flex">
                    Repositório:
                    <a href="https://github.com/MatheusCavalc/SneakersApp-livewirev3" target="_blank"
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