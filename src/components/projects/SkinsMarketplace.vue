<script setup>
import image2 from '../../assets/images/Skins-Marketplace-1.png';
import image1 from '../../assets/images/Skins-Marketplace-2.png';
import image3 from '../../assets/images/Skins-Marketplace-3.png';
import image4 from '../../assets/images/Skins-Marketplace-4.png';
import image5 from '../../assets/images/Skins-Marketplace-5.png';

import image9 from '../../assets/images/Skin-Marketplace-Movel-1.png';
import image10 from '../../assets/images/Skin-Marketplace-Movel-2.png';
import image11 from '../../assets/images/Skin-Marketplace-Movel-3.png';
import image12 from '../../assets/images/Skin-Marketplace-Movel-4.png';
import image13 from '../../assets/images/Skin-Marketplace-Movel-5.png';

import image6 from '../../assets/images/Ionic-Skins-Marketplace-1.jpg';
import image7 from '../../assets/images/Ionic-Skins-Marketplace-2.jpg';
import image8 from '../../assets/images/Ionic-Skins-Marketplace-3.jpg';

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { onMounted, ref } from 'vue';

const itemsWeb = [
    { image: image2 },
    { image: image1 },
    { image: image3 },
    { image: image4 },
    { image: image5 }
];

const itemsIonic = [
    { image: image6 },
    { image: image7 },
    { image: image8 }
];

const itemsMobile = [
    { image: image9 },
    { image: image10 },
    { image: image11 },
    { image: image12 },
    { image: image13 }
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
    <div id="project-2" class="mt-10 md:flex md:gap-3">
        <div class="lg:w-3/5">
            <div class="flex justify-center mb-4">
                <div class="flex gap-2">
                    <button type="button" @click="changeView('web')"
                        :class="{ 'text-white bg-slate-900 border': view === 'web', ' text-black bg-white border-2 border-black': view !== 'web' }"
                        class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        Desktop
                    </button>

                    <button type="button" @click="changeView('mobile')"
                        :class="{ 'text-white bg-slate-900 border': view === 'mobile', 'text-black bg-white border-2 border-black': view !== 'mobile' }"
                        class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        Mobile
                    </button>

                    <button type="button" @click="changeView('app')"
                        :class="{ 'text-white bg-slate-900 border': view === 'app', 'text-black bg-white border-2 border-black': view !== 'app' }"
                        class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        App
                    </button>
                </div>
            </div>

            <div data-animation="left">
                <div v-if="view == 'web'">
                    <Carousel perPage="1" :pagination="true">
                        <Slide v-for="(item, index) in itemsWeb" :key="index">
                            <img :src="item.image" class="object-contain w-full h-full border border-black"
                                alt="Skins Marketplace" />
                        </Slide>

                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>

                <div v-if="view == 'mobile'">
                    <Carousel perPage="1" :pagination="true">
                        <Slide v-for="(item, index) in itemsMobile" :key="index">
                            <img :src="item.image"
                                class="object-contain bg-black border-2 border-black h-[400px] rounded-xl"
                                alt="Skins Marketplace" />
                        </Slide>

                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>

                <div v-if="view == 'app'">
                    <Carousel perPage="1" :pagination="true">
                        <Slide v-for="(item, index) in itemsIonic" :key="index">
                            <img :src="item.image"
                                class="object-contain bg-black border-2 border-black h-[400px] rounded-xl"
                                alt="Skins Marketplace" />
                        </Slide>

                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>

        <div class="mt-20 lg:w-2/5" data-animation="right">
            <div class="w-full md:w-96">
                <div class="mt-4 md:mt-0">
                    <h1 class="text-2xl font-bold text-center md:text-4xl">Skins Marketplace</h1>
                </div>

                <div class="mt-6 md:ml-3">
                    <p class="">
                        Skins Marketplace é uma aplicação de compra e venda de skins, disponível via interface web, com
                        Vue.js, e via aplicativo móvel, com Ionic.
                    </p>
                </div>
            </div>

            <div class="mt-2 md:ml-3">
                <p>
                    Frameworks utilizados: <span class="font-bold">PHP 8.1</span>, <span class="font-bold">Laravel
                        10 API</span>, <span class="font-bold">Vue.js
                        3</span>, <span class="font-bold">TailwindCSS</span>, <span class="font-bold">Ionic 7.0</span> e <span class="font-bold">MySQL</span>
                </p>
            </div>

            <div class="mt-2 md:ml-3">
                <p class="flex">
                    Repositório: <a href="https://github.com/MatheusCavalc/SkinsMarketplace" target="_blank"
                        class="ml-1 font-bold text-slate-800 hover:underline">Github</a> <span><img
                            class="w-5 h-5 md:h-6 md:w-6" src="../../assets/icons/redirect.svg" alt=""></span>
                </p>
            </div>
        </div>
    </div>

    <div class="flex justify-center my-10">
        <div class="w-full h-1 rounded-full md:w-4/5 bg-slate-800"></div>
    </div>
</template>