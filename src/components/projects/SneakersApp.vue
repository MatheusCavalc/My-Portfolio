<script setup>
import { onMounted, ref } from 'vue'
import image1 from '/src/assets/images/Project-Sneakers-1.png'
import image2 from '/src/assets/images/Project-Sneakers-2.png'
import image3 from '/src/assets/images/Project-Sneakers-3.png'
import image4 from '/src/assets/images/Project-Sneakers-4.png'

import image5 from '/src/assets/images/Project-Sneakers-Movel-1.png'
import image6 from '/src/assets/images/Project-Sneakers-Movel-2.png'
import image7 from '/src/assets/images/Project-Sneakers-Movel-3.png'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const items = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
];

const itemsScreenMobile = [
    { image: image6 },
    { image: image5 },
    { image: image7 },
];

const view = ref('')

const changeView = (carousel) => {
    view.value = carousel
}

onMounted(() => {
    changeView('web')
})
</script>

<template>
    <div id="project-3" class="mt-10 md:flex md:gap-10">
        <div class="lg:w-3/5">
            <div class="flex justify-center mb-4">
                <div class="flex gap-2">
                    <button type="button" @click="changeView('web')"
                        :class="{ 'text-white bg-gradient-to-r from-black to-gray-900': view === 'web', ' text-black bg-white border border-black': view !== 'web' }"
                        class="font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                        Desktop
                    </button>

                    <button type="button" @click="changeView('mobile')"
                        :class="{ 'text-white bg-gradient-to-r from-black to-gray-900': view === 'mobile', 'text-black bg-white border border-black': view !== 'mobile' }"
                        class="font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                        Mobile
                    </button>
                </div>
            </div>

            <div>
                <div v-if="view == 'web'">
                    <Carousel perPage="1" :pagination="true">
                        <Slide v-for="(item, index) in items" :key="index">
                            <img :src="item.image" class="object-contain w-full h-full border border-black"
                                alt="Task Project" />
                        </Slide>

                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>

                <div v-else>
                    <Carousel perPage="1" :pagination="true">
                        <Slide v-for="(item, index) in itemsScreenMobile" :key="index">
                            <img :src="item.image"
                                class="object-contain bg-black border-2 border-black h-[400px] rounded-xl"
                                alt="Task Project" />
                        </Slide>

                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>

        <div class="mt-5 lg:mt-20 lg:w-2/5">
            <div class="w-full md:w-96">
                <div class="mt-4 md:mt-0">
                    <h1 class="text-2xl font-bold text-center md:text-4xl">Sneakers App</h1>
                </div>

                <div class="mt-6">
                    <p class="">
                        Sneakers App é um aplicativo de e-commerce com integração de pagamento completa com o
                        Stripe,
                        onde é possível escolher várias opções entre diferentes categorias de sneakers. Conta com um
                        painel de
                        administração completo.
                    </p>
                </div>
            </div>

            <div class="mt-2">
                <p>
                    Frameworks utilizados: <span class="font-bold">PHP 8.1</span>, <span class="font-bold">Laravel
                        10</span>, <span class="font-bold">Livewire 3.0</span>, <span class="font-bold">Alpine.js
                        3.0</span>, <span class="font-bold">TailwindCSS</span> e <span class="font-bold">MySQL</span>
                </p>
            </div>

            <div class="mt-4">
                <a href="https://github.com/MatheusCavalc/SneakersApp-livewirev3" target="_blank">
                    <button type="button"
                        class="text-white bg-black hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 w-full lg:w-fit">Ver
                        no Github</button>
                </a>
            </div>
        </div>
    </div>

    <div class="flex justify-center my-10">
        <div class="w-full h-1 rounded-full md:w-4/5 bg-slate-800"></div>
    </div>
</template>